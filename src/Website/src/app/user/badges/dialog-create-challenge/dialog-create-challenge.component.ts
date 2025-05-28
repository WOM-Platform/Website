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
})
export class DialogCreateChallengeComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DialogCreateChallengeComponent>,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.dialogRef.close(this.form);
  }
}
