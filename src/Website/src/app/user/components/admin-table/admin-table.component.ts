import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";

@Component({
    selector: 'app-admin-table',
    standalone: true,
    imports: [
        MatCellDef,
        MatColumnDef,
        MatHeaderCell,
        MatHeaderRow,
        MatHeaderRowDef,
        MatIcon,
        MatRow,
        MatRowDef,
        MatTable,
        NgForOf,
        NgIf,
        TitleCasePipe,
        NgClass
    ],
    templateUrl: './admin-table.component.html',
    styleUrl: './admin-table.component.css'
})
export class AdminTableComponent implements OnInit {
    @Input() tableData;
    @Input() tableColumns
    @Input() isActions;

    @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
    @Output() viewItem = new EventEmitter<any>();
    @Output() editItem = new EventEmitter<any>();


    ngOnInit() {

    }

    onViewItem(item) {
        this.viewItem.emit(item)
    }

    onEditItem(item) {
        this.editItem.emit(item)
    }

    onDeleteItem(item) {
        this.deleteItem.emit(item)
    }
}
