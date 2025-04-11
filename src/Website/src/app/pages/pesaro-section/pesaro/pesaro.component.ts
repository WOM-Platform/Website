import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";

@Component({
  selector: "app-pesaro",
  templateUrl: "./pesaro.component.html",
  styleUrls: ["./pesaro.component.css"],
  imports: [CommonModule, TranslateModule, StoreLogosComponent],
  standalone: true,
})
export class PesaroComponent {}
