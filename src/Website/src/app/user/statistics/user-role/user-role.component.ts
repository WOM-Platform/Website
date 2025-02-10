import { Component, OnInit } from "@angular/core";
import { Merchant } from "../../../_models";
import { StorageService } from "../../../_services/storage.service";
import { MerchantService, StatsService, UserService } from "../../../_services";
import { NgFor, NgIf } from "@angular/common";
import { Instrument } from "../../../_models/instrument";

import { BarChartModule, PieChartModule } from "@swimlane/ngx-charts";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SharedModule } from "../../../shared/shared.module";
import {
  ChartDataSwimlane,
  ChartDataSwimlaneSeries,
  ConsumedStatsApiResponse,
  GenerationRedeemedStatsApiResponse,
  MerchantRankDTO,
  VoucherByAimDTO,
} from "../../../_models/stats";
import { tap } from "rxjs/operators";
import {
  MerchantFilter,
  DateFilter,
  GenerationFilter,
} from "src/app/_models/filter";
import { StatisticsFiltersComponent } from "../components/statistics-filters/statistics-filters.component";

@Component({
  selector: "app-user-role",
  imports: [
    NgFor,
    NgIf,
    StatisticsFiltersComponent,
    BarChartModule,
    NgxSkeletonLoaderModule,
    PieChartModule,
    SharedModule,
  ],
  standalone: true,
  templateUrl: "./user-role.component.html",
  styleUrl: "./user-role.component.css",
})
export class UserRoleComponent implements OnInit {
  currentUser;
  merchants: Merchant[];
  sources: Instrument[];
  isOwnerMerchants: boolean = false;
  isOwnerSources: boolean = false;

  locationParameters;
  filters: DateFilter = {};
  merchantFilters: MerchantFilter = {
    merchantIds: [],
    merchantNames: [],
  };

  sourceFilters: GenerationFilter = {
    sourceId: [],
    sourceNames: [],
    aimListFilter: [],
  };
  isConsumedDataReady: boolean = false;
  isGeneratedDataReady: boolean = false;

  totalCreatedAmount: number;
  totalRedeemedAmount: number;
  totalConsumedAmount: number = 0;
  totalConsumedOverTime: ChartDataSwimlane[] = [];
  totalGeneratedOverTime: ChartDataSwimlaneSeries[] = [];
  totalCreatedAmountByAim: VoucherByAimDTO[];
  rankMerchants: MerchantRankDTO[] = [];
  offerConsumedVouchers: any;
  availableVouchers: number;

  chartCreatedAmountByAim: ChartDataSwimlane[] = [];
  chartConsumedAmountByAim: ChartDataSwimlane[] = [];

  constructor(
    private merchantService: MerchantService,
    private statsService: StatsService,
    private storageService: StorageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    // check if the user have some merchants or sourcses
    // If the user is opening this component then we should be already be sure that the user is an admin
    this.checkUserOwnership();
    this.loadData();
  }

  checkUserOwnership() {
    this.currentUser = this.storageService.loadCurrentUser();

    this.userService.userOwnershipStatus.subscribe({
      next: (res) => {
        this.merchants = res["merchants"];
      },
    });
    this.merchants = this.currentUser.merchants.map(
      (merchant: Merchant, idx: number) => ({
        ...merchant,
      })
    );
    this.sources = this.currentUser.sources.map((source: Instrument) => ({
      ...source,
    }));
    this.isOwnerMerchants = this.merchants.length > 0;
    this.isOwnerSources = this.sources.length > 0;
  }

  loadData(): any {
    // consumed data
    if (this.isOwnerMerchants) this.consumptionVoucherData();
    // generated data
    if (this.isOwnerSources) this.generationVoucherData();
  }

  onDatesSelected(date) {
    this.filters.startDate = date.startDate;
    this.filters.endDate = date.endDate;
    this.loadData();
  }

  consumptionVoucherData(merchant?: Merchant) {
    if (merchant) {
      if (!this.merchantFilters.merchantNames.includes(merchant.name)) {
        this.merchantFilters.merchantNames.push(merchant.name); // Update filters
      }
      if (!this.merchantFilters.merchantIds.includes(merchant.id)) {
        this.merchantFilters.merchantIds.push(merchant.id);
      }
    }

    this.statsService
      .fetchVouchersConsumedStats(this.filters, this.locationParameters)
      .subscribe((data: ConsumedStatsApiResponse) => {
        // Consumed total amount of WOM
        this.totalConsumedAmount = data.consumedInPeriod;

        // Get rank of merchants
        this.rankMerchants = data.merchantRanks;
        // Get total consumed over time
        this.totalConsumedOverTime = data.totalConsumedOverTime.map((data) => ({
          name: data.date,
          value: data.total,
        }));

        // requests are done
        this.isConsumedDataReady = true;
      });

    // Add additional observable if merchantId is present
    if (this.merchantFilters.merchantIds) {
      // Get vouchers consumed by offer
      this.statsService
        .getVouchersConsumedByOffer(this.filters, this.merchantFilters)
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
        this.merchantFilters.merchantIds
      )
      .subscribe((data: number) => {
        this.availableVouchers = data;
      });
  }

  generationVoucherData(source?: Instrument) {
    if (source) {
      if (!this.sourceFilters.sourceNames.includes(source.name)) {
        this.sourceFilters.sourceNames.push(source.name); // Update filters
      }
      if (!this.sourceFilters.sourceId.includes(source.id)) {
        this.sourceFilters.sourceId.push(source.id);
      }
    }
    this.statsService
      .fetchVouchersGeneratedAndRedeemedStats(this.filters, this.sourceFilters)
      .subscribe((data: GenerationRedeemedStatsApiResponse) => {
        this.totalCreatedAmount = data.generatedInPeriod;
        this.totalRedeemedAmount = data.redeemedInPeriod;
        this.totalCreatedAmountByAim = data.voucherByAim;

        this.chartCreatedAmountByAim = this.totalCreatedAmountByAim.map(
          (item) => ({
            name: item.aimCode,
            value: item.amount,
          })
        );

        this.availableVouchers = data.voucherAvailable;
        this.isGeneratedDataReady = true;

        this.totalGeneratedOverTime =
          data.totalGeneratedAndRedeemedOverTime.map((item) => ({
            name: item.date,
            series: [
              {
                name: "Voucher Redeemed",
                value: item.totalRedeemed ? Number(item.totalRedeemed) : 0, // Ensure value is a number or 0
              },
              {
                name: "Voucher Generated",
                value: item.totalGenerated ? Number(item.totalGenerated) : 0, // Ensure value is a number or 0
              },
            ],
          }));
      });
  }

  changeMerchantView() {}
}
