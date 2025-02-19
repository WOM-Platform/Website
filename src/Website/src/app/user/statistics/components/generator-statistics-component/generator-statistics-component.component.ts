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
import { MatDialog } from "@angular/material/dialog";
import { UserMe } from "src/app/_models";
import { DateFilter, GenerationFilter } from "src/app/_models/filter";
import { Instrument } from "src/app/_models/instrument";
import { LocationParams } from "src/app/_models/LocationParams";
import {
  ChartDataSwimlane,
  ChartDataSwimlaneSeries,
  GenerationRedeemedStatsApiResponse,
  SourceRankDTO,
  VoucherByAimDTO,
} from "src/app/_models/stats";
import { StatsService } from "src/app/_services";
import { DialogFilterAimsComponent } from "../../admin-role/dialog-filter-aims/dialog-filter-aims.component";
import { SourceService } from "src/app/_services/source.service";
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { PieChartModule } from "@swimlane/ngx-charts";
import { LazySearchComponent } from "src/app/user/components/lazy-search/lazy-search.component";
import { SearchComponent } from "src/app/user/components/search/search.component";
import { SharedModule } from "../../../../shared/shared.module";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarService } from "src/app/_services/snack-bar.service";

@Component({
  selector: "app-generator-statistics-component",
  imports: [
    AnimatedNumberComponent,
    PieChartModule,
    SharedModule,
    CommonModule,
    LazySearchComponent,
    MatIcon,
    SearchComponent,
  ],
  templateUrl: "./generator-statistics-component.component.html",
  styleUrl: "./generator-statistics-component.component.css",
})
export class GeneratorStatisticsComponentComponent
  implements OnInit, OnChanges
{
  @Input() dateFilters: DateFilter;
  @Input() currentUser: UserMe;
  @Output() filtersEmit = new EventEmitter<any>();

  filters: GenerationFilter = {
    aimListFilter: [],
    sourceId: [],
    sourceNames: [],
  };

  searchSourceElement = "";

  isGeneratedDataReady: boolean = false;
  isError: boolean = false;
  errorMessage: string = "";

  locationParameters: LocationParams = {};

  generatedDataFetched = [];

  totalCreatedAmount: number;
  totalEverCreatedAmount: number;
  totalRedeemedAmount: number;
  totalEverRedeemedAmount: number;
  rankSources: SourceRankDTO[] = [];
  totalCreatedAmountByAim: VoucherByAimDTO[];

  chartCreatedAmountByAim: ChartDataSwimlane[] = [];
  totalGeneratedOverTime: ChartDataSwimlaneSeries[] = [];

  view: [number, number] = [500, 400];
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
    private cdr: ChangeDetectorRef,
    public dialog: MatDialog,
    private snackBarService: SnackBarService,
    private sourceService: SourceService,
    private statsService: StatsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["dateFilters"] && !changes["dateFilters"].firstChange) {
      this.onDatesSelected(this.dateFilters);
    }
  }

  loadData() {
    this.generalData();
    if (this.currentUser.role !== "Admin") {
      this.generationVoucherData(this.currentUser.sources[0]);
    } else {
      this.generationVoucherData();
    }
  }

  // On reseize charts
  onResize(event) {
    this.view = [event.target.innerWidth / 3, 400];
  }

  onDatesSelected(date) {
    this.isGeneratedDataReady = false;

    this.loadData();
    this.hasActiveFilters(); // update active filters
  }

  generationVoucherData(source?: Instrument) {
    this.hasActiveFilters(); // update active filters
    if (source) {
      if (!this.filters.sourceNames.includes(source.name)) {
        this.filters.sourceNames.push(source.name);
      }
      if (!this.filters.sourceId.includes(source.id)) {
        this.filters.sourceId.push(source.id);
      }
    }
    this.emitFilters();

    this.statsService
      .fetchVouchersGeneratedAndRedeemedStats(this.dateFilters, this.filters)
      .subscribe({
        next: (data: GenerationRedeemedStatsApiResponse) => {
          this.totalCreatedAmount = data.generatedInPeriod;
          this.totalEverCreatedAmount = data.totalGenerated;
          this.totalRedeemedAmount = data.redeemedInPeriod;
          this.totalEverRedeemedAmount = data.totalRedeemed;
          this.totalCreatedAmountByAim = data.voucherByAim;
          this.chartCreatedAmountByAim = this.totalCreatedAmountByAim.map(
            (item: VoucherByAimDTO) => ({
              name: item.aimName,
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
        },
        error: (error) => {
          this.isError = true;
          this.isGeneratedDataReady = true;

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
  }

  generalData(source?: Instrument) {
    this.hasActiveFilters(); // update active filters
    if (source) {
      if (!this.filters.sourceNames.includes(source.name)) {
        this.filters.sourceNames.push(source.name);
      }
      if (!this.filters.sourceId.includes(source.id)) {
        this.filters.sourceId.push(source.id);
      }
    }
    this.emitFilters();
  }

  hasActiveFilters(): boolean {
    return (
      !!this.dateFilters.startDate ||
      !!this.dateFilters.endDate ||
      this.filters.sourceId.length > 0 ||
      this.filters.sourceNames.length > 0 ||
      this.filters.aimListFilter.length > 0
    );
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
        this.emitFilters();
        this.generationVoucherData();
      }
    });
  }

  // search for source user
  searchSource(sourceName: string = this.searchSourceElement) {
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

  // on selection of a Merchant or Instrument
  onElementSelection(elementKey: string, elementSelected: Instrument) {
    if (elementKey === "source" && this.isInstrument(elementSelected)) {
      this.generatedDataFetched = [];
      this.isGeneratedDataReady = false;
      this.searchSourceElement = "";
      this.generationVoucherData(elementSelected);
    }

    this.cdr.detectChanges();
  }

  onSelect(event): void {
    console.log(event);
  }

  isInstrument(element: Instrument): element is Instrument {
    // Check for a property that only Instrument has
    return (element as Instrument).name !== undefined;
  }

  clearElementFilter(event: {
    elementToClear: string;
    name?: string;
    id?: string;
  }) {
    const { elementToClear, name, id } = event;

    if (elementToClear === "source" && name && id) {
      this.filters.sourceNames = this.filters.sourceNames.filter(
        (currentName) => currentName !== name
      );
      this.filters.sourceId = this.filters.sourceId.filter(
        (currentId) => currentId !== id
      );
      this.emitFilters();
      this.isGeneratedDataReady = false; // Reset data flag

      this.generationVoucherData();
    }
    // Update active filters state
    this.hasActiveFilters();
  }

  private emitFilters() {
    this.filtersEmit.emit(this.filters);
  }
}
