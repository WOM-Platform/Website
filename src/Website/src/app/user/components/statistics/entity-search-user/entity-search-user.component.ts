import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { filter } from "rxjs";
import { MerchantFilter } from "src/app/_models/filter";

@Component({
  selector: "app-entity-search-user",
  imports: [NgFor, NgIf],
  templateUrl: "./entity-search-user.component.html",
  styleUrl: "./entity-search-user.component.css",
})
export class EntitySearchUserComponent implements OnInit {
  @Input() entities = [];
  @Input() entityType: string = "";
  @Output() voucherData = new EventEmitter<{
    filter: MerchantFilter;
    index: number;
  }>();

  selectedEntityId: string = this.entities[0]?.id;

  ngOnInit(): void {}
  onEntitySelect(merchantId: string) {
    const index = this.entities.findIndex(
      (merchant) => merchant.id == merchantId
    );
    if (index === -1) return;

    this.selectedEntityId = merchantId;

    if (this.entityType === "merchant") {
      this.voucherData.emit({
        filter: {
          merchantIds: [merchantId],
          merchantNames: [this.entities[index].name],
        },
        index: index,
      });
    }
  }
}
