import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { ActivatedRoute, Router } from "@angular/router";

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgIf } from "@angular/common";
import { BadgeService } from "src/app/_services/badge.service";
import { LoadingService } from "src/app/_services/loading.service";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { BlurhashComponent } from "../../components/blurhash/blurhash.component";

@Component({
  selector: "app-badge-detail",
  imports: [NgIf, ReactiveFormsModule, BlurhashComponent],
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
  badgeId: string;

  constructor(
    private badgeService: BadgeService,
    private loadingService: LoadingService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.badgeId = this.route.snapshot.paramMap.get("id");
    this.loadBadge(this.badgeId);
  }

  loadBadge(id: string) {
    this.loadingService.show();
    this.badgeService.getBadge(id).subscribe({
      next: (b) => {
        this.badge = b || {};

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
          informationUrl: [this.badge?.informationUrl || ""],
          filter: [null, Validators.required],
          challenge: [this.badge?.challenge || ""],
          createdAt: [this.badge?.createdAt || ""],
        });
      },
      error: (err) => {
        this.snackBarService.openSnackBar(
          "Errore durante il caricamento del badge"
        );
      },
      complete: () => {
        this.loadingService.hide();
      },
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.badgeService
        .uploadBadgeImage(this.badgeId, file)
        .subscribe((res) => {
          this.snackBarService.openSnackBar("Immagine caricata con successo");
          this.loadBadge(this.badgeId);
        });
    }
  }

  onSave(): void {
    this.badgeService
      .updateBadge(this.badgeId, this.badgeForm.value)
      .subscribe((res) => {
        this.loadBadge(this.badgeId);
      });
  }

  deleteBadge() {
    this.badgeService.deleteBadge(this.badgeId).subscribe({
      next: (res) => {
        this.snackBarService.openSnackBar("Badge eliminato con successo");
        this.router.navigate(["/user/badges"]);
      },
      error: (err) => {
        this.snackBarService.openSnackBar(
          "Errore durante l'eliminazione del badge"
        );
        console.error(err);
      },
    });
  }
}
