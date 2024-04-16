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
    styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() currentPage: number;
    @Input() itemsPerPage: number;
    @Input() totalItems: number;
    @Input() pageCount: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    totalPagesArray: number[] = []

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
    }

    changePage(page: number): void {
        if (page >= 1 && page <= this.pageCount) {
            this.currentPage = page;
            this.pageChanged.emit(page);
        }
    }
}
