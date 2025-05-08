import { NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import html2canvas from "html2canvas";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { finalize, forkJoin, map, switchMap } from "rxjs";
import { CombinedFilters } from "src/app/_models/filter";
import { MerchantService, StatsService } from "src/app/_services";
import { toJpeg } from "html-to-image";
import * as fabric from "fabric";
import { LoadingService } from "src/app/_services/loading.service";
import { SnackBarService } from "src/app/_services/snack-bar.service";

@Component({
  selector: "app-dialog-annual-report-merchants",
  imports: [NgFor, NgIf],
  templateUrl: "./dialog-annual-report-merchants.component.html",
  styleUrl: "./dialog-annual-report-merchants.component.css",
})
export class DialogAnnualReportMerchantsComponent implements OnInit {
  @ViewChildren("hiddenCaptureArea") hiddenCaptureAreas!: QueryList<ElementRef>;

  filters: CombinedFilters;
  activeMerchants: any;
  currentYear = String(new Date().getFullYear());

  selectedYear = null;
  years: number[] = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cdr: ChangeDetectorRef,
    private loadingService: LoadingService,
    private merchantService: MerchantService,
    private snackBarService: SnackBarService,
    private statsService: StatsService
  ) {}

  ngOnInit() {}

  onYearChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedYear = Number(value);
    this.filters = this.data.filters;

    if (!this.selectedYear || this.selectedYear === 0) {
      return;
    }

    this.currentYear = this.selectedYear.toString();
    this.filters.dateFilters.startDate = new Date(this.selectedYear, 0, 1);
    this.filters.dateFilters.endDate = new Date(this.selectedYear, 11, 31);

    this.loadDataTable();
  }
  loadDataTable() {
    this.loadingService.show();
    this.statsService
      .getAnnualReportMerchants(
        this.filters.dateFilters,
        this.filters.merchantFilters
      )
      .pipe(
        switchMap((merchants) => {
          // Assign merchants to activeMerchants
          this.activeMerchants = merchants;

          // Create an array of observables for access lists
          const accessListRequests = merchants.map((merchant) =>
            this.merchantService.getAccessList(merchant.id)
          );

          // Execute all access list requests in parallel
          return forkJoin(accessListRequests).pipe(
            map((accessLists) => {
              // Merge access lists into merchants
              return merchants.map((merchant, index) => ({
                ...merchant,
                users: accessLists[index].users,
              }));
            })
          );
        }),
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe({
        next: (updatedMerchants) => {
          this.activeMerchants = updatedMerchants;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error("Failed to load merchants", err);
          this.snackBarService.openSnackBar(
            "Errore nel caricamento degli aims"
          );
        },
      });
  }

  generateImageWithoutDisplay() {
    const element = document.getElementById("hidden-container");
    html2canvas(element!).then((canvas) => {
      const image = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = image;
      link.download = "generated-image.jpg";
      link.click();
    });
  }

  createPng(index: number) {
    // Ensure the hiddenCaptureAreas is available
    if (!this.hiddenCaptureAreas) return;

    // Get the reference to the element you want to capture
    const node = this.hiddenCaptureAreas.toArray()[index].nativeElement;

    // Temporarily show the hidden element (set the element's visibility to visible)
    node.style.display = "block"; // Or change its hidden flag (ngIf, hidden)

    // Trigger change detection to ensure the DOM is updated
    this.cdr.detectChanges();

    // Capture the content as a JPEG
    toJpeg(node, { quality: 1.0 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `item-${index + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // After capturing the image, hide the element again
        node.style.display = "none"; // Set it back to hidden
      })
      .catch((error) => {
        console.error("Error capturing image:", error);
        // Hide the element again if the capture fails
        node.style.display = "none";
      });
  }

  generateMerchantCertificate(index: number) {
    var canvas = new fabric.Canvas("canvas", {
      width: 1600,
      height: 1600,
    });

    // handle background image based on the index el
    let bgImage = null;
    if (index === 0) {
      bgImage = "assets/images/statistics/annual-report/bestMerchant.jpg";
    } else if (index === 1 || index === 2) {
      bgImage = "assets/images/statistics/annual-report/top3.jpg";
    } else if (index >= 3 && index <= 9) {
      bgImage = "assets/images/statistics/annual-report/top10.jpg";
    } else if (index >= 10 && index <= 19) {
      bgImage = "assets/images/statistics/annual-report/top20.jpg";
    } else {
      bgImage = "assets/images/statistics/annual-report/top30.jpg";
    }

    const bgImg = fabric.FabricImage.fromURL(bgImage).then((img) => {
      canvas.backgroundImage = img;
      img.canvas = canvas;
      canvas.add(img);

      // add year
      const yearToAdd = new fabric.FabricText(`${String(this.selectedYear)}`, {
        left: 1200,
        top: 60,
        fontSize: 60,
        fill: "white",
        fontWeight: "800",
        fontFamily: "Montserrat",
        width: 1600,
      });

      // add merchant name
      const nameMerchant = new fabric.FabricText(
        `${String(this.activeMerchants[index].name)}`,
        {
          top: 640,
          textAlign: "center",
          fontSize: 70,
          fill: "black",
          fontWeight: "800",
          fontFamily: "Montserrat",
          width: 1600,
          originX: "center",
        }
      );
      nameMerchant.left = canvas.getWidth() / 2;

      // add first line
      const firstLine = `Ha effettuato ${String(
        this.activeMerchants[index].numberTransactions
      )}, transazioni, riconoscendo il`;
      // Determine the start and end index of the dynamic number
      const numberTransactionsStr = String(
        this.activeMerchants[index].numberTransactions
      );
      const numberTransactionsStart = firstLine.indexOf(numberTransactionsStr);
      const numberTransactionsEnd =
        numberTransactionsStart + numberTransactionsStr.length;

      const firstLineText = new fabric.Textbox(firstLine, {
        top: 766,
        width: 1600,
        fontSize: 58,
        fill: "black",
        fontFamily: "Montserrat",
        fontWeight: "300",
        textAlign: "center",
        originX: "center",
        styles: {
          0: {},
        },
      });

      // Apply bold font size
      for (let i = numberTransactionsStart; i < numberTransactionsEnd; i++) {
        firstLineText.setSelectionStyles(
          {
            fontWeight: "bold",
          },
          i,
          i + 1
        );
      }

      firstLineText.left = canvas.getWidth() / 2;

      const secondLineText = new fabric.Textbox(
        `valore sociale generato dai propri utenti con`,
        {
          top: 834,
          width: 1600,
          fontSize: 58,
          fill: "black",
          fontFamily: "Montserrat",
          fontWeight: "100",
          textAlign: "center",
          originX: "center",
          styles: {
            0: {},
          },
        }
      );

      secondLineText.left = canvas.getWidth() / 2;

      const thirdLine = `un impegno complessivo di ${String(
        this.activeMerchants[index].amount
      )} minuti.`;

      const amountStr = String(this.activeMerchants[index].amount);
      const amountStart = thirdLine.indexOf(amountStr);
      const amountEnd = amountStart + amountStr.length;

      // add minutes
      const thirdLineText = new fabric.FabricText(thirdLine, {
        top: 902,
        fontSize: 60,
        textAlign: "center",
        originX: "center",
        fill: "black",
        fontWeight: "100",
        fontFamily: "Montserrat",
        width: 1600,
      });

      // Apply bold font size
      for (let i = amountStart; i < amountEnd; i++) {
        thirdLineText.setSelectionStyles(
          {
            fontWeight: "bold",
          },
          i,
          i + 1
        );
      }

      thirdLineText.left = canvas.getWidth() / 2;

      const group = new fabric.Group([
        yearToAdd,
        nameMerchant,
        firstLineText,
        secondLineText,
        thirdLineText,
      ]);
      canvas.add(group);

      canvas.renderAll();
    });

    setTimeout(() => {
      const dataURL = canvas.toDataURL({
        multiplier: 1,
        format: "jpeg",
        quality: 1.0,
      });

      // Create a link and trigger download
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${this.activeMerchants[index].name}-certificate.jpg`;
      link.click();
    }, 500); // Timeout ensures the image is fully loaded
  }
}
