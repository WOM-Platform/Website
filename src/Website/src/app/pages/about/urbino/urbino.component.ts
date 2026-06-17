import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { PdfViewerContainerComponent } from "src/app/components/pdf-viewer-container/pdf-viewer-container.component";

@Component({
  selector: "app-urbino",
  templateUrl: "./urbino.component.html",
  styleUrls: ["./urbino.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [PdfViewerContainerComponent, TranslateModule],
})
export class UrbinoComponent implements OnInit {
  src1 = "/assets/pdf/tutorial_contapassi.pdf";

  constructor() {}

  ngOnInit(): void {}
}
