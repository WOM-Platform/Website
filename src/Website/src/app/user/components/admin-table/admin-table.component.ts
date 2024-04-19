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

    @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
    @Output() viewUser = new EventEmitter<any>();
    @Output() editUser = new EventEmitter<any>();


    ngOnInit() {

    }
}
