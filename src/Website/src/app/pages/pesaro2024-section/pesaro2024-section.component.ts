import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-pesaro2024-section",
  templateUrl: "./pesaro2024-section.component.html",
  styleUrls: ["./pesaro2024-section.component.css"],
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Pesaro2024SectionComponent {}
