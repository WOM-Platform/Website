import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { PdfViewerContainerComponent } from "src/app/components/pdf-viewer-container/pdf-viewer-container.component";

import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";

@Component({
  selector: "app-applications-womfit",
  templateUrl: "./womfit.component.html",
  styleUrls: ["womfit.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    StoreLogosComponent,
    PdfViewerContainerComponent,
    TranslateModule,
    RouterModule,
  ],
})
export class ApplicationsWomFitComponent {
  constructor(translate: TranslateService) {}
}
