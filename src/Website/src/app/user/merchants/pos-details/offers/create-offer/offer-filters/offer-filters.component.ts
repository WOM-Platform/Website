import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UserAimsListComponent} from "../../../../../components/user-aims-list/user-aims-list.component";
import {MatSliderModule} from "@angular/material/slider";
import {ValiditySliderComponent} from "../../../../../components/validity-slider/validity-slider.component";
import {GoogleMap} from "@angular/google-maps";
import {TranslateModule} from "@ngx-translate/core";
import {MapComponent} from "../../../../../../components/map/map.component";
import {AimsSelectComponent} from "../../../../../components/aims-select/aims-select.component";

@Component({
    selector: 'app-offer-filters',
    standalone: true,
    imports: [NgIf, MatSliderModule, UserAimsListComponent, ValiditySliderComponent, GoogleMap, TranslateModule, MapComponent, AimsSelectComponent],
    templateUrl: './offer-filters.component.html',
    styleUrl: './offer-filters.component.css'
})
export class OfferFiltersComponent implements OnInit {
    @Output() filteredEmit = new EventEmitter<any>()

    newFilter: boolean = false

    filterForm: FormGroup
    isFilteringMap: boolean = false

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.filterForm = this.fb.group({
            aim: [null],
            bounds: [null],
            maxAge: [null]
        })
    }

    aimsFiltered(aim: string) {
        console.log(this.filterForm.value)
        this.filterForm.patchValue({aim: aim});
        this.filteredEmit.emit(this.filterForm.value)
    }

    mapFiltered(bounds: any) {
        console.log("dee ", bounds)
        this.filterForm.patchValue({bounds: bounds})
        this.filteredEmit.emit(this.filterForm.value)
    }

    validityFiltered(daysNumber: number) {
        this.filterForm.patchValue({maxAge: daysNumber})
        this.filteredEmit.emit(this.filterForm.value)
    }
}
