import {AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
    @Input() currentPage: number;
    @Input() itemsPerPage: number;
    @Input() totalItems: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    totalPagesArray: number[] = []

    constructor() {
    }

    ngOnInit() {
        this.calculateTotalPages();
    }

    calculateTotalPages() {
        const totPages = this.totalPages;
        for (let i = 1; i <= totPages; i++) {
            this.totalPagesArray.push(i);
        }
    }

    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    changePage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.pageChanged.emit(page);
        }
    }
}
