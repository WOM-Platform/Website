import { CommonModule, NgClass } from "@angular/common";
import { NgSelectComponent } from "@ng-select/ng-select";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AimsSelectComponent } from "../aims-select/aims-select.component";
import { SourceService } from "src/app/_services/source.service";
import { Instrument } from "src/app/_models/instrument";
import { SimpleFilter } from "src/app/_models/badge";

import { DateTimePickerComponent } from "../date-time-picker/date-time-picker.component";
import { MapComponent } from "src/app/components/map/map.component";

@Component({
  selector: "app-simple-filter",
  imports: [
    CommonModule,
    AimsSelectComponent,
    ReactiveFormsModule,
    NgSelectComponent,
    FormsModule,
    DateTimePickerComponent,
    MapComponent,
  ],
  templateUrl: "./simple-filter.component.html",
  styleUrl: "./simple-filter.component.css",
})
export class SimpleFilterComponent implements OnInit {
  @Input() filters: SimpleFilter | null = null;
  @Output() filteredEmit = new EventEmitter<any>();
  @Output() filterToggled = new EventEmitter<boolean>();

  isEditing = true;
  isFiltering: boolean = false;

  filterForm: FormGroup;
  isFilteringMap: boolean = false;

  page: number = 1;
  instrumentList: Instrument[] = [];
  loading: boolean = false;

  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(private fb: FormBuilder, private sourceService: SourceService) {}

  items = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" },
    { id: 3, name: "Item Three" },
    { id: 4, name: "Item Four" },
  ];

  toggleFiltering() {
    this.isFiltering = !this.isFiltering;
    this.filterToggled.emit(this.isFiltering);
  }

  onScrollToEnd() {
    console.log("Reached end of dropdown!");
  }

  ngOnInit() {
    this.loadInstruments();
    this.initializeForm();

    if (this.filters) {
      this.isFiltering = true;
    }
  }

  loadInstruments() {
    console.log("Loading instruments...");
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
      count: [this.filters?.count || null, Validators.required],
      aim: [this.filters?.aim || null],
      sourceId: [this.filters?.sourceId || null],
      bounds: this.fb.group({
        leftTop: [this.filters?.bounds?.leftTop || [0, 0]],
        rightBottom: [this.filters?.bounds?.rightBottom || [0, 0]],
      }),
      interval: this.fb.group({
        start: [this.filters?.interval?.start || null],
        end: [this.filters?.interval?.end || null],
      }),
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.filteredEmit.emit(this.filterForm.value);
    });
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
