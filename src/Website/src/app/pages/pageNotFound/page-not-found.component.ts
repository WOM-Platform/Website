import { Component, OnInit } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"],
  imports: [MatCard, MatCardContent, TranslateModule],
  standalone: true,
})
export class PageNotFoundComponent {}
