
import { Component, Input } from "@angular/core";
import { Aim } from "src/app/_models";

@Component({
  selector: "app-aims-list",
  imports: [],
  standalone: true,
  templateUrl: "./aims-list.component.html",
  styleUrl: "./aims-list.component.css",
})
export class AimsListComponent {
  @Input() aimList: Aim[];
}
