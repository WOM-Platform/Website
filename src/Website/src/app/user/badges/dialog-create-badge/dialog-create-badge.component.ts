import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { CommonModule, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

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

  constructor(
    private dialogRef: MatDialogRef<DialogCreateBadgeComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      challenge: [null],
      isPublic: [true, Validators.required],
      name: this.fb.group({
        it: [null, Validators.required],
        en: [null, Validators.required],
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
