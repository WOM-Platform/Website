import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-badge",
  imports: [NgClass],
  standalone: true,
  templateUrl: "./badge.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./badge.component.css",
})
export class BadgeComponent {
  @Input() text: string = "";
  @Input() textColor: string = "text-black";
  @Input() bgColor: string = "bg-transparent";
}
