import { NgStyle } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatTooltip } from "@angular/material/tooltip";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-editable-element",
  imports: [FormsModule, NgStyle, MatTooltip, TranslateModule],
  standalone: true,
  templateUrl: "./editable-element.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./editable-element.component.css"],
})
export class EditableElementComponent implements OnInit, OnChanges {
  @Input() keyEl: string = "";
  @Input() tooltipText: string = "";
  @Input() valueEl: any;
  @Input() typeEl: any;
  @Input() option: any;
  @Input() action: string = "";

  @Input() displayType: "text" | "url" | "phone" = "text";

  @Input() pattern: string = "";
  @Input() minLength: number = 0;
  @Input() maxLength: number = 0;

  @Output() onChangeElement = new EventEmitter<any>();

  isEditing = false;
  isDirty = false;
  isValid = true;
  validationMessage = "";

  originalValue: any;
  newValue: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.syncValue();
  }

  ngOnChanges() {
    this.syncValue();
  }

  private syncValue() {
    this.originalValue = this.valueEl;

    if (this.typeEl === "list" && this.option?.length) {
      this.newValue = this.option.includes(this.valueEl)
        ? this.valueEl
        : this.option[0];
    } else {
      this.newValue = this.valueEl;
    }
  }

  startEditing(): void {
    this.isEditing = true;
    this.isDirty = false;
    this.newValue = this.originalValue;
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
  }

  validateValue(): void {
    const value = this.newValue ?? "";

    this.isDirty = value !== this.originalValue;
    this.isValid = true;
    this.validationMessage = "";

    if (this.pattern) {
      const regex = new RegExp(this.pattern);
      if (!regex.test(value)) {
        this.isValid = false;
        this.validationMessage = "Invalid format.";
        return;
      }
    }

    if (this.minLength && value.length < this.minLength) {
      this.isValid = false;
      this.validationMessage = `Minimum length is ${this.minLength}.`;
      return;
    }

    if (this.maxLength && value.length > this.maxLength) {
      this.isValid = false;
      this.validationMessage = `Maximum length is ${this.maxLength}.`;
      this.newValue = value.substring(0, this.maxLength);
    }
  }

  calculateInputWidth(): string {
    return `${(this.newValue?.length || 1) + 2}ch`;
  }
}
