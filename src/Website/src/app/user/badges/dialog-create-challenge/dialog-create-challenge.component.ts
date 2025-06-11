import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-create-challenge",
  imports: [ReactiveFormsModule],
  templateUrl: "./dialog-create-challenge.component.html",
  styleUrl: "./dialog-create-challenge.component.css",
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
export class DialogCreateChallengeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogCreateChallengeComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.group({
        it: [null, Validators.required],
        en: [null, Validators.required],
      }),
      isPublic: [false],
      description: this.fb.group({
        it: [null],
        en: [null],
      }),
      informationUrl: [null],
    });
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
