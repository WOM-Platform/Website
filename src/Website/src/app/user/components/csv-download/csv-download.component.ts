import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { finalize } from "rxjs";
import { LoadingService } from "../../../_services/loading.service";
import { StatsService } from "../../../_services";
import { CombinedFilters, DateFilter, Filter } from "src/app/_models/filter";

@Component({
  selector: "app-csv-download",
  imports: [],
  standalone: true,
  templateUrl: "./csv-download.component.html",
  styleUrl: "./csv-download.component.css",
})
export class CsvDownloadComponent {
  @Input() filters: CombinedFilters = {
    dateFilters: undefined,
    merchantFilters: undefined,
    sourceFilters: undefined,
  };

  constructor(
    private loadingService: LoadingService,
    private statsService: StatsService
  ) {}

  // Method to download the CSV
  downloadCSV() {
    this.loadingService.show();
    this.statsService
      .downloadCsv(this.filters)
      .pipe(
        finalize(() => {
          this.loadingService.hide();
        })
      )
      .subscribe((blob) => {
        const url = URL.createObjectURL(blob.body);
        // Estrai l'intestazione Content-Disposition
        const contentDisposition = blob.headers.get("Content-Disposition");
        let fileName = "download.csv"; // Nome di default

        if (contentDisposition) {
          const matches = /filename="([^"]+)"/.exec(contentDisposition);
          if (matches && matches[1]) {
            fileName = matches[1];
          }
        }

        // Create an anchor element and trigger a download
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
      });
  }
}
