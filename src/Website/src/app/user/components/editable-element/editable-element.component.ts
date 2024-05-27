import { NgIf, NgFor } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-editable-element",
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: "./editable-element.component.html",
  styleUrls: ["./editable-element.component.css"],
})
export class EditableElementComponent implements OnChanges {
  @Input() keyEl: string;
  @Input() valueEl: any;
  @Input() typeEl: any;
  @Input() option: any;
  @Input() action: string;
  @Input() pattern: string; // for regex pattern validation
  @Input() minLength: number; // for minimum length validation
  @Input() maxLength: number; // for maximum length validation

  @Output() onChangeElement = new EventEmitter<any>();

  isEditing: boolean = false;
  isDirty: boolean = false;
  isValid: boolean = true;
  validationMessage: string = "";
  originalValue: any;
  newValue: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges() {
    this.originalValue = this.valueEl;
    this.newValue = this.valueEl; // Initialize newValue
  }

  startEditing(): void {
    this.isEditing = true;
    this.isDirty = false;
    this.newValue = this.valueEl; // Ensure newValue is set
  }

  stopEditing(): void {
    this.validateValue();
    if (this.isValid) {
      this.isEditing = false;
      if (this.isDirty) {
        this.onChangeElement.emit(this.newValue);
      }
    }
    this.cd.detectChanges();
  }

  cancelEditing() {
    this.valueEl = this.originalValue;
    this.newValue = this.originalValue;
    this.isEditing = false;
    this.cd.detectChanges();
  }

  validateValue(): void {
    this.isDirty = this.newValue !== this.originalValue;
    this.isValid = true;
    this.validationMessage = "";

    if (this.pattern) {
      const regex = new RegExp(this.pattern);
      if (!regex.test(this.newValue)) {
        this.isValid = false;
        this.validationMessage = "Invalid format.";
        return;
      }
    }

    if (this.minLength && this.newValue.length < this.minLength) {
      this.isValid = false;
      this.validationMessage = `Minimum length is ${this.minLength}.`;
      return;
    }

    if (this.maxLength && this.newValue.length > this.maxLength) {
      this.isValid = false;
      this.validationMessage = `Maximum length is ${this.maxLength}.`;
      this.newValue = this.newValue.substr(0, this.maxLength);
      return;
    }

    this.valueEl = this.newValue;
  }
}
