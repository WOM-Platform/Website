import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

import {NgFor, NgIf} from "@angular/common";
import {Source} from "postcss";
import {Merchant} from "../../../_models";

@Component({
    selector: 'app-lazy-search',
    imports: [NgIf, NgFor],
    templateUrl: './lazy-search.component.html',
    styleUrl: './lazy-search.component.css'
})
export class LazySearchComponent {
    @Input() placeholder: string = 'Search...';
    @Input() fetchData: Source[] | Merchant[];
    @Output() selectEmit = new EventEmitter<any>();

 

    onSelection(selectedItem: any) {
        this.selectEmit.emit(selectedItem);
        this.fetchData = []
    }
}
