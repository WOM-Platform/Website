import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup} from "@angular/forms";

import {UserAimsListComponent} from "../../../../../components/user-aims-list/user-aims-list.component";
import {MatSliderModule} from "@angular/material/slider";
import {ValiditySliderComponent} from "../../../../../components/validity-slider/validity-slider.component";
import {GoogleMap} from "@angular/google-maps";
import {TranslateModule} from "@ngx-translate/core";
import {MapComponent} from "../../../../../../components/map/map.component";
import {AimsSelectComponent} from "../../../../../components/aims-select/aims-select.component";
import {Filter} from "../../../../../../_models/filter";

@Component({
    selector: 'app-offer-filters',
    standalone: true,
    imports: [NgIf, MatSliderModule, UserAimsListComponent, ValiditySliderComponent, GoogleMap, TranslateModule, MapComponent, AimsSelectComponent, NgClass],
    templateUrl: './offer-filters.component.html',
    styleUrl: './offer-filters.component.css'
})
export class OfferFiltersComponent implements OnInit {
    @Input() filters: Filter | null = null
    @Input() isEditing: boolean = false
    @Output() filteredEmit = new EventEmitter<any>()

    newFilter: boolean = false

    filterForm: FormGroup
    isFilteringMap: boolean = false

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initializeForm();
        // in case is editing open the filter section
        if (this.filters) {
            this.setFilterValues(this.filters);
        }
    }

    initializeForm() {
        this.filterForm = this.fb.group({
            aim: [null],
            bounds: [null],
            maxAge: [null]
        });
    }

    setFilterValues(filters: Filter) {
        this.filterForm.patchValue({
            aim: filters.aim,
            bounds: filters.bounds,
            maxAge: filters.maxAge
        });
        this.newFilter = true;
    }

    aimsFiltered(aim: string) {
        this.filterForm.patchValue({aim: aim});
        this.emitFilterValues();
    }

    mapFiltered(bounds: any) {
        this.filterForm.patchValue({bounds: bounds});
        this.emitFilterValues();
    }

    validityFiltered(daysNumber: number) {
        this.filterForm.patchValue({maxAge: daysNumber});
        this.emitFilterValues();
    }

    emitFilterValues() {
        this.filteredEmit.emit(this.filterForm.value);
    }
}
