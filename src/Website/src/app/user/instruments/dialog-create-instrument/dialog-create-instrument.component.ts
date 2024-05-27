import {
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { SourceService } from "../../../_services/source.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dialog-create-instrument",
  templateUrl: "./dialog-create-instrument.component.html",
  styleUrl: "./dialog-create-instrument.component.css",
})
export class DialogCreateSourceComponent implements OnInit, OnDestroy {
  newSource: FormGroup;
  showAddAccessButton = false;
  isLoading = false;
  private subscriptions: Subscription = new Subscription(); // To manage subscriptions

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogCreateSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.newSource = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      url: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$"
          ),
          Validators.minLength(10),
        ],
      ],
      aims: this.fb.array([]),
      access: [[]],
    });

    const changedValue = this.newSource.valueChanges.subscribe(() => {
      this.showAddAccessButton = this.newSource.valid;
    });
    this.subscriptions.add(changedValue);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onSubmit() {
    if (this.newSource.valid) {
      const formData = this.newSource.value;
      this.dialogRef.close(formData);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdateSourceField(key: string, value: any, isTableToUpdate: boolean) {
    console.log("Inutile ", key);
    console.log("Inutile ", value);
    this.newSource[key] = value;

    console.log(this.newSource);
  }

  handleAccessList(accessEl) {
    const currentAccess = this.newSource.get("access").value;
    this.newSource.get("access").setValue([...currentAccess, accessEl.access]);
  }
}
