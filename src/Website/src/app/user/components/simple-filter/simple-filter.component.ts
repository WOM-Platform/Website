import { CommonModule, NgClass } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AimsSelectComponent } from "../aims-select/aims-select.component";
import { SourceService } from "src/app/_services/source.service";
import { Instrument } from "src/app/_models/instrument";
import { SimpleFilter } from "src/app/_models/badge";
import { NgSelectModule } from "@ng-select/ng-select";
import { DateTimePickerComponent } from "../date-time-picker/date-time-picker.component";
import { MapComponent } from "src/app/components/map/map.component";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  of,
  Subscription,
} from "rxjs";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { LoadingService } from "src/app/_services/loading.service";
import { UserService } from "src/app/_services";

@Component({
  selector: "app-simple-filter",
  imports: [
    CommonModule,
    AimsSelectComponent,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    DateTimePickerComponent,
    MapComponent,
  ],
  templateUrl: "./simple-filter.component.html",
  styleUrl: "./simple-filter.component.css",
  animations: [
    trigger("fadeSlide", [
      state(
        "void",
        style({
          opacity: 0,
          transform: "translateY(-10px)",
        })
      ),
      transition(":enter", [
        animate(
          "300ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
      transition(":leave", [
        animate(
          "200ms ease-in",
          style({ opacity: 0, transform: "translateY(-10px)" })
        ),
      ]),
    ]),
  ],
})
export class SimpleFilterComponent implements OnInit {
  @Input() filters: SimpleFilter | null = null;
  @Output() filteredEmit = new EventEmitter<any>();
  @Output() filterToggled = new EventEmitter<boolean>();

  isEditing = true;

  filterForm: FormGroup;
  isFilteringMap: boolean = false;

  periodList: string[] = ["daily", "weekly", "monthly", "yearly"];

  page: number = 1;

  loading: boolean = false;

  startDate: Date | null = null;
  endDate: Date | null = null;

  instrumentSearchControl = new FormControl("");

  showInstrumentDropdown = false;
  instrumentList: Instrument[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  searchParameters = "";

  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private loadingService: LoadingService,
    private cd: ChangeDetectorRef,
    private userService: UserService,
    private sourceService: SourceService,
    private snackBarService: SnackBarService
  ) {}

  onScrollToEnd() {
    console.log("Reached end of dropdown!");
  }

  ngOnInit() {
    this.loadInstruments();
    this.initializeForm();

    this.instrumentSearchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value: string) => {
        this.searchParameters = value;

        if (value && value.length >= 2) {
          this.getSourcesList();
        } else {
          this.instrumentList = [];
          this.showInstrumentDropdown = false;
        }
      });

    document.addEventListener("click", this.handleOutsideClick);
  }

  getSourcesList() {
    this.loadingService.show();

    this.subscriptions.push(
      this.sourceService
        .getAllInstruments({
          search: this.searchParameters,
          page: this.currentPage,
          itemsPerPage: this.itemsPerPage.toString(),
        })
        .pipe(
          catchError((error) => {
            console.error("Error fetching instruments:", error);
            this.userService.handle403Error(error);
            return of(null);
          }),
          finalize(() => {
            this.loadingService.hide();
            this.cd.detectChanges();
          })
        )
        .subscribe({
          next: (res) => {
            if (res?.data) {
              this.instrumentList = res.data;
              this.showInstrumentDropdown = true;
            } else {
              this.instrumentList = [];
              this.showInstrumentDropdown = false;
            }
            this.cd.detectChanges();
          },
          error: (err) => {
            console.error(err);
            this.snackBarService.openSnackBar(
              "Errore: riprova ad aggiornare la pagina"
            );
          },
        })
    );
  }

  initializeForm() {
    this.filterForm = this.fb.group({
      count: [this.filters?.count || null, Validators.required],
      aim: [this.filters?.aim || null],
      sourceId: [this.filters?.sourceId || null],
      bounds: this.fb.group({
        leftTop: [this.filters?.bounds?.leftTop || null],
        rightBottom: [this.filters?.bounds?.rightBottom || null],
      }),
      period: [this.filters?.period || null],
      isPeriodic: [this.filters?.isPeriodic || false],
      interval: this.fb.group({
        start: [this.filters?.interval?.start || null],
        end: [this.filters?.interval?.end || null],
      }),
    });

    this.filterForm.get("period")?.valueChanges.subscribe((value) => {
      const isPeriodic = !!value;
      this.filterForm
        .get("isPeriodic")
        ?.setValue(isPeriodic, { emitEvent: false });
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.filteredEmit.emit(this.filterForm.value);
    });
  }
  loadInstruments() {
    if (this.loading) return;

    this.loading = true;
    this.sourceService.getAllInstruments({ page: this.page }).subscribe({
      next: (data) => {
        const instruments = data.data || [];
        this.instrumentList = [...this.instrumentList, ...instruments];
        this.page++;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!target.closest("#instrument-wrapper")) {
      this.showInstrumentDropdown = false;
    }
  };

  selectInstrument(instrument: any) {
    this.filterForm.get("sourceId")?.setValue(instrument.id);
    this.instrumentSearchControl.setValue(instrument.name, {
      emitEvent: false,
    });
    this.showInstrumentDropdown = false;
  }

  onStartDateSelected(date: Date | null) {
    this.startDate = date;
    this.updateIntervalIfComplete();
  }

  onEndDateSelected(date: Date | null) {
    this.endDate = date;
    this.updateIntervalIfComplete();
  }

  updateIntervalIfComplete() {
    if (this.startDate && this.endDate) {
      const intervalGroup = this.filterForm.get("interval");
      if (intervalGroup) {
        intervalGroup.patchValue({
          start: this.startDate,
          end: this.endDate,
        });
        this.emitFilterValues();
      }
    }
  }

  onAimChange(aimChanged) {
    this.filterForm.patchValue({ aim: aimChanged });

    this.emitFilterValues();
  }

  emitFilterValues() {
    this.filteredEmit.emit(this.filterForm.value);
  }
}
