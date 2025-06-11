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

@Component({
  selector: "app-dialog-create-badge",
  imports: [ReactiveFormsModule, CommonModule],
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
  form: FormGroup;
  challengeList: Challenge[] = [];

  constructor(
    private dialogRef: MatDialogRef<DialogCreateBadgeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.challengeList = this.data.challenges || [];
    this.form = this.fb.group({
      challenge: [null],
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

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ imageUrl: file });
    }
  }
}
