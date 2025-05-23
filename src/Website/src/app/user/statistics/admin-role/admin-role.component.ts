import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";
import { Aim, Merchants, UserMe } from "../../../_models";
import { filter, Subscription } from "rxjs";
import { UserService } from "../../../_services";

import {
  MerchantFilter,
  DateFilter,
  InstrumentFilter,
  CombinedFilters,
} from "../../../_models/filter";
import { CsvDownloadComponent } from "../../components/csv-download/csv-download.component";
import { MatTooltip } from "@angular/material/tooltip";
import { GeneratorStatisticsComponentComponent } from "../components/generator-statistics-component/generator-statistics-component.component";
import { ConsumerStatisticsComponent } from "../components/consumer-statistics/consumer-statistics.component";
import { StatisticsFiltersComponent } from "../components/statistics-filters/statistics-filters.component";
import { DialogAnnualReportMerchantsComponent } from "../components/dialog-annual-report-merchants/dialog-annual-report-merchants.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-admin-role",
  imports: [
    SharedModule,
    CsvDownloadComponent,
    CommonModule,
    StatisticsFiltersComponent,
    MatTooltip,
    GeneratorStatisticsComponentComponent,
    ConsumerStatisticsComponent,
  ],
  standalone: true,
  templateUrl: "./admin-role.component.html",
  styleUrl: "./admin-role.component.css",
})
export class AdminRoleComponent implements OnInit, OnDestroy {
  currentUser: UserMe;

  merchantData: Merchants;
  merchantSubscription: Subscription;

  filteredAimList: Aim[] = [];
  showFilterAims = false;

  today = new Date();
  oneMonthAgo: Date;

  filters: CombinedFilters;
  dateFilters: DateFilter = {
    startDate: undefined,
    endDate: undefined,
  };

  merchantFilters: MerchantFilter = {
    merchantIds: [],
    merchantNames: [],
  };

  sourceFilters: InstrumentFilter = {
    sourceId: [],
    sourceNames: [],
    aimListFilter: [],
  };

  tooltipActiveFilters = "Non ci sono filtri attivi";

  isShowedGenerationFilter: boolean = false;
  bboxArea;
  chartCreatedAmountByAim: any;
  totalCreatedAmountByAim: any;
  totalCreatedAmount: string;
  totalRedeemedAmount: string;
  consumedStats: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private userService: UserService
  ) {
    this.oneMonthAgo = new Date();
    this.oneMonthAgo.setMonth(this.today.getMonth() - 1);

    this.dateFilters.startDate = this.oneMonthAgo;
    this.dateFilters.endDate = this.today;

    this.updateCombinedFilters();
  }

  ngOnInit(): any {
    this.currentUser = this.userService.currentUserValue;
    this.currentUser.role;
  }

  ngOnDestroy(): any {
    if (this.merchantSubscription) this.merchantSubscription.unsubscribe();
  }

  updateCombinedFilters() {
    this.filters = {
      dateFilters: this.dateFilters,
      merchantFilters: this.merchantFilters,
      sourceFilters: this.sourceFilters,
    };
  }

  onDatesSelected(date) {
    this.dateFilters = { ...date };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }

  onSourceSelected(source: InstrumentFilter) {
    this.sourceFilters = { ...source };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }
  onMerchantSelected(merchant: MerchantFilter) {
    this.merchantFilters = { ...merchant };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }

  convertToCSV(): string {
    let csvRows = [];

    csvRows.push("Total Created Amount," + this.totalCreatedAmount);
    csvRows.push("Total Redeemed Amount," + this.totalRedeemedAmount);
    csvRows.push("Total Consumed Amount," + this.consumedStats.totalConsumed);
    csvRows.push(""); // Blank line for separation

    // totalCreatedAmountByAim
    csvRows.push("Aim Code,Created Amount");
    this.totalCreatedAmountByAim.forEach((item) => {
      csvRows.push(`${item.aimCode},${item.amount}`);
    });
    csvRows.push(""); // Blank line for separation

    // chartCreatedAmountByAim
    csvRows.push("Chart Created Amount By Aim");
    csvRows.push("Label,Value");
    this.chartCreatedAmountByAim.forEach((item) => {
      csvRows.push(`${item.value},${item.value}`);
    });
    csvRows.push(""); // Blank line for separation

    // Join all rows with a newline
    return csvRows.join("\n");
  }
  get activeFiltersSummary(): string {
    return this.hasActiveFilters()
      ? "I filtri attivi sono: " + this.getActiveFiltersSummary()
      : "Non ci sono filtri attivi";
  }

  getActiveFiltersSummary(): string {
    const activeFilters: string[] = [];

    if (this.dateFilters.startDate) {
      const formattedStartDate = new DatePipe("it-IT").transform(
        this.dateFilters.startDate,
        "dd/MM/yyyy"
      );
      activeFilters.push(`Data Inizio ${formattedStartDate}`);
    }
    if (this.dateFilters.endDate) {
      const formattedEndDate = new DatePipe("it-IT").transform(
        this.dateFilters.endDate,
        "dd/MM/yyyy"
      );
      activeFilters.push(`Data Fine ${formattedEndDate}`);
    }
    if (this.merchantFilters.merchantNames.length > 0) {
      activeFilters.push(
        `Merchants: ${this.merchantFilters.merchantNames.join(", ")}`
      );
    }
    if (this.sourceFilters.sourceNames.length > 0) {
      activeFilters.push(
        `Sources: ${this.sourceFilters.sourceNames.join(", ")}`
      );
    }
    if (this.sourceFilters.aimListFilter.length > 0) {
      activeFilters.push(
        `Aims: ${this.sourceFilters.aimListFilter.join(", ")}`
      );
    }

    return activeFilters.join("; ");
  }

  hasActiveFilters(): boolean {
    return (
      !!this.dateFilters.startDate ||
      !!this.dateFilters.endDate ||
      this.merchantFilters.merchantIds.length > 0 ||
      this.merchantFilters.merchantNames.length > 0 ||
      this.sourceFilters.sourceId.length > 0 ||
      this.sourceFilters.sourceNames.length > 0 ||
      this.sourceFilters.aimListFilter.length > 0
    );
  }

  openModalReport() {
    this.matDialog
      .open(DialogAnnualReportMerchantsComponent, {
        data: {
          filters: this.filters,
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }
}
