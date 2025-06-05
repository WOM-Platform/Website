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

@Component({
  selector: "app-badges",
  imports: [CommonModule, CreateButtonComponent, BlurhashComponent],
  templateUrl: "./badges.component.html",
  styleUrl: "./badges.component.css",
})
export class BadgesComponent implements OnInit {
  challengeList: any[] = [];

  badges: Badge[] = [];
  challengeBadges: { [challengeId: string]: Badge[] } = {};

  isPublicBadges: Badge[] = [];

  constructor(
    private badgeService: BadgeService,
    private loadingService: LoadingService,
    private matDialog: MatDialog,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBadges();
  }

  loadBadges() {
    this.isPublicBadges = [];
    this.challengeBadges = {};

    this.badgeService.getAllBadges().subscribe((res) => {
      console.log("Badges loaded:", res);
      this.badges = res;
      this.badges.map((b) => {
        if (b.isPublic) {
          this.isPublicBadges.push(b);
        } else if (b.challenge) {
          if (!this.challengeBadges[b.challenge]) {
            this.challengeBadges[b.challenge] = [];
          }
          this.challengeBadges[b.challenge].push(b);
        }
      });
    });
  }

  newChallenge() {
    const dialogRef = this.matDialog.open(DialogCreateChallengeComponent, {
      data: {
        title: "Nuova challenge",
      },
    });
  }

  newBadge() {
    const dialogRef = this.matDialog.open(DialogCreateBadgeComponent, {
      data: {
        title: "Nuovo badge",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
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
}
