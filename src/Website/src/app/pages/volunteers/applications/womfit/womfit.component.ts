import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-applications-womfit',
    templateUrl: './womfit.component.html',
    styleUrls: ['womfit.component.css'],
    standalone: false
})
export class ApplicationsWomFitComponent {
  tutorial_1_src = '/assets/pdf/tutorial_contapassi.pdf';
  tutorial_2_src = '/assets/pdf/tutorial_contapassi_wom.pdf';
  page_1: number = 1;
  page_2: number = 1;
  totalPages_1: number = 0;
  totalPages_2: number = 0;
  isLoaded_1: boolean = false;
  isLoaded_2: boolean = false;

  constructor(translate: TranslateService) {
  }

  afterLoadComplete(pdfData: any, src: string) {
    if(src === this.tutorial_1_src) {
      this.totalPages_1 = pdfData.numPages;
      this.isLoaded_1 = true;
    } else {
      this.totalPages_2 = pdfData.numPages;
      this.isLoaded_2 = true;
    }
  }

  nextPage(src: string) {
    if(src === this.tutorial_1_src) {
      this.page_1++;
    } else {
      this.page_2++;
    }
  }

  prevPage(src: string) {
    if(src === this.tutorial_1_src) {
      this.page_1--;
    } else {
      this.page_2--;
    }
  }
}
