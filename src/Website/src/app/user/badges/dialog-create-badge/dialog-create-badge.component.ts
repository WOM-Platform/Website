import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule, NgIf } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Challenge } from "src/app/_models/challenge";
import { SimpleFilterComponent } from "../../components/simple-filter/simple-filter.component";

@Component({
  selector: "app-dialog-create-badge",
  imports: [ReactiveFormsModule, CommonModule, SimpleFilterComponent],
  templateUrl: "./dialog-create-badge.component.html",
  styleUrl: "./dialog-create-badge.component.css",
  animations: [
    trigger("fadeSlide", [
      state(
        "void",
        style({
          opacity: 0,
          transform: "translateY(-10px)",
        })
      ),
      transition(":enter", [
        animate(
          "300ms ease-out",
          style({ opacity: 1, transform: "translateY(0)" })
        ),
      ]),
      transition(":leave", [
        animate(
          "200ms ease-in",
          style({ opacity: 0, transform: "translateY(-10px)" })
        ),
      ]),
    ]),
  ],
})
export class DialogCreateBadgeComponent implements OnInit {
  isEnabled: boolean;
  badgeForm: FormGroup;
  challengeList: Challenge[] = [];
  isFiltering: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DialogCreateBadgeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.challengeList = this.data.challenges || [];
    this.badgeForm = this.fb.group({
      challengeId: [null],
      isPublic: [true, Validators.required],
      name: this.fb.group({
        it: [null, Validators.required],
        en: [null, Validators.required],
      }),
      simpleFilter: this.fb.group({
        count: [null],
        sourceId: [null],
        aim: [null],
        bounds: this.fb.group({
          leftTop: [[0, 0]],
          rightBottom: [[0, 0]],
        }),
        interval: this.fb.group({
          start: [null],
          end: [null],
        }),
      }),
      filter: [null],
      imageUrl: [null],
      description: this.fb.group({
        it: [null],
        en: [null],
      }),
      informationUrl: [null],
    });
  }

  onCheckboxClick(): void {
    this.isEnabled = !this.isEnabled;
  }

  updateFilter(event: any) {
    if (event) {
      this.badgeForm.patchValue({
        simpleFilter: event,
      });
    }
  }

  onFilterToggle(enabled: boolean) {
    enabled ? this.addFilter() : this.removeFilter();
  }

  addFilter() {
    this.isFiltering = true;

    if (!this.badgeForm.get("simpleFilter")) {
      const simpleFilterGroup = this.fb.group({
        count: [1],
        sourceId: [null],
        aim: [null],
        bounds: this.fb.group({
          leftTop: [[0, 0]],
          rightBottom: [[0, 0]],
        }),
        interval: this.fb.group({
          start: [null],
          end: [null],
        }),
      });

      this.badgeForm.addControl("simpleFilter", simpleFilterGroup);
    }
  }

  removeFilter() {
    this.isFiltering = false;

    if (this.badgeForm.get("simpleFilter")) {
      this.badgeForm.removeControl("simpleFilter");
    }
  }

  onSubmit() {
    this.dialogRef.close(this.badgeForm.value);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.badgeForm.patchValue({ imageUrl: file });
    }
  }
}
