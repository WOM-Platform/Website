import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserMe } from "src/app/_models";
import { DateFilter, InstrumentFilter } from "src/app/_models/filter";
import { Instrument } from "src/app/_models/instrument";
import { LocationParams } from "src/app/_models/LocationParams";
import {
  GenerationRedeemedStatsApiResponse,
  SourceRankDTO,
  VoucherByAimDTO,
} from "src/app/_models/stats";
import { StatsService } from "src/app/_services";
import { SourceService } from "src/app/_services/source.service";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { FormControl } from "@angular/forms";
import { EntitySearchComponent } from "../../../components/statistics/entity-search/entity-search.component";
import { SkeletonLoaderComponent } from "../../../components/skeleton-loader/skeleton-loader.component";
import { NgClass } from "@angular/common";
import { NgChartsModule } from "ng2-charts";
// import { NgxChartsModule, PieChartModule } from "@swimlane/ngx-charts";

@Component({
  selector: "app-generator-statistics-component",
  imports: [
    AnimatedNumberComponent,
    NgClass,
    NgChartsModule,
    EntitySearchComponent,
    SkeletonLoaderComponent,
  ],
  templateUrl: "./generator-statistics-component.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./generator-statistics-component.component.css",
})
export class GeneratorStatisticsComponentComponent
  implements OnInit, OnChanges
{
  @Input() dateFilters: DateFilter = {
    startDate: null,
    endDate: null,
  };

  @Input() currentUser: UserMe = {
    email: "",
    id: "",
    merchants: [],
    name: "",
    surname: "",
    role: "",
    sources: [],
    verified: false,
    token: "",
  };

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

  totalCreatedAmount: number = 0;
  totalEverCreatedAmount: number = 0;
  totalRedeemedAmount: number = 0;
  totalEverRedeemedAmount: number = 0;

  rankSources: SourceRankDTO[] = [];

  barChartData = {
    labels: [] as string[],
    datasets: [
      {
        label: "Generated",
        data: [] as number[],
      },
      {
        label: "Redeemed",
        data: [] as number[],
      },
    ],
  };

  pieChartData = {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
      },
    ],
  };

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
  onResize(event: UIEvent) {
    const windowTarget = event.target as Window;
    this.view = [windowTarget.innerWidth / 3, 400];
  }

  onDatesSelected(date: DateFilter) {
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

          const voucherByAim = data.voucherByAim;

          this.pieChartData.labels = voucherByAim.map((x) => x.aimName);

          this.pieChartData.datasets[0].data = voucherByAim.map(
            (x) => x.amount
          );

          this.barChartData.labels = data.totalGeneratedAndRedeemedOverTime.map(
            (item) => item.date
          );

          this.barChartData.datasets[0].data =
            data.totalGeneratedAndRedeemedOverTime.map((item) =>
              item.totalGenerated ? Number(item.totalGenerated) : 0
            );

          this.barChartData.datasets[1].data =
            data.totalGeneratedAndRedeemedOverTime.map((item) =>
              item.totalRedeemed ? Number(item.totalRedeemed) : 0
            );

          this.isGeneratedDataReady = true;
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

  onSelect(event: any): void {
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
