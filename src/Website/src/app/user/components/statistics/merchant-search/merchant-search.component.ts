import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { SearchComponent } from "../../search/search.component";
import { NgFor, NgIf } from "@angular/common";
import { MerchantService } from "src/app/_services";
import { LazySearchComponent } from "../../lazy-search/lazy-search.component";
import { Merchant } from "src/app/_models";
import { Instrument } from "src/app/_models/instrument";
import { MerchantFilter } from "src/app/_models/filter";

@Component({
  selector: "app-merchant-search",
  imports: [SearchComponent, NgIf, NgFor, LazySearchComponent],
  templateUrl: "./merchant-search.component.html",
  styleUrl: "./merchant-search.component.css",
})
export class MerchantSearchComponent {
  @Input() currentUser;
  @Output() consumptionVoucherData = new EventEmitter<any>();
  @Output() clearElementFilter = new EventEmitter<any>();

  merchantFilter: MerchantFilter = {
    merchantIds: [],
    merchantNames: [],
  };

  searchMerchantElement = "";
  consumedDataFetched = [];
  isConsumedDataReady = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private merchantService: MerchantService
  ) {}

  // search for merchant user
  searchMerchant(merchantName: string = this.searchMerchantElement) {
    if (merchantName && merchantName.length >= 3)
      this.merchantService
        .getAllMerchants({ search: merchantName })
        .subscribe((data) => {
          this.consumedDataFetched = data.data;
        });
    else {
      this.consumedDataFetched = [];
    }
  }

  // on selection of a Merchant or Instrument
  onElementSelected(
    elementKey: string,
    elementSelected: Merchant | Instrument
  ) {
    if (elementKey === "merchant" && this.isMerchant(elementSelected)) {
      this.consumedDataFetched = [];
      this.isConsumedDataReady = false;
      this.searchMerchantElement = "";
      this.consumptionVoucherData.emit(elementSelected);
      this.addFilter(elementSelected);
    }
    this.cdr.detectChanges();
  }

  clearMerchants(elementToClear: string, name?: string, id?: string) {
    if (elementToClear === "merchant" && name && id) {
      this.merchantFilter.merchantNames =
        this.merchantFilter.merchantNames.filter(
          (currentName) => currentName !== name
        );
      this.merchantFilter.merchantIds = this.merchantFilter.merchantIds.filter(
        (currentId) => currentId !== id
      );

      this.isConsumedDataReady = false; // Reset data flag
      this.clearElementFilter.emit({ elementToClear, name, id });
    }
  }

  addFilter(merchant?: Merchant) {
    if (merchant) {
      if (!this.merchantFilter.merchantNames.includes(merchant.name)) {
        this.merchantFilter.merchantNames.push(merchant.name);
      }
      if (!this.merchantFilter.merchantIds.includes(merchant.id)) {
        this.merchantFilter.merchantIds.push(merchant.id);
      }
    }
  }

  isMerchant(element: Merchant | Instrument): element is Merchant {
    // Check for a property that only Merchant has
    return (element as Merchant).name !== undefined;
  }
}
