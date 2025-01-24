import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { NgClass, NgForOf, NgIf, TitleCasePipe } from "@angular/common";
import { SharedModule } from "../../../shared/shared.module";

@Component({
  selector: "app-admin-table",
  imports: [MatIcon, NgForOf, NgIf, NgClass, SharedModule],
  standalone: true,
  templateUrl: "./admin-table.component.html",
  styleUrl: "./admin-table.component.css",
})
export class AdminTableComponent {
  @Input() tableData;
  @Input() tableColumns;
  @Input() isActions;
  @Input() currentPage: number;
  @Input() itemsPerPage: string;
  @Input() totalItems: number;
  @Input() pageCount: number;
  @Input() hasNext: boolean;
  @Input() hasPrev: boolean;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewItem = new EventEmitter<any>();
  @Output() editItem = new EventEmitter<any>();

  onViewItem(item) {
    this.viewItem.emit(item);
  }

  onEditItem(item) {
    this.editItem.emit(item);
  }

  onDeleteItem(item) {
    this.deleteItem.emit(item);
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }
}
