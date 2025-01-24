import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pdf-viewer-container',
    templateUrl: './pdf-viewer-container.component.html',
    styleUrls: ['./pdf-viewer-container.component.css'],
    standalone: false
})
export class PdfViewerContainerComponent implements OnInit {
  @Input() source: string;
  @Input() page: number = 1;
  @Input() totalPages: number = 0;
  @Input() isLoaded: boolean = false;
  @Input() original_size = true;
  @Input() render_text = true;
  @Input() rotation = 0;
  @Input() show_all = false;
  @Input() fit_to_page = true;
  @Input() zoom = 1;
  @Input() zoom_scale: 'page-height' | 'page-width' | 'page-fit' = 'page-width';
  @Input() stick_to_page = true;
  @Input() external_link_target = 'blank';
  @Input() autoresize = true;
  @Input() show_borders = false;

  constructor() { }

  ngOnInit(): void {
  }

  afterLoadComplete(pdfData: any) {
      this.totalPages = pdfData.numPages;
      this.isLoaded = true;
  }

  nextPage() {
      this.page++;
  }

  prevPage() {
      this.page--;
  }

}
