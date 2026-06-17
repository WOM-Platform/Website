import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { filter } from "rxjs";
import { MerchantFilter } from "src/app/_models/filter";

@Component({
  selector: "app-entity-search-user",
  imports: [],
  templateUrl: "./entity-search-user.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./entity-search-user.component.css",
})
export class EntitySearchUserComponent implements OnInit {
  @Input() entities: any[] = [];
  @Input() entityType: string = "";
  @Output() voucherData = new EventEmitter<{
    filter: MerchantFilter;
    index: number;
  }>();

  selectedEntityId: string = "";

  ngOnInit(): void {
    this.selectedEntityId = this.entities[0]?.id || "";
  }

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
