import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";

@Component({
  selector: "app-pesaro2024",
  templateUrl: "./pesaro2024.component.html",
  styleUrls: ["./pesaro2024.component.css"],
  imports: [CommonModule, TranslateModule, StoreLogosComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class Pesaro2024Component {}
