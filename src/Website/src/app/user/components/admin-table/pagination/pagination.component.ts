import {
    AfterContentInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css',
    standalone: false
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() currentPage: number;
    @Input() itemsPerPage: string;
    @Input() totalItems: number;
    @Input() pageCount: number;
    @Input() hasNext: boolean;
    @Input() hasPrev: boolean;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    totalPagesArray: number[] = []
    limitedPagesArray: (number | string)[] = [];

    constructor() {
    }

    ngOnInit() {
        this.updatePagination();
    }

    updatePagination() {
        this.totalPagesArray = [];
        for (let i = 1; i <= this.pageCount; i++) {
            this.totalPagesArray.push(i);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.itemsPerPage || changes.totalItems || changes.pageCount) {
            this.updatePagination();
        }
        this.calculateLimitedPages()
    }

    changePage(page: number): void {
        if (page >= 1 && page <= this.pageCount) {
            this.currentPage = page;
            this.pageChanged.emit(page);
        }
    }

    calculateLimitedPages() {
        const totalPages = this.pageCount;
        const currentPage = this.currentPage;
        const maxPagesToShow = 10;

        if (totalPages <= maxPagesToShow) {
            this.limitedPagesArray = this.totalPagesArray;
        } else {
            const pages = [];
            if (currentPage <= 8) {
                pages.push(...this.totalPagesArray.slice(0, 9), '...', totalPages);
            } else if (currentPage >= totalPages - 8) {
                pages.push(1, '...', ...this.totalPagesArray.slice(totalPages - 9, totalPages));
            } else {
                pages.push(1, '...', ...this.totalPagesArray.slice(currentPage - 2, currentPage + 7), '...', totalPages);
            }
            this.limitedPagesArray = pages;
        }
    }

}
