import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Challenge } from "src/app/_models/challenge";
import { BadgeService } from "src/app/_services/badge.service";
import { LoadingService } from "src/app/_services/loading.service";
import { SnackBarService } from "src/app/_services/snack-bar.service";

@Component({
  selector: "app-challenge-detail",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./challenge-detail.component.html",
  styleUrls: ["./challenge-detail.component.css"],
})
export class ChallengeDetailComponent implements OnInit {
  @Input() challenge!: Challenge;

  challengeForm!: FormGroup;
  challengeId!: string;
  constructor(
    private badgeService: BadgeService,
    private fb: FormBuilder,
    private loadingService: LoadingService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get("id");
    this.loadingService.show();
    this.badgeService.getBadgeChallenge(this.challengeId).subscribe({
      next: (challenge) => {
        this.challenge = challenge;
        this.initializeForm();
        this.loadingService.hide();
      },
      error: (error) => {
        console.error("Error fetching challenge:", error);
        this.loadingService.hide();
      },
    });
  }

  initializeForm(): void {
    this.challengeForm = this.fb.group({
      name: this.fb.group({
        it: [this.challenge?.name?.it || ""],
        en: [this.challenge?.name?.en || ""],
      }),
      description: this.fb.group({
        it: [this.challenge?.description?.it || ""],
        en: [this.challenge?.description?.en || ""],
      }),
      informationUrl: [this.challenge?.informationUrl || ""],
      isPublic: [this.challenge?.isPublic || false],
      level: [""],
    });
  }

  onSave(): void {
    if (this.challengeForm.valid) {
      const updatedChallenge = {
        ...this.challenge,
        ...this.challengeForm.value,
      };
    }
  }

  deleteChallenge(): void {
    this.badgeService.deleteBadgeChallenge(this.challengeId).subscribe({
      next: () => {
        this.router.navigate(["/user/badges"]);
        this.snackBarService.openSnackBar("Sfida eliminata con successo.");
      },
      error: (error) => {
        console.error("Error deleting challenge:", error);
        this.snackBarService.openSnackBar(
          "Errore durante l'eliminazione della sfida."
        );
      },
      complete: () => {
        this.loadingService.hide();
      },
    });
  }
}
