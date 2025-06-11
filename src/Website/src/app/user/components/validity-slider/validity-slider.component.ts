import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";

@Component({
  selector: "app-validity-slider",
  imports: [CommonModule, ReactiveFormsModule],

  standalone: true,
  templateUrl: "./validity-slider.component.html",
  styleUrls: ["./validity-slider.component.css"],
})
export class ValiditySliderComponent implements OnInit {
  @Input() selectedValidity: number = -1;
  @Input() isEditing: boolean = false;
  @Output() validitySelected = new EventEmitter<number>();
  validityForm: FormGroup;

  tickValues = [0, 1, 2, 3, 4, 5, 6];
  qntDays: number = -1; // to save the number of WOM days validity to retrieve to the API

  sliderValueSave;

  constructor(private fb: FormBuilder) {
    this.validityForm = this.fb.group({
      validity: [0],
    });
  }

  ngOnInit() {
    if (this.selectedValidity !== -1) {
      const sliderValue = this.calculateSliderValue(this.selectedValidity);
      this.sliderValueSave = sliderValue;
      this.validityForm.patchValue({ validity: sliderValue });
      this.qntDays = this.selectedValidity;
      this.validitySelected.emit(this.qntDays);
    }

    this.validityForm
      .get("validity")
      ?.valueChanges.subscribe((value: number) => {
        this.qntDays = this.calculateDays(value);
        this.validitySelected.emit(this.qntDays);
      });
  }

  onSliderChange() {
    const value = this.validityForm.get("validity")?.value;

    this.qntDays = this.calculateDays(Number(value));
    this.validitySelected.emit(this.qntDays);
  }

  formatLabel(value: any): string {
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

  calculateSliderValue(days: number): number {
    switch (days) {
      case -1:
        return 0;
      case 365:
        return 1;
      case 183:
        return 2;
      case 91:
        return 3;
      case 31:
        return 4;
      case 14:
        return 5;
      case 7:
        return 6;
      default:
        return 0;
    }
  }
}
