import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
import badgeData from "../data-badge.json";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-badge-detail",
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: "./badge-detail.component.html",
  styleUrl: "./badge-detail.component.css",
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
export class BadgeDetailComponent implements OnInit {
  badge;
  badgeForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const badgeId = this.route.snapshot.paramMap.get("id");
    this.badge = badgeData.find((b) => b.id === badgeId);
    console.log("Badgeeee ", this.badge);

    this.badgeForm = this.fb.group({
      imageUrl: [this.badge?.imageUrl || ""],
      name: this.fb.group({
        it: [this.badge?.name?.it || ""],
        en: [this.badge?.name?.en || ""],
      }),
      description: this.fb.group({
        it: [this.badge?.description?.it || ""],
        en: [this.badge?.description?.en || ""],
      }),
      isPublic: [this.badge?.isPublic || true],
      infoUrl: [this.badge?.infoUrl || ""],
      filter: [null, Validators.required],
      challenge: [this.badge?.challenge || ""],
      timestamp: [this.badge?.timestamp || ""],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.badgeForm.patchValue({ imageUrl: file });
    }
  }

  onSave(): void {
    console.log("Updated badge:", this.badgeForm.value);
  }
}
