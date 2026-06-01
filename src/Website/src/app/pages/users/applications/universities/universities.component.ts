import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatList } from "@angular/material/list";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-applications-universities",
  templateUrl: "./universities.component.html",
  standalone: true,
  imports: [TranslateModule, MatList, MatIcon],
})
export class ApplicationsUniversitiesComponent {
  constructor() {}
}
