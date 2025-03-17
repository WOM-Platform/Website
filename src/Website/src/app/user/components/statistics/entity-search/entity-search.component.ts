import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { SearchComponent } from "../../search/search.component";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { MerchantService } from "src/app/_services";
import { LazySearchComponent } from "../../lazy-search/lazy-search.component";
import { Merchant } from "src/app/_models";
import { Instrument } from "src/app/_models/instrument";
import { InstrumentFilter, MerchantFilter } from "src/app/_models/filter";
import { FormControl } from "@angular/forms";
import { SourceService } from "src/app/_services/source.service";
import { DialogFilterAimsComponent } from "src/app/user/components/dialog-filter-aims/dialog-filter-aims.component";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-entity-search",
  imports: [
    SearchComponent,
    MatIcon,
    NgIf,
    NgFor,
    NgClass,
    LazySearchComponent,
  ],
  templateUrl: "./entity-search.component.html",
  styleUrl: "./entity-search.component.css",
})
export class EntitySearchComponent {
  @Input() currentUser;
  @Input() entityType: string;
  @Output() voucherData = new EventEmitter<any>();
  @Output() clearElementFilter = new EventEmitter<any>();

  merchantFilter: MerchantFilter = {
    merchantIds: [],
    merchantNames: [],
  };

  instrumentFilter: InstrumentFilter = {
    sourceId: [],
    sourceNames: [],
    aimListFilter: [],
  };

  searchMerchantControl = new FormControl("");
  searchSourceControl = new FormControl("");

  dataFetched = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private merchantService: MerchantService,
    private sourceService: SourceService
  ) {}

  get searchPlaceholder(): string {
    return `Ricerca ${
      this.entityType.charAt(0).toUpperCase() + this.entityType.slice(1)
    }`;
  }

  // search for merchant user
  searchMerchant(merchantName: string = this.searchMerchantControl.value) {
    if (merchantName.length >= 3) {
      this.merchantService.getAllMerchants({ search: merchantName }).subscribe({
        next: (data) => {
          this.dataFetched = data.data;
        },
        error: (error) => {
          console.error("Error fetching merchant data:", error);
        },
      });
    } else {
      this.dataFetched = [];
    }
  }

  // search for source user
  searchSource(sourceName: string = this.searchSourceControl.value) {
    if (sourceName.length >= 3) {
      // Call the service to fetch the data
      this.sourceService.getAllInstruments({ search: sourceName }).subscribe({
        next: (data) => {
          this.dataFetched = data.data;
        },
        error: (error) => {
          console.error("Error fetching source data:", error);
        },
      });
    } else {
      this.dataFetched = [];
    }
  }
  // on selection of a Merchant or Instrument
  onElementSelected(elementSelected: Merchant | Instrument) {
    this.dataFetched = [];

    const entityActions: { [key: string]: () => void } = {
      merchant: () => {
        if (this.isMerchant(elementSelected)) {
          this.searchMerchantControl.setValue("", { emitEvent: true });
          this.addFilter({ merchant: elementSelected });
          this.voucherData.emit(this.merchantFilter);
        }
      },
      instrument: () => {
        if (this.isInstrument(elementSelected)) {
          this.searchSourceControl.setValue("", { emitEvent: true });
          this.addFilter({ instrument: elementSelected });
          this.voucherData.emit(this.instrumentFilter);
        }
      },
    };

    entityActions[this.entityType]?.();

    this.cdr.detectChanges();
  }

  clearFilterElement(name?: string, id?: string) {
    const entityActions: { [key: string]: () => void } = {
      merchant: () => {
        this.merchantFilter.merchantNames =
          this.merchantFilter.merchantNames.filter(
            (currentName) => currentName !== name
          );
        this.merchantFilter.merchantIds =
          this.merchantFilter.merchantIds.filter(
            (currentId) => currentId !== id
          );

        this.clearElementFilter.emit({
          entityType: this.entityType,
          name,
          id,
        });
      },
      instrument: () => {
        this.instrumentFilter.sourceNames =
          this.instrumentFilter.sourceNames.filter(
            (currentName) => currentName !== name
          );
        this.instrumentFilter.sourceId = this.instrumentFilter.sourceId.filter(
          (currentId) => currentId !== id
        );

        this.clearElementFilter.emit({
          name,
          id,
        });
      },
    };

    entityActions[this.entityType]?.();
  }

  addFilter({
    merchant,
    instrument,
  }: {
    merchant?: Merchant;
    instrument?: Instrument;
  }) {
    const entityActions: { [key: string]: () => void } = {
      merchant: () => {
        if (!this.merchantFilter.merchantNames.includes(merchant.name)) {
          this.merchantFilter.merchantNames.push(merchant.name);
        }
        if (!this.merchantFilter.merchantIds.includes(merchant.id)) {
          this.merchantFilter.merchantIds.push(merchant.id);
        }
      },
      instrument: () => {
        if (!this.instrumentFilter.sourceNames.includes(instrument.name)) {
          this.instrumentFilter.sourceNames.push(instrument.name);
        }
        if (!this.instrumentFilter.sourceId.includes(instrument.id)) {
          this.instrumentFilter.sourceId.push(instrument.id);
        }
      },
    };
    entityActions[this.entityType]?.();
  }

  openDialogAimsSelected() {
    const dialogRef = this.dialog.open(DialogFilterAimsComponent, {
      width: "900px",
      maxHeight: "90vh",
      panelClass: "custom-dialog-backdrop",
      data: {
        filterAim: this.instrumentFilter.aimListFilter,
      },
    });

    dialogRef.afterClosed().subscribe((selectedAims: string[] | null) => {
      if (selectedAims) {
        this.instrumentFilter.aimListFilter = selectedAims;
        this.voucherData.emit(this.instrumentFilter);
      }
    });
  }

  isMerchant(element: Merchant | Instrument): element is Merchant {
    // Check for a property that only Merchant has
    return (element as Merchant).name !== undefined;
  }

  isInstrument(element: Merchant | Instrument): element is Instrument {
    // Check for a property that only Instrument has
    return (element as Instrument).name !== undefined;
  }
}
