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
import { BlobReader, BlobWriter, ZipWriter } from "@zip.js/zip.js";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { finalize, forkJoin, map, switchMap } from "rxjs";
import { CombinedFilters } from "src/app/_models/filter";
import { MerchantService, StatsService } from "src/app/_services";
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
  canvasesForCertificates: fabric.Canvas[] = [];
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

          // Create an array for access lists
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

  async renderAndExportFabricCanvas(
    canvas: fabric.Canvas,
    format: "png" | "jpeg" = "jpeg",
    quality = 1.0
  ): Promise<Blob> {
    const dataURL = canvas.toDataURL({
      format,
      quality,
      multiplier: 1,
    });

    // Convert dataURL to Blob
    const blob = await fetch(dataURL).then((res) => res.blob());
    return blob;
  }

  async downloadAllCertificates() {
    const blobWriter = new BlobWriter("application/zip");
    const zipWriter = new ZipWriter(blobWriter);

    for (let index = 0; index < this.activeMerchants.length; index++) {
      try {
        const canvas = await this.generateMerchantCertificate(index);

        const dataURL = canvas.toDataURL({
          format: "jpeg",
          quality: 1.0,
          multiplier: 1,
        });

        const blob = await fetch(dataURL).then((res) => res.blob());

        await zipWriter.add(
          `WOM-${this.activeMerchants[index].name}-certificate.jpg`,
          new BlobReader(blob)
        );
      } catch (error) {
        console.error(`Failed to process merchant at index ${index}:`, error);
      }
    }

    const zipBlob = await zipWriter.close();

    this.downloadBlob(zipBlob, "certificates.zip");
  }

  async dowloadSingleCertificate(index: number) {
    this.generateMerchantCertificate(index).then((canvas) => {
      const dataURL = canvas.toDataURL({
        multiplier: 1,
        format: "jpeg",
        quality: 1.0,
      });

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `WOM-${this.activeMerchants[index].name}-certificate.jpg`;
      link.click();
    });
  }

  async generateMerchantCertificate(index: number) {
    var canvas = new fabric.Canvas("canvas", {
      width: 1600,
      height: 1600,
    });

    // Handle background image based on the index el
    let bgImage = null;
    let merchantPositionString = null;
    if (index === 0) {
      bgImage = "assets/images/statistics/annual-report/bestMerchant.jpg";
      merchantPositionString = "";
    } else if (index === 1 || index === 2) {
      bgImage = "assets/images/statistics/annual-report/top3.jpg";
      merchantPositionString = "Rientra tra i primi 3 merchant più attivi.";
    } else if (index >= 3 && index <= 9) {
      bgImage = "assets/images/statistics/annual-report/top10.jpg";
      merchantPositionString = "Rientra tra i primi 10 merchant più attivi.";
    } else if (index >= 10 && index <= 19) {
      bgImage = "assets/images/statistics/annual-report/top20.jpg";
      merchantPositionString = "Rientra tra i primi 20 merchant più attivi.";
    } else {
      bgImage = "assets/images/statistics/annual-report/top30.jpg";
      merchantPositionString = "Rientra tra i primi 30 merchant più attivi.";
    }

    const bgImg = await fabric.FabricImage.fromURL(bgImage);
    canvas.backgroundImage = bgImg;
    bgImg.scaleToWidth(canvas.width);
    bgImg.scaleToHeight(canvas.height);
    bgImg.selectable = false;
    bgImg.evented = false;

    const yearCertificate = `CERTIFICATO DI IMPATTO SOCIALE ${this.selectedYear}`;
    // Add year
    const yearToAdd = new fabric.FabricText(yearCertificate, {
      top: 1455,
      textAlign: "center",
      fontSize: 36,
      fill: "white",
      fontWeight: "600",
      fontStyle: "normal",
      fontFamily: "HelveticaNeueBold",
      width: 1600,
      originX: "center",
    });
    yearToAdd.left = canvas.getWidth() / 2;

    // Add merchant name
    const nameMerchant = new fabric.FabricText(
      `${String(this.activeMerchants[index].name)}`,
      {
        top: 640,
        textAlign: "center",
        fontSize: 70,
        fill: "black",
        fontWeight: "600",
        fontStyle: "normal",
        fontFamily: "HelveticaNeue",
        width: 1600,
        originX: "center",
      }
    );
    nameMerchant.left = canvas.getWidth() / 2;

    // Add first line
    const firstLine = `Ha effettuato ${String(
      this.activeMerchants[index].numberTransactions
    )}, transazioni, riconoscendo il valore sociale generato`;
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
      fontSize: 42,
      fill: "black",
      fontFamily: "HelveticaNeue",
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

    const secondLine = `dai propri utenti con un impegno complessivo di ${String(
      this.activeMerchants[index].amount
    )} minuti.`;

    const amountStr = String(this.activeMerchants[index].amount);
    const amountStart = secondLine.indexOf(amountStr);
    const amountEnd = amountStart + amountStr.length;

    const secondLineText = new fabric.FabricText(secondLine, {
      top: 834,
      width: 1600,
      fontSize: 42,
      fill: "black",
      fontFamily: "HelveticaNeue",
      fontStyle: "normal",
      fontWeight: "300",
      textAlign: "center",
      originX: "center",
      styles: {
        0: {},
      },
    });

    secondLineText.left = canvas.getWidth() / 2;

    const thirdLineText = new fabric.FabricText(merchantPositionString, {
      top: 950,
      width: 1600,
      fontSize: 42,
      fill: "black",
      fontFamily: "HelveticaNeue",
      fontStyle: "normal",
      fontWeight: "300",
      textAlign: "center",
      originX: "center",
      styles: {
        0: {},
      },
    });

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

    // waits 1 frame to ensure rendering completes before snapshot
    await new Promise((resolve) => requestAnimationFrame(resolve));

    return canvas;
  }

  canvasToZip() {}

  downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
