import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { StoreLogosComponent } from "../store-logos/store-logos.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [StoreLogosComponent, RouterLink],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
