import { NgFor, NgIf } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { forkJoin, map, switchMap } from "rxjs";
import { CombinedFilters } from "src/app/_models/filter";
import { MerchantService, StatsService } from "src/app/_services";

@Component({
  selector: "app-dialog-annual-report-merchants",
  imports: [NgFor, NgIf],
  templateUrl: "./dialog-annual-report-merchants.component.html",
  styleUrl: "./dialog-annual-report-merchants.component.css",
})
export class DialogAnnualReportMerchantsComponent implements OnInit {
  filters: CombinedFilters;
  activeMerchants: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private merchantService: MerchantService,
    private statsService: StatsService
  ) {}

  ngOnInit() {
    this.filters = this.data.filters;
    this.loadDataTable();
  }

  loadDataTable() {
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
}
