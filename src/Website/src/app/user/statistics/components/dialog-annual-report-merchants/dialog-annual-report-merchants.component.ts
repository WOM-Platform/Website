import { NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import html2canvas from "html2canvas";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { forkJoin, map, switchMap } from "rxjs";
import { CombinedFilters } from "src/app/_models/filter";
import { MerchantService, StatsService } from "src/app/_services";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import * as fabric from "fabric";

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

  selectedYear = Number(this.currentYear);
  years: number[] = [
    new Date().getFullYear(),
    new Date().getFullYear() - 1,
    new Date().getFullYear() - 2,
    new Date().getFullYear() - 3,
    new Date().getFullYear() - 4,
    new Date().getFullYear() - 5,
    new Date().getFullYear() - 6,
    new Date().getFullYear() - 7,
    new Date().getFullYear() - 8,
    new Date().getFullYear() - 9,
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private merchantService: MerchantService,
    private statsService: StatsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.filters = this.data.filters;
    if (this.filters.dateFilters.startDate) {
      this.currentYear = String(
        this.filters.dateFilters.startDate.getFullYear()
      );
    }

    this.loadDataTable();
  }

  onYearChange(event: any) {
    console.log("Year changed:", event);
    this.selectedYear = Number(event.target.value);
    if (!this.selectedYear || this.selectedYear === 0) {
      // Optional: handle "Seleziona un anno"
      console.warn("No valid year selected.");
      return;
    }

    this.currentYear = this.selectedYear.toString();

    this.filters.dateFilters.startDate = new Date(this.selectedYear, 0, 1);
    this.filters.dateFilters.endDate = new Date(this.selectedYear, 11, 31);

    console.log(
      "Updated date filters:",
      this.filters.dateFilters.startDate,
      this.filters.dateFilters.endDate
    );
    this.loadDataTable();
  }
  loadDataTable() {
    console.log("Loading data table with filters:");
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
        })
      )
      .subscribe((updatedMerchants) => {
        // Assign updated merchants to activeMerchants
        this.activeMerchants = updatedMerchants;
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
    console.log("Creating PNG for item", index);

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

  generateCertificate(index: number) {
    var canvas = new fabric.Canvas("canvas", {
      width: 1600,
      height: 1600,
    });

    const bgImg = fabric.FabricImage.fromURL(
      "assets/images/statistics/copertina.jpeg"
    ).then((img) => {
      canvas.backgroundImage = img;
      img.canvas = canvas;
      canvas.add(img);

      console.log("Background image added to canvas ", this.selectedYear);

      const titleToAdd = new fabric.FabricText(
        `Certificato di impatto sociale ${String(this.selectedYear)}`,
        {
          left: 280,
          top: 60,
          fontSize: 60,
          fill: "white",
          fontWeight: "800",
          fontFamily: "Roboto",
          width: 1600,
        }
      );

      canvas.add(titleToAdd);
      canvas.renderAll();
    });

    // const imageUrl =
    //   "https://upload.wikimedia.org/wikipedia/commons/0/06/Daedalus_Spaceship_concept.jpg";
    // const image = new Image();
    // image.src = imageUrl;

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

    // fabric.FabricImage.fromURL(
    //   "assets/images/statistics/copertina.jpeg",
    //   (img: fabric.FabricImage) => {
    //     canvas.backgroundImage(img, canvas.renderAll.bind(canvas));

    //     // Add user details
    //     const nameText = new fabric.Textbox(user.name, {
    //       left: 100,
    //       top: 150,
    //       fontSize: 30,
    //       fill: "#000",
    //     });

    //     const rankText = new fabric.Textbox(`Rank: ${user.rank}`, {
    //       left: 100,
    //       top: 200,
    //       fontSize: 25,
    //       fill: "#000",
    //     });

    //     const dateText = new fabric.Textbox(
    //       `Date: ${new Date().toLocaleDateString()}`,
    //       {
    //         left: 100,
    //         top: 250,
    //         fontSize: 20,
    //         fill: "#000",
    //       }
    //     );
    //   }
    // );
  }
}
