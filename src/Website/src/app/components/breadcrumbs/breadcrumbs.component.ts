import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { filter } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  standalone: false,
})
export class BreadcrumbsComponent implements OnInit {
  static readonly ROUTE_DATA_BREADCRUMB = "breadcrumb";
  readonly home = { icon: "pi pi-home", url: "home" };
  menuItems: MenuItem[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.menuItems = this.createBreadcrumbs(this.activatedRoute.root))
      );
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = "",
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;
    const menu: MenuItem[] = [];
    breadcrumbs.forEach((b) => {
      const label: string = this.translate.instant(b.label);
      menu.push({ label, url: b.url });
    });

    if (children.length === 0) {
      return menu;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join("/");
      if (routeURL !== "") {
        url += `/${routeURL}`;
      }

      const labelVal =
        child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];
      if (labelVal !== undefined) {
        const label: string = this.translate.instant(labelVal);
        menu.push({ label, url });
      }
      return this.createBreadcrumbs(child, url, menu);
    }
  }
}
