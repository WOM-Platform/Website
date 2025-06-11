import { CommonModule, NgClass } from "@angular/common";
import { NgSelectComponent } from "@ng-select/ng-select";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AimsSelectComponent } from "../aims-select/aims-select.component";
import { SourceService } from "src/app/_services/source.service";
import { Instrument } from "src/app/_models/instrument";
import { SimpleFilter } from "src/app/_models/badge";
import { DatepickerComponent } from "src/app/components/datepicker/datepicker.component";

@Component({
  selector: "app-simple-filter",
  imports: [
    CommonModule,
    AimsSelectComponent,
    DatepickerComponent,
    NgSelectComponent,
  ],
  templateUrl: "./simple-filter.component.html",
  styleUrl: "./simple-filter.component.css",
})
export class SimpleFilterComponent {
  @Input() filters: SimpleFilter | null = null;
  @Output() filteredEmit = new EventEmitter<any>();

  isEditing = true;
  newFilter: boolean = false;

  filterForm: FormGroup;
  isFilteringMap: boolean = false;

  page: number = 1;
  instrumentList: Instrument[] = [];
  loading: boolean = false;

  constructor(private fb: FormBuilder, private sourceService: SourceService) {}

  ngOnInit() {
    this.loadInstruments();
    this.initializeForm();
    // in case is editing open the filter section
    if (this.filters) {
      this.setFilterValues(this.filters);
    }
  }

  loadInstruments() {
    console.log("PEW PEW loading instruments");
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

  initializeForm() {
    this.filterForm = this.fb.group({
      count: [1],
      sourceId: [this.filters?.sourceId || null],
      aim: [this.filters?.aim || null],
      bounds: this.fb.group({
        leftTop: [this.filters?.bounds?.leftTop || [0, 0]],
        rightBottom: [this.filters?.bounds?.rightBottom || [0, 0]],
      }),
      interval: this.fb.group({
        start: [this.filters?.interval?.start || null],
        end: [this.filters?.interval?.end || null],
      }),
    });
  }

  setFilterValues(filters: SimpleFilter) {
    this.filterForm.patchValue({
      aim: filters.aim,
      bounds: filters.bounds,
      interval: filters.interval,
    });
    this.newFilter = true;
  }

  onDatesSelected(dates: { startDate: Date | null; endDate: Date | null }) {
    const intervalGroup = this.filterForm.get("interval");

    if (intervalGroup) {
      intervalGroup.patchValue({
        start: dates.startDate,
        end: dates.endDate,
      });
    }

    this.emitFilterValues();
  }

  onInstrumentSelected(instrument: Instrument) {
    this.emitFilterValues();
  }

  aimsFiltered(aim: string) {
    this.filterForm.patchValue({ aim: aim });
    this.emitFilterValues();
  }

  mapFiltered(bounds: any) {
    this.filterForm.patchValue({ bounds: bounds });
    this.emitFilterValues();
  }

  emitFilterValues() {
    console.log("Emitting filter values:", this.filterForm.value);
    this.filteredEmit.emit(this.filterForm.value);
  }
}
