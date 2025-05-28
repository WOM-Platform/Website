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

import badgeData from "./data-badge.json";
@Component({
  selector: "app-badges",
  imports: [CommonModule, CreateButtonComponent],
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
    this.badges = badgeData;
    this.isPublicBadges = [];
    this.challengeBadges = {};

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
        this.loadingService.show();
      }
    });
  }

  openBadgeDetails(badge: Badge, action: string): void {
    this.router.navigate(["/user/badges", badge.id]);
  }
}
