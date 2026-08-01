import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

export interface AccordionItem {
  titleKey: string;
  paragraphsKeys: string[];
  linkLabelKey?: string;
  routerLink?: string;
  href?: string;
  isOpen?: boolean;
}

@Component({
  selector: "app-accordion",
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  toggle(index: number) {
    this.items[index].isOpen = !this.items[index].isOpen;
  }
}
