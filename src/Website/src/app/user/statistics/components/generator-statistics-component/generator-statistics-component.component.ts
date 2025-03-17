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
import { DateFilter, InstrumentFilter } from "src/app/_models/filter";
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
import { DialogFilterAimsComponent } from "../../../components/dialog-filter-aims/dialog-filter-aims.component";
import { SourceService } from "src/app/_services/source.service";
import { CommonModule } from "@angular/common";

import { PieChartModule } from "@swimlane/ngx-charts";
import { SharedModule } from "../../../../shared/shared.module";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { FormControl } from "@angular/forms";
import { EntitySearchComponent } from "../../../components/statistics/entity-search/entity-search.component";
import { SkeletonLoaderComponent } from "../../../components/skeleton-loader/skeleton-loader.component";

@Component({
  selector: "app-generator-statistics-component",
  imports: [
    AnimatedNumberComponent,
    PieChartModule,
    SharedModule,
    CommonModule,
    EntitySearchComponent,
    SkeletonLoaderComponent,
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

  filters: InstrumentFilter = {
    aimListFilter: [],
    sourceId: [],
    sourceNames: [],
  };

  searchSourceElement = new FormControl("");

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
      // TO FIX this.generationVoucherData(this.currentUser.sources[0]);
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

  generationVoucherData(sourceFilters?: InstrumentFilter) {
    this.isGeneratedDataReady = false; // Reset data flag
    if (sourceFilters) this.filters = sourceFilters;

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

  onSelect(event): void {
    console.log(event);
  }

  isInstrument(element: Instrument): element is Instrument {
    // Check for a property that only Instrument has
    return (element as Instrument).name !== undefined;
  }

  clearElementFilter(event: { name?: string; id?: string }) {
    const { name, id } = event;

    if (name && id) {
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

  getTrophy(rank: number): string {
    switch (rank) {
      case 1:
        return '<i class="fa-solid fa-trophy text-yellow-500"></i>';
      case 2:
        return '<i class="fa-solid fa-trophy text-gray-400"></i>';
      case 3:
        return '<i class="fa-solid fa-trophy text-amber-600"></i>';
      default:
        return "";
    }
  }
}
