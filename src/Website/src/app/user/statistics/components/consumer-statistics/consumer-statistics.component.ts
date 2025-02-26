import { CommonModule } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { NgxChartsModule, PieChartModule } from "@swimlane/ngx-charts";
import { SharedModule } from "primeng/api";
import { tap } from "rxjs";
import { Merchant, UserMe } from "src/app/_models";
import { MerchantFilter, DateFilter } from "src/app/_models/filter";
import { LocationParams } from "src/app/_models/LocationParams";
import { Offer } from "src/app/_models/offer";
import {
  ChartDataSwimlane,
  ConsumedStatsApiResponse,
} from "src/app/_models/stats";
import { StatsService } from "src/app/_services";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";
import { EntitySearchComponent } from "src/app/user/components/statistics/merchant-search/entity-search.component";
import { SkeletonLoaderComponent } from "../../../components/skeleton-loader/skeleton-loader.component";
import { SnackBarService } from "src/app/_services/snack-bar.service";

@Component({
  selector: "app-consumer-statistics",
  imports: [
    AnimatedNumberComponent,
    SharedModule,
    PieChartModule,
    NgxChartsModule,
    CommonModule,
    EntitySearchComponent,
    SkeletonLoaderComponent,
  ],
  templateUrl: "./consumer-statistics.component.html",
  styleUrl: "./consumer-statistics.component.css",
})
export class ConsumerStatisticsComponent implements OnInit, OnChanges {
  @Input() dateFilters: DateFilter;
  @Input() currentUser: UserMe;
  @Output() filtersEmit: EventEmitter<MerchantFilter> = new EventEmitter();

  consumedStats: ConsumedStatsApiResponse = {
    consumedInPeriod: 0,
    totalConsumed: 0,
    transactionsInPeriod: 0,
    totalTransactions: 0,
    merchantRanks: [],
    totalConsumedOverTime: [],
  };

  availableVouchers: number;
  totalConsumedOverTime: ChartDataSwimlane[] = [];
  isConsumedDataReady = false;
  offerConsumedVouchers: any;

  activeOffers: Offer[] = [];

  filters: MerchantFilter = {
    merchantIds: [],
    merchantNames: [],
  };

  consumedDataFetched = [];
  searchMerchantElement = "";

  errorMessage: string = "";

  locationParameters: LocationParams = {};

  view: [number, number] = [450, 400];
  pieView: [number, number] = [520, 400];
  colorscheme: any = {
    domain: [
      "#6898ff",
      "#f7ea74",
      "#34c38f",
      "#f46a6a",
      "#50a5f1",
      "#f1b44c",
      "#7460ee",
      "#e83e8c",
    ],
  };

  blueWomScheme: any = {
    domain: ["#2569FF"],
  };
  blueAndYellowWom: any = {
    domain: ["#2569FF", "#ffec26"],
  };

  constructor(
    private statsService: StatsService,
    private cdr: ChangeDetectorRef,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): any {
    this.loadData();
  }

  loadData() {
    this.generalData();
    if (this.currentUser.role !== "Admin") {
      // TO FIX  this.consumptionVoucherData(this.currentUser.merchants[0]);
    } else {
      this.consumptionVoucherData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["dateFilters"] && !changes["dateFilters"].firstChange) {
      this.onDatesSelected(this.dateFilters);
    }
  }

  onDatesSelected(date) {
    this.isConsumedDataReady = false;

    this.loadData();
    this.hasActiveFilters(); // update active filters
  }

  hasActiveFilters(): boolean {
    return (
      !!this.dateFilters.startDate ||
      !!this.dateFilters.endDate ||
      this.filters.merchantIds.length > 0 ||
      this.filters.merchantNames.length > 0
    );
  }

  generalData(merchant?: Merchant) {
    this.hasActiveFilters(); // update active filters
    if (merchant) {
      if (!this.filters.merchantNames.includes(merchant.name)) {
        this.filters.merchantNames.push(merchant.name);
      }
      if (!this.filters.merchantIds.includes(merchant.id)) {
        this.filters.merchantIds.push(merchant.id);
      }
    }
  }

  consumptionVoucherData(merchantFilters?: MerchantFilter) {
    this.isConsumedDataReady = false; // Reset data flag
    if (merchantFilters) this.filters = merchantFilters;
    this.emitFilters();

    this.statsService
      .fetchVouchersConsumedStats(
        this.dateFilters,
        this.filters,
        this.locationParameters
      )
      .subscribe({
        next: (data: ConsumedStatsApiResponse) => {
          this.consumedStats = {
            consumedInPeriod: data.consumedInPeriod,
            totalConsumed: data.totalConsumed,
            transactionsInPeriod: data.transactionsInPeriod,
            totalTransactions: data.totalTransactions,
            merchantRanks: data.merchantRanks,
            totalConsumedOverTime: data.totalConsumedOverTime,
          };

          // Get total consumed over time
          this.totalConsumedOverTime =
            this.consumedStats.totalConsumedOverTime.map((data) => ({
              name: data.date,
              value: data.total,
            }));
          // All requests are done, now set isConsumedDataReady to true
          this.isConsumedDataReady = true;
        },
        error: (error) => {
          this.isConsumedDataReady = true;

          if (error.status === 400) {
            this.snackBarService.openSnackBar(
              "Richiesta non valida. Controllare i filtri."
            );
            this.errorMessage = "Richiesta non valida. Controllare i filtri.";
          } else {
            this.snackBarService.openSnackBar("Errore. Riprova più tardi.");
            this.errorMessage =
              "Si è verificato un errore nel caricamento dei dati. Riprova più tardi.";
          }
        },
      });

    // Add additional observable if merchantId is present
    if (this.filters.merchantIds) {
      // Get vouchers consumed by offer
      this.statsService
        .getVouchersConsumedByOffer(this.dateFilters, this.filters)
        .pipe(
          tap((data) => {
            this.offerConsumedVouchers = data;
          })
        );
    }

    // Fetch the available vouchers in parallel (not part of the forkJoin)
    this.statsService
      .getAmountOfAvailableVouchers(
        this.locationParameters,
        this.filters.merchantIds
      )
      .subscribe((data: number) => {
        this.availableVouchers = data;
      });

    this.statsService.getActiveOffers().subscribe({
      next: (data) => {
        this.activeOffers = data;
      },
      error: (error) => {
        console.error("Error fetching aims:", error);
      },
    });
  }

  isMerchant(element: Merchant): element is Merchant {
    // Check for a property that only Merchant has
    return (element as Merchant).name !== undefined;
  }

  clearElementFilter(event: { name?: string; id?: string }) {
    const { name, id } = event;
    if (name && id) {
      this.filters.merchantNames = this.filters.merchantNames.filter(
        (currentName) => currentName !== name
      );
      this.filters.merchantIds = this.filters.merchantIds.filter(
        (currentId) => currentId !== id
      );
      this.emitFilters();
      this.isConsumedDataReady = false; // Reset data flag
      this.consumptionVoucherData();
    }

    // Update active filters state
    this.hasActiveFilters();
  }

  private emitFilters() {
    this.filtersEmit.emit(this.filters);
  }
}
