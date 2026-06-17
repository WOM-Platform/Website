import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { DatePipe } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";
import { Aim, Merchants, User, UserMe } from "../../../_models";
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
    StatisticsFiltersComponent,
    MatTooltip,
    GeneratorStatisticsComponentComponent,
    ConsumerStatisticsComponent,
  ],
  standalone: true,
  templateUrl: "./admin-role.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./admin-role.component.css",
})
export class AdminRoleComponent implements OnInit, OnDestroy {
  currentUser: UserMe | null = null;

  merchantData: Merchants | null = null;
  merchantSubscription: Subscription = Subscription.EMPTY;

  filteredAimList: Aim[] = [];
  showFilterAims = false;

  today = new Date();
  oneMonthAgo: Date;

  filters: CombinedFilters = {
    dateFilters: { startDate: null, endDate: null },
    merchantFilters: { merchantIds: [], merchantNames: [] },
    sourceFilters: { sourceId: [], sourceNames: [], aimListFilter: [] },
  };

  tooltipActiveFilters = "Non ci sono filtri attivi";

  isShowedGenerationFilter: boolean = false;
  bboxArea: any = null;
  chartCreatedAmountByAim: any;
  totalCreatedAmountByAim: any;
  totalCreatedAmount: string = "";
  totalRedeemedAmount: string = "";
  consumedStats: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private matDialog: MatDialog,
    private userService: UserService
  ) {
    this.oneMonthAgo = new Date();
    this.oneMonthAgo.setMonth(this.today.getMonth() - 1);

    this.filters.dateFilters = {
      startDate: this.oneMonthAgo,
      endDate: this.today,
    };

    this.updateCombinedFilters();
  }

  ngOnInit(): any {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnDestroy(): any {
    if (this.merchantSubscription) this.merchantSubscription.unsubscribe();
  }

  updateCombinedFilters() {
    this.filters = {
      dateFilters: this.filters.dateFilters,
      merchantFilters: this.filters.merchantFilters,
      sourceFilters: this.filters.sourceFilters,
    };
  }

  onDatesSelected(date: DateFilter) {
    this.filters.dateFilters = { ...date };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }

  onSourceSelected(source: InstrumentFilter) {
    this.filters.sourceFilters = { ...source };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }
  onMerchantSelected(merchant: MerchantFilter) {
    this.filters.merchantFilters = { ...merchant };
    this.updateCombinedFilters();
    this.cdr.detectChanges();
  }

  convertToCSV(): string {
    let csvRows = [];

    csvRows.push("Total Created Amount," + this.totalCreatedAmount);
    csvRows.push("Total Redeemed Amount," + this.totalRedeemedAmount);
    csvRows.push("Total Consumed Amount," + this.consumedStats.totalConsumed);
    csvRows.push("");

    // totalCreatedAmountByAim
    csvRows.push("Aim Code,Created Amount");
    this.totalCreatedAmountByAim.forEach((item: any) => {
      csvRows.push(`${item.aimCode},${item.amount}`);
    });
    csvRows.push(""); // Blank line for separation

    // chartCreatedAmountByAim
    csvRows.push("Chart Created Amount By Aim");
    csvRows.push("Label,Value");
    this.chartCreatedAmountByAim.forEach((item: any) => {
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

    if (this.filters.dateFilters?.startDate) {
      const formattedStartDate = new DatePipe("it-IT").transform(
        this.filters.dateFilters.startDate,
        "dd/MM/yyyy"
      );
      activeFilters.push(`Data Inizio ${formattedStartDate}`);
    }
    if (this.filters.dateFilters?.endDate) {
      const formattedEndDate = new DatePipe("it-IT").transform(
        this.filters.dateFilters.endDate,
        "dd/MM/yyyy"
      );
      activeFilters.push(`Data Fine ${formattedEndDate}`);
    }
    if (
      this.filters.merchantFilters?.merchantNames &&
      this.filters.merchantFilters.merchantNames.length > 0
    ) {
      activeFilters.push(
        `Merchants: ${this.filters.merchantFilters.merchantNames.join(", ")}`
      );
    }
    if (
      this.filters.sourceFilters?.sourceNames &&
      this.filters.sourceFilters.sourceNames.length > 0
    ) {
      activeFilters.push(
        `Sources: ${this.filters.sourceFilters.sourceNames.join(", ")}`
      );
    }
    if (
      this.filters.sourceFilters?.aimListFilter &&
      this.filters.sourceFilters.aimListFilter.length > 0
    ) {
      activeFilters.push(
        `Aims: ${this.filters.sourceFilters.aimListFilter.join(", ")}`
      );
    }

    return activeFilters.join("; ");
  }

  hasActiveFilters(): boolean {
    return (
      !!this.filters.dateFilters?.startDate ||
      !!this.filters.dateFilters?.endDate ||
      !!(
        this.filters.merchantFilters?.merchantIds &&
        this.filters.merchantFilters.merchantIds.length > 0
      ) ||
      !!(
        this.filters.merchantFilters?.merchantNames &&
        this.filters.merchantFilters.merchantNames.length > 0
      ) ||
      !!(
        this.filters.sourceFilters?.sourceId &&
        this.filters.sourceFilters.sourceId.length > 0
      ) ||
      !!(
        this.filters.sourceFilters?.sourceNames &&
        this.filters.sourceFilters.sourceNames.length > 0
      ) ||
      !!(
        this.filters.sourceFilters?.aimListFilter &&
        this.filters.sourceFilters.aimListFilter.length > 0
      )
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
