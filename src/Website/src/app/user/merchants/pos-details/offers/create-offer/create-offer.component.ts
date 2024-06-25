import {Component, Inject, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators
} from "@angular/forms";
import {Offer} from "../../../../../_models/offer";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OfferFiltersComponent} from "./offer-filters/offer-filters.component";
import {Filter} from "../../../../../_models/filter";

@Component({
    selector: 'app-create-offer',
    standalone: true,
    imports: [
        NgIf,
        PaginatorModule,
        ReactiveFormsModule,

        OfferFiltersComponent
    ],
    templateUrl: './create-offer.component.html',
    styleUrl: './create-offer.component.css'
})
export class CreateOfferComponent implements OnInit {
    newOffer: FormGroup
    isEditMode: boolean;

    constructor(private dialogRef: MatDialogRef<CreateOfferComponent>, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,) {
    }

    ngOnInit() {
        this.isEditMode = !!this.data?.offer;

        if (!this.isEditMode) {
            this.newOffer = this.fb.group({
                title: ["", [Validators.minLength(6), Validators.required]],
                description: [null],
                cost: [null, Validators.required],
                /*deactivated: [true, [this.booleanValidator()]],*/
                filter: []
            })
        } else {
            this.newOffer = this.fb.group({
                id: [this.data?.offer.id],
                title: [this.data?.offer.title || "", [Validators.minLength(6), Validators.required]],
                description: [this.data?.offer.description || null],
                cost: [this.data?.offer.cost, Validators.required],
                deactivated: [this.data?.offer.deactivated || null],
                filter: [this.data?.offer.filter || null]
            })

            this.newOffer.get('cost').disable();
        }
    }

    onSubmit() {
        if (this.newOffer.valid) {
            this.newOffer.get('cost').enable();
            const formValue = this.newOffer.value;

            // Mapping form values to Offer type
            const offer: Offer = formValue as Offer;
            this.dialogRef.close(offer);
        } else {
            console.log("erroe")
        }

    }

    onCancellation() {
        this.dialogRef.close()
    }


    // TO MOVE IN VALIDATION
    booleanValidator() {
        return (control: AbstractControl): ValidationErrors | null => {
            const isValid = typeof control.value === 'boolean';
            return isValid ? null : {'notBoolean': {value: control.value}};
        };
    }

    addFilter(filters: Filter) {
        this.newOffer.patchValue({filter: filters});
        /*console.log("Filters updated: ", filters);*/
    }
}
