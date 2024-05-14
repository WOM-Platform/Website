import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-editable-element",
  templateUrl: "./editable-element.component.html",
  styleUrls: ["./editable-element.component.css"],
})
export class EditableElementComponent implements OnInit {
  @Input() keyEl: string;
  @Input() valueEl: any;
  @Input() action: string;
  @Input() typeEl: string;
  @Input() options: any;

  @Output() onChangeElement = new EventEmitter<any>();

  isEditing: boolean = false; // Initialize to false

  isDirty: boolean = false;
  originalValue: any;
  newValue;

  ngOnInit() {
    this.originalValue = this.valueEl;
  }

  startEditing(): void {
    this.isEditing = true;
    this.isDirty = false;
    // this.originalValue = this.valueEl;
    this.newValue = this.valueEl;
  }

  stopEditing(): void {
    this.isEditing = false;
    // this.isDirty = this.valueEl !== this.originalValue;
    this.isDirty = this.valueEl !== this.newValue;
    this.onChangeElement.emit(this.newValue);
    // this.onChangeElement.emit(this.valueEl);
  }

  cancelEditing() {
    this.valueEl = this.originalValue;
    this.newValue = this.originalValue;
    this.isEditing = false;
  }

  validateValue(): void {
    console.log("Validate");
    this.isDirty = this.valueEl !== this.originalValue;
    switch (this.typeEl) {
      case "number":
        this.newValue = this.newValue.replace(/\D/g, "").substr(0, 5);
        break;

      case "list":
        if (!this.options.includes(this.newValue)) {
          this.newValue = this.originalValue;
        }
        break;
    }
  }
}
