import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { NgClass, TitleCasePipe } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: "app-admin-table",
  imports: [MatIcon, NgClass, SharedModule],
  standalone: true,
  templateUrl: "./admin-table.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./admin-table.component.css",
})
export class AdminTableComponent {
  @Input() showViewAction = false;
  @Input() showEditAction = false;
  @Input() showDeleteAction = false;
  @Input() showGenerateVoucherAction = false;

  @Input() tableData: any[] = [];
  @Input() tableColumns: any[] = [];
  @Input() isActions: boolean = false;

  @Input() currentPage: number = 1;
  @Input() itemsPerPage: string = "10";
  @Input() totalItems: number = 0;
  @Input() pageCount: number = 0;
  @Input() hasNext: boolean = false;
  @Input() hasPrev: boolean = false;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewItem = new EventEmitter<any>();
  @Output() editItem = new EventEmitter<any>();
  @Output() generateVoucher = new EventEmitter<any>();

  onViewItem(item: any) {
    this.viewItem.emit(item);
  }

  onEditItem(item: any) {
    this.editItem.emit(item);
  }

  onDeleteItem(item: any) {
    this.deleteItem.emit(item);
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }

  onGenerateVoucher(id: any) {
    this.generateVoucher.emit(id);
  }
}
