import { NgIf, NgFor, NgStyle } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTooltip } from "@angular/material/tooltip";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-editable-element",
  imports: [NgIf, NgFor, FormsModule, NgStyle, MatTooltip, TranslateModule],
  standalone: true,
  templateUrl: "./editable-element.component.html",
  styleUrls: ["./editable-element.component.css"],
})
export class EditableElementComponent implements OnInit, OnChanges {
  @Input() keyEl: string;
  @Input() tooltipText: string;
  @Input() valueEl: any;
  @Input() typeEl: any;
  @Input() option: any;
  @Input() action: string;
  @Input() pattern: string; // for regex pattern validation
  @Input() minLength: number; // for minimum length validation
  @Input() maxLength: number; // for maximum length validation

  @Output() onChangeElement = new EventEmitter<any>();

  isEditing: boolean = false; // to check if user is editing the field
  isDirty: boolean = false;
  isValid: boolean = true;
  validationMessage: string = "";
  originalValue: any;
  newValue: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.typeEl === "list") {
      if (this.option.includes(this.valueEl)) {
        this.newValue = this.valueEl;
      } else {
        this.newValue = this.option[0]; // Fallback to the first option if existing value is not in the options
      }
    }
  }

  ngOnChanges() {}

  startEditing(): void {
    this.isEditing = true;
    this.isDirty = false;
    // set starting point and original value in case user cancel editing
    this.newValue = this.originalValue = this.valueEl;
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

  calculateInputWidth(): string {
    // Adding 1ch to ensure there is some extra space
    const width = this.newValue.length + 2;
    return `${width}ch`;
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

    /*this.valueEl = this.newValue;*/
  }
}
