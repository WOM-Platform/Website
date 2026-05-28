import { Component, OnInit } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-libraries",
  templateUrl: "./libraries.component.html",
  imports: [TranslateModule],
  standalone: true,
})
export class ApplicationsLibrariesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
