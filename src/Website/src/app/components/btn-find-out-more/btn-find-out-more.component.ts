import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: "app-btn-find-out-more",
  imports: [RouterLink],
  templateUrl: "./btn-find-out-more.component.html",
  styleUrl: "./btn-find-out-more.component.css",
})
export class BtnFindOutMoreComponent {
  @Input() ref: string = "";
}
