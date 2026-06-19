import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Aim } from "src/app/_models";

@Component({
  selector: "app-aims-list",
  imports: [],
  standalone: true,
  templateUrl: "./aims-list.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./aims-list.component.css",
})
export class AimsListComponent {
  @Input() aimList: Aim[] = [];
}
