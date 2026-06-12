
import { Component, Input } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-btn-find-out-more",
  imports: [RouterLink, TranslateModule],
  templateUrl: "./btn-find-out-more.component.html",
  styleUrl: "./btn-find-out-more.component.css",
})
export class BtnFindOutMoreComponent {
  @Input() ref: string = "";
}
