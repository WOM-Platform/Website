import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
import {MatDialogRef} from "@angular/material/dialog";
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
    @Output() offerToAdd = new EventEmitter<Offer>()

    newOffer: FormGroup

    constructor(private dialogRef: MatDialogRef<CreateOfferComponent>, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.newOffer = this.fb.group({
            title: ["", [Validators.minLength(6), Validators.required]],
            description: [null],
            cost: [null, Validators.required],
            /*deactivated: [true, [this.booleanValidator()]],*/
            filter: []
        })
    }

    onSubmit() {
        if (this.newOffer.valid) {
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
        console.log("Filters updated: ", filters);
    }
}
