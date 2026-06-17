import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Merchant } from "../../../_models";
import { StorageService } from "../../../_services/storage.service";
import { StatsService, UserService } from "../../../_services";

import { Instrument } from "../../../_models/instrument";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SharedModule } from "../../../shared/shared.module";
import {
  ConsumedStatsApiResponse,
  GenerationRedeemedStatsApiResponse,
  MerchantRankDTO,
  VoucherByAimDTO,
} from "../../../_models/stats";
import { tap } from "rxjs/operators";
import {
  MerchantFilter,
  DateFilter,
  InstrumentFilter,
} from "src/app/_models/filter";
import { StatisticsFiltersComponent } from "../components/statistics-filters/statistics-filters.component";

@Component({
  selector: "app-user-role",
  imports: [StatisticsFiltersComponent, NgxSkeletonLoaderModule, SharedModule],
  standalone: true,
  templateUrl: "./user-role.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./user-role.component.css",
})
export class UserRoleComponent implements OnInit {
  currentUser: any = null;
  merchants: Merchant[] = [];
  sources: Instrument[] = [];
  isOwnerMerchants: boolean = false;
  isOwnerSources: boolean = false;

  locationParameters: any = null;

  dateFilters: DateFilter = {
    startDate: null,
    endDate: null,
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

  isConsumedDataReady: boolean = false;
  isGeneratedDataReady: boolean = false;

  totalCreatedAmount: number = 0;
  totalRedeemedAmount: number = 0;
  totalConsumedAmount: number = 0;

  totalCreatedAmountByAim: VoucherByAimDTO[] = [];
  rankMerchants: MerchantRankDTO[] = [];
  offerConsumedVouchers: any = null;
  availableVouchers: number = 0;

  constructor(
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

  onDatesSelected(date: DateFilter) {
    this.dateFilters.startDate = date.startDate;
    this.dateFilters.endDate = date.endDate;
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
      .fetchVouchersConsumedStats(this.dateFilters, this.locationParameters)
      .subscribe((data: ConsumedStatsApiResponse) => {
        // Consumed total amount of WOM
        this.totalConsumedAmount = data.consumedInPeriod;

        // Get rank of merchants
        this.rankMerchants = data.merchantRanks;

        // requests are done
        this.isConsumedDataReady = true;
      });

    // Add additional observable if merchantId is present
    if (this.merchantFilters.merchantIds) {
      // Get vouchers consumed by offer
      this.statsService
        .getVouchersConsumedByOffer(this.dateFilters, this.merchantFilters)
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
      .fetchVouchersGeneratedAndRedeemedStats(
        this.dateFilters,
        this.sourceFilters
      )
      .subscribe((data: GenerationRedeemedStatsApiResponse) => {
        this.totalCreatedAmount = data.generatedInPeriod;
        this.totalRedeemedAmount = data.redeemedInPeriod;
        this.totalCreatedAmountByAim = data.voucherByAim;

        this.availableVouchers = data.voucherAvailable;
        this.isGeneratedDataReady = true;
      });
  }

  changeMerchantView() {}
}
