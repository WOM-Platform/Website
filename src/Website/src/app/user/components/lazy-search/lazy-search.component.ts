import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import {NgFor, NgIf} from "@angular/common";
import {Source} from "postcss";
import {Merchant} from "../../../_models";

@Component({
    selector: 'app-lazy-search',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './lazy-search.component.html',
    styleUrl: './lazy-search.component.css'
})
export class LazySearchComponent implements OnChanges {
    @Input() placeholder: string = 'Search...';
    @Input() fetchData: Source[] | Merchant[];
    @Output() selectEmit = new EventEmitter<any>();

    ngOnChanges() {
        console.log("on changes ", this.fetchData)
    }

    onSelection(selectedItem: any) {
        this.selectEmit.emit(selectedItem);
        this.fetchData = []
    }
}
