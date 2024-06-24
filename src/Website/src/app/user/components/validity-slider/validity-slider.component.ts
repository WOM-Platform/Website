import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";

@Component({
    selector: 'app-validity-slider',
    standalone: true,
    imports: [
        MatSliderModule
    ],
    templateUrl: './validity-slider.component.html',
    styleUrls: ['./validity-slider.component.css'] // fixed typo styleUrl to styleUrls
})
export class ValiditySliderComponent {
    @Output() validitySelected = new EventEmitter<number>();
    validityForm: FormGroup;

    qntDays: number = -1; // to save the number of WOM days validity to retrive to the API

    constructor(private fb: FormBuilder) {
        this.validityForm = this.fb.group({
            validity: [0]
        });
    }

    onSliderChange(event: any) {
        const value = event.target.value;
        this.qntDays = this.calculateDays(Number(value));
        this.validitySelected.emit(this.qntDays);
    }

    formatLabel(value: number): string {
        switch (value) {
            case 0:
                return "Accetta tutti";
            case 1:
                return "Al più di un anno";
            case 2:
                return "Al più sei mesi";
            case 3:
                return "Al più tre mesi";
            case 4:
                return "Al più un mese";
            case 5:
                return "Al più due settimane";
            case 6:
                return "Al più una settimana";
            default:
                return `${value}d`;
        }
    }

    calculateDays(value: number): number {
        switch (value) {
            case 0:
                return -1;
            case 1:
                return 365;
            case 2:
                return 183;
            case 3:
                return 91;
            case 4:
                return 31;
            case 5:
                return 14;
            case 6:
                return 7;
            default:
                return -1;
        }
    }
}
