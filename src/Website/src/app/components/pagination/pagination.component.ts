import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css'
})
export class PaginationComponent {
    @Input() currentPage: number;
    @Input() itemsPerPage: number;
    @Input() totalItems: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

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
