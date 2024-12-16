import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { PieChartModule } from "@swimlane/ngx-charts";
import { SharedModule } from "../../../shared/shared.module";
import { Aim, Merchant, Merchants, UserMe } from "../../../_models";
import { Subscription } from "rxjs";
import {
  AuthService,
  MerchantService,
  StatsService,
  UserService,
} from "../../../_services";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { AmountMapComponent } from "../../components/amount-map/amount-map.component";
import { DatepickerComponent } from "../../../components/datepicker/datepicker.component";
import { SearchComponent } from "../../components/search/search.component";
import { DashboardAdminFilter } from "../../../_models/filter";
import { SourceService } from "../../../_services/source.service";
import { LazySearchComponent } from "../../components/lazy-search/lazy-search.component";
import { Instrument } from "../../../_models/instrument";
import { LocationParams } from "../../../_models/LocationParams";
import { tap } from "rxjs/operators";
import {
  ChartDataSwimlane,
  GenerationRedeemedStatsApiResponse,
  TotalCreatedAmountByAim,
  ChartDataSwimlaneSeries,
  ConsumedStatsApiResponse,
  MerchantRankDTO,
  SourceRankDTO,
} from "../../../_models/stats";
import { LoadingService } from "../../../_services/loading.service";
import { StatisticsFiltersComponent } from "../../components/statistics-filters/statistics-filters.component";
import { MatDialog } from "@angular/material/dialog";
import { DialogFilterAimsComponent } from "./dialog-filter-aims/dialog-filter-aims.component";
import { CsvDownloadComponent } from "../../components/csv-download/csv-download.component";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-admin-role",
  standalone: true,
  imports: [
    PieChartModule,
    SharedModule,
    CsvDownloadComponent,
    SearchComponent,
    CommonModule,
    LazySearchComponent,
    StatisticsFiltersComponent,
    MatIcon,
  ],
  templateUrl: "./admin-role.component.html",
  styleUrl: "./admin-role.component.css",
})
export class AdminRoleComponent implements OnInit, OnDestroy {
  currentUser: UserMe;

  merchantData: Merchants;
  merchantSubscription: Subscription;

  filteredAimList: Aim[] = [];
  showFilterAims = false;

  filters: DashboardAdminFilter = {
    startDate: "",
    endDate: "",
    merchantId: "",
    merchantName: "",
    sourceId: "",
    sourceName: "",
    aimListFilter: [],
  };

  defaultNumberRank: number = 10;
  displayLimit: number = this.defaultNumberRank;
  displayLimitSources: number = this.defaultNumberRank;
  isExpanded: boolean = false;
  isExpandedSources: boolean = false;

  locationParameters: LocationParams = {};

  generatedDataFetched = [];
  consumedDataFetched = [];

  totalCreatedAmount: number;
  totalRedeemedAmount: number;
  totalConsumedAmount: number = 0;
  totalConsumedOverTime: ChartDataSwimlane[] = [];
  totalGeneratedOverTime: ChartDataSwimlaneSeries[] = [];
  totalCreatedAmountByAim: TotalCreatedAmountByAim[];
  rankMerchants: MerchantRankDTO[] = [];
  rankSources: SourceRankDTO[] = [];
  offerConsumedVouchers: any;
  availableVouchers: number;

  isConsumedDataReady = false;
  isGeneratedDataReady = false;

  isShowedGenerationFilter: boolean = false;
  bboxArea;
  chartCreatedAmountByAim: ChartDataSwimlane[] = [];

  view: [number, number] = [500, 400];

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
    private authService: AuthService,
    public dialog: MatDialog,
    private loadingService: LoadingService,
    private merchantService: MerchantService,
    private sourceService: SourceService,
    private statsService: StatsService,
    private userService: UserService
  ) {}

  ngOnInit(): any {
    this.currentUser = this.userService.currentUserValue;
    this.currentUser.role;
    this.loadData();
  }

  ngOnDestroy(): any {
    if (this.merchantSubscription) this.merchantSubscription.unsubscribe();
  }

  loadData(): any {
    // set id if the current user is not admin
    if (this.currentUser.role !== "Admin") {
      this.generationVoucherData(this.currentUser.sources[0]);
      this.consumptionVoucherData(this.currentUser.merchants[0]);
      this.generalData();
    } else {
      this.generationVoucherData();
      this.consumptionVoucherData();
      this.generalData();
    }

    /*
                       this.merchantSubscription = this.authService.merchants().subscribe({
                                next: (response) => {
                                    this.merchantData = response;
                                },
                                error: (error) => {
                                    console.log('Errore durante il download dei dati del merchant:', error);
                                }
                            }

                       );
                   */
  }

  // search for source user
  searchSource(sourceName: string = this.filters.sourceName) {
    // Call the service to fetch the data
    this.sourceService.getAllInstruments({ search: sourceName }).subscribe({
      next: (data) => {
        this.generatedDataFetched = data.data;
      },
      error: (error) => {
        console.error("Error fetching source data:", error);
      },
    });
  }

  // search for merchant user
  searchMerchant(merchantName: string) {
    this.merchantService
      .getAllMerchants({ search: merchantName })
      .subscribe((data) => {
        this.consumedDataFetched = data.data;
      });
  }

  onSourceNameInput(sourceName: string) {
    this.filters.sourceName = sourceName; // Update filters
    this.searchSource(); // Trigger search
  }

  generalData(source?: Instrument, merchant?: Merchant) {
    if (source) {
      this.filters.sourceName = source.name;
      this.filters.sourceId = source.id;
    }

    if (merchant) {
      this.filters.merchantName = merchant.name;
      this.filters.merchantId = merchant.id;
    }
  }

  generationVoucherData(source?: Instrument) {
    if (source) {
      this.filters.sourceName = source.name;
      this.filters.sourceId = source.id;
    }
    this.statsService
      .fetchVouchersGeneratedAndRedeemedStats(this.filters)
      .subscribe((data: GenerationRedeemedStatsApiResponse) => {
        this.totalCreatedAmount = data.totalGenerated;
        this.totalRedeemedAmount = data.totalRedeemed;
        this.totalCreatedAmountByAim = data.voucherByAim;
        this.chartCreatedAmountByAim = this.totalCreatedAmountByAim.map(
          (item) => ({
            name: item.aimCode,
            value: item.amount,
          })
        );
        this.rankSources = data.sourceRank;

        this.isGeneratedDataReady = true;

        this.totalGeneratedOverTime =
          data.totalGeneratedAndRedeemedOverTime.map((item) => ({
            name: item.date,
            series: [
              {
                name: "Voucher Generated",
                value: item.totalGenerated ? Number(item.totalGenerated) : 0,
              },
              {
                name: "Voucher Redeemed",
                value: item.totalRedeemed ? Number(item.totalRedeemed) : 0,
              },
            ],
          }));
      });
  }

  consumptionVoucherData(merchant?: Merchant) {
    if (merchant) {
      this.filters.merchantName = merchant.name;
      this.filters.merchantId = merchant.id;
    }

    this.statsService
      .fetchVouchersConsumedStats(this.filters, this.locationParameters)
      .subscribe((data: ConsumedStatsApiResponse) => {
        // Consumed total amount of WOM
        this.totalConsumedAmount = data.totalConsumed;

        // Get rank of merchants
        this.rankMerchants = data.merchantRanks;
        // Get total consumed over time
        this.totalConsumedOverTime = data.totalConsumedOverTime.map((data) => ({
          name: data.date,
          value: data.total,
        }));
        // All requests are done, now set isConsumedDataReady to true
        this.isConsumedDataReady = true;
      });

    // Add additional observable if merchantId is present
    if (this.filters.merchantId) {
      // Get vouchers consumed by offer
      this.statsService.getVouchersConsumedByOffer(this.filters).pipe(
        tap((data) => {
          this.offerConsumedVouchers = data;
        })
      );
    }

    // Fetch the available vouchers in parallel (not part of the forkJoin)
    this.statsService
      .getAmountOfAvailableVouchers(
        this.locationParameters,
        this.filters.merchantId
      )
      .subscribe((data: number) => {
        this.availableVouchers = data;
      });
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
  }

  // to open and close rank of merchants
  toggleRankMerchants() {
    this.isExpanded = !this.isExpanded;
    this.displayLimit = this.isExpanded ? this.rankMerchants.length : 10;
  }

  // to open and close rank of sources
  toggleRankSources() {
    this.isExpandedSources = !this.isExpandedSources;
    this.displayLimitSources = this.isExpandedSources
      ? this.rankSources.length
      : 10;
  }

  // On reseize charts
  onResize(event) {
    this.view = [event.target.innerWidth / 3, 400];
  }

  // on selection of a Merchant or Instrument
  onElementSelection(
    elementKey: string,
    elementSelected: Merchant | Instrument
  ) {
    if (elementKey === "merchant" && this.isMerchant(elementSelected)) {
      this.consumedDataFetched = [];
      this.isConsumedDataReady = false;
      this.consumptionVoucherData(elementSelected);
    } else if (elementKey === "source" && this.isInstrument(elementSelected)) {
      this.generatedDataFetched = [];
      this.isGeneratedDataReady = false;
      this.generationVoucherData(elementSelected);
    }
  }

  isMerchant(element: Merchant | Instrument): element is Merchant {
    // Check for a property that only Merchant has
    return (element as Merchant).name !== undefined;
  }

  isInstrument(element: Merchant | Instrument): element is Instrument {
    // Check for a property that only Instrument has
    return (element as Instrument).name !== undefined;
  }

  clearElementFilter(elementToClear: string) {
    if (elementToClear === "merchant") {
      this.filters.merchantName = "";
      this.filters.merchantId = "";
      this.isConsumedDataReady = false;

      this.consumptionVoucherData();
    }
    if (elementToClear === "source") {
      this.filters.sourceName = "";
      this.filters.sourceId = "";
      this.isGeneratedDataReady = false;

      this.generationVoucherData();
    }
  }

  onDatesSelected(date) {
    this.filters.startDate = date.startDate;
    this.filters.endDate = date.endDate;
    this.loadData();
  }

  convertToCSV(): string {
    let csvRows = [];

    csvRows.push("Total Created Amount," + this.totalCreatedAmount);
    csvRows.push("Total Redeemed Amount," + this.totalRedeemedAmount);
    csvRows.push("Total Consumed Amount," + this.totalConsumedAmount);
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

  onSelect(event): void {
    console.log(event);
  }

  openDialogAimsSelected() {
    const dialogRef = this.dialog.open(DialogFilterAimsComponent, {
      width: "900px",
      maxHeight: "90vh",
      panelClass: "custom-dialog-backdrop",
      data: {
        filterAim: this.filters.aimListFilter,
      },
    });

    dialogRef.afterClosed().subscribe((selectedAims: string[] | null) => {
      if (selectedAims) {
        this.isGeneratedDataReady = false;
        this.filters.aimListFilter = selectedAims;
        this.generationVoucherData();
      }
    });
  }

  async updateAimsArray(enabledAims: any[]) {
    console.log("Aims list ", enabledAims);
    // const aimsArray = this.newSource.get('aims').get('enabled') as FormArray;
    // while (aimsArray.length) {
    //     aimsArray.removeAt(0);
    // }
    // enabledAims.forEach(aim => aimsArray.push(this.fb.control(aim)));

    // try {
    //     const aimsView = await this.fetchAimsForInstrument({enabled: enabledAims, enableAll: false}).toPromise();
    //     this.aimList = aimsView;
    //     this.cd.detectChanges();
    // } catch (err) {
    //     console.error(err);
    // }
  }
}
