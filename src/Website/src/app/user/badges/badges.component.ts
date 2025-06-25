import { CommonModule, NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CreateButtonComponent } from "../components/create-button/create-button.component";
import { Badge } from "src/app/_models/badge";
import { LoadingService } from "src/app/_services/loading.service";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogCreateBadgeComponent } from "./dialog-create-badge/dialog-create-badge.component";
import { BadgeService } from "src/app/_services/badge.service";
import { DialogCreateChallengeComponent } from "./dialog-create-challenge/dialog-create-challenge.component";
import { BlurhashComponent } from "../components/blurhash/blurhash.component";
import { Challenge } from "src/app/_models/challenge";

@Component({
  selector: "app-badges",
  imports: [CommonModule, CreateButtonComponent, BlurhashComponent],
  templateUrl: "./badges.component.html",
  styleUrl: "./badges.component.css",
})
export class BadgesComponent implements OnInit {
  challengeList: any[] = [];

  badges: Badge[] = [];
  challengeBadges: {
    [challengeId: string]: {
      badges: Badge[];
    };
  } = {};
  isPublicBadges: Badge[] = [];

  constructor(
    private badgeService: BadgeService,
    private loadingService: LoadingService,
    private matDialog: MatDialog,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get challenge list
    this.badgeService.getAllChallenges().subscribe((challenges) => {
      this.challengeList = challenges;
    });
    this.loadBadges();
  }

  loadBadges() {
    this.badges = [];
    this.isPublicBadges = [];
    this.challengeBadges = {};

    this.loadingService.show();

    this.badgeService.getAllBadges().subscribe({
      next: (badges) => {
        this.badges = badges;

        this.isPublicBadges = badges.filter((b) => b.isPublic);

        this.challengeList.forEach((challenge) => {
          this.badgeService.getBadgeChallenge(challenge.id).subscribe({
            next: (challengeWithBadges: Challenge) => {
              if (challengeWithBadges.badges?.length) {
                this.challengeBadges[challenge.id] = {
                  badges: challengeWithBadges.badges,
                };
              }
            },
            error: () => {
              console.warn(
                `Errore nel recupero badge per la challenge ${challenge.id}`
              );
            },
          });
        });
      },
      error: () => {
        this.snackBarService.openSnackBar(
          "Errore durante il caricamento dei badge."
        );
      },
      complete: () => {
        this.loadingService.hide();
      },
    });
  }

  getChallengeKeys(): string[] {
    return this.challengeBadges ? Object.keys(this.challengeBadges) : [];
  }

  newChallenge() {
    const dialogRef = this.matDialog.open(DialogCreateChallengeComponent, {
      data: {
        title: "Nuova challenge",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadingService.show();
        this.badgeService.createChallenge(result).subscribe({
          next: (challenge) => {
            this.snackBarService.openSnackBar("Challenge creata con successo!");
            this.challengeList.push(challenge);
            this.loadBadges();
          },
          error: (error) => {
            this.snackBarService.openSnackBar(
              "Errore durante la creazione della challenge."
            );
          },
          complete: () => {
            this.loadingService.hide();
          },
        });
      }
    });
  }

  newBadge() {
    const dialogRef = this.matDialog.open(DialogCreateBadgeComponent, {
      data: {
        title: "Nuovo badge",
        challenges: this.challengeList,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Dialog closed with result:", result);
      if (result) {
        const { image, ...badgeData } = result;

        this.badgeService.createBadge(badgeData).subscribe({
          next: (badge) => {
            this.loadingService.show();

            if (image) {
              this.badgeService.uploadBadgeImage(badge.id, image).subscribe({
                next: () => {},
                error: () => {
                  this.snackBarService.openSnackBar(
                    "Errore durante il caricamento dell'immagine."
                  );
                },
              });
            }

            this.snackBarService.openSnackBar("Badge creato con successo!");

            this.loadBadges();
          },
          error: (error) => {
            this.snackBarService.openSnackBar(
              "Errore durante la creazione del badge."
            );
          },
          complete: () => {
            this.loadingService.hide();
          },
        });
      }
    });
  }

  openBadgeDetails(badge: Badge, action: string): void {
    this.router.navigate(["/user/badges", badge.id]);
  }

  openChallengeDetails(challenge: Challenge): void {
    this.router.navigate(["/user/badges/challenge", challenge.id]);
  }
}
