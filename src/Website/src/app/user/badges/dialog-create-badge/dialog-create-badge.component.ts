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

    const initialIsPublic = true;

    this.badgeForm = this.fb.group({
      challengeId: [{ value: null, disabled: initialIsPublic }],
      isPublic: [initialIsPublic, Validators.required],
      name: this.fb.group({
        it: [null, Validators.required],
        en: [null, Validators.required],
      }),
      imageUrl: [null],
      description: this.fb.group({
        it: [null],
        en: [null],
      }),
      simpleFilter: this.fb.group({
        count: [1],
        sourceId: [null],
        aim: [null],
        bounds: [null],
        interval: [null],
      }),
      informationUrl: [null],
    });

    // set validators for challengeId depending on its enabled/disabled state
    const challengeCtrl = this.badgeForm.get("challengeId");
    if (challengeCtrl && !challengeCtrl.disabled) {
      challengeCtrl.setValidators([Validators.required]);
      challengeCtrl.updateValueAndValidity({
        onlySelf: true,
        emitEvent: false,
      });
    }

    // Subscribe to isPublic changes to enable/disable the control properly
    this.badgeForm
      .get("isPublic")
      ?.valueChanges.subscribe((isPublic: boolean) => {
        const ctrl = this.badgeForm.get("challengeId");

        if (!ctrl) {
          return;
        }

        if (isPublic) {
          // disable and clear validation/value when public
          ctrl.clearValidators();
          ctrl.reset(null);
          ctrl.disable({ onlySelf: true, emitEvent: false });
        } else {
          // enable and require selection when not public
          ctrl.enable({ onlySelf: true, emitEvent: false });
          ctrl.setValidators([Validators.required]);
          ctrl.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
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

  toggleFilter() {
    this.isFiltering = !this.isFiltering;
  }

  onSubmit() {
    this.dialogRef.close(this.badgeForm.value);
  }

  onFileChange(event: any) {
    const file = event.target.files[0] ?? null;
    this.badgeForm.patchValue({ imageUrl: file });
    if (!file) {
      this.badgeForm.get("imageUrl")?.reset();
    }
  }
}
