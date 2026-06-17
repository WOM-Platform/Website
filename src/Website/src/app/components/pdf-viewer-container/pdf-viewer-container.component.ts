import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatTooltip } from "@angular/material/tooltip";
import type { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

@Component({
  selector: "app-pdf-viewer-container",
  templateUrl: "./pdf-viewer-container.component.html",
  styleUrls: ["./pdf-viewer-container.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    PdfViewerModule,
    MatIconButton,
    MatIcon,
    MatProgressSpinner,
    MatTooltip,
  ],
})
export class PdfViewerContainerComponent implements OnInit {
  @Input() source: string = "";
  @Input() page: number = 1;
  @Input() totalPages: number = 0;
  @Input() isLoaded: boolean = false;
  @Input() original_size = false; // Switched to false so it fits container bounds nicely
  @Input() render_text = true;
  @Input() rotation = 0;
  @Input() show_all = false;
  @Input() fit_to_page = true;
  @Input() zoom = 1;
  @Input() zoom_scale: "page-height" | "page-width" | "page-fit" = "page-width";
  @Input() stick_to_page = true;
  @Input() external_link_target = "blank";
  @Input() autoresize = true;
  @Input() show_borders = false;

  errorMessage: string | null = null;

  constructor() {}

  ngOnInit(): void {
    // Reset state whenever target changes
    this.isLoaded = false;
    this.errorMessage = null;
  }

  afterLoadComplete(pdfData: PDFDocumentProxy) {
    if (!pdfData || typeof pdfData.numPages !== "number") {
      console.warn("Invalid or missing PDFDocumentProxy:", pdfData);
      this.errorMessage = "Failed to parse document structure.";
      return;
    }

    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
    this.errorMessage = null;
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onPdfError(err: any) {
    console.error("PDF failed to load:", err);
    this.errorMessage =
      "Could not load the PDF document. Please check the source file link.";
    this.isLoaded = false;
  }
}
