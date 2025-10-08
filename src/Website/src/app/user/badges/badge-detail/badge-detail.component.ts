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
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";
import { BadgeService } from "src/app/_services/badge.service";
import { LoadingService } from "src/app/_services/loading.service";
import { SnackBarService } from "src/app/_services/snack-bar.service";
import { BlurhashComponent } from "../../components/blurhash/blurhash.component";
import { SimpleFilterComponent } from "../../components/simple-filter/simple-filter.component";

@Component({
  selector: "app-badge-detail",
  imports: [
    NgIf,
    NgFor,
    ReactiveFormsModule,
    BlurhashComponent,
    SimpleFilterComponent,
  ],
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
  challenges = [];

  isFiltering: boolean;
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
    this.badgeService.getAllChallenges().subscribe({
      next: (challenges) => {
        console.log("Fetched challenges:", challenges);
        this.challenges = challenges;
      },
      error: (err) => {
        this.snackBarService.openSnackBar(
          "Errore durante il caricamento delle sfide"
        );
        console.error(err);
      },
      complete: () => {
        this.loadingService.hide();
      },
    });
    this.badgeService.getBadge(id).subscribe({
      next: (b) => {
        this.badge = b || {};
        this.isFiltering = this.badge.simpleFilter;
        const formGroupConfig: any = {
          sortName: [this.badge?.name?.it || ""],
          imageUrl: [this.badge?.imageUrl || null],
          name: this.fb.group(
            {
              it: [this.badge?.name?.it || ""],
              en: [this.badge?.name?.en || ""],
            },
            { validators: Validators.required }
          ),
          description: this.fb.group({
            it: [this.badge?.description?.it || null],
            en: [this.badge?.description?.en || null],
          }),
          isPublic: [this.badge?.isPublic ?? true],
          informationUrl: [this.badge?.informationUrl || null],
          challengeId: [this.badge?.challengeId || null],
          createdAt: [this.badge?.createdAt || ""],
        };

        if (this.isFiltering) {
          const boundsGroup = this.badge?.simpleFilter?.bounds
            ? this.fb.group({
                leftTop: [
                  this.badge.simpleFilter.bounds.leftTop,
                ],
                rightBottom: [
                  this.badge.simpleFilter.bounds.rightBottom,
                ],
              })
            : null;
          const intervalGroup = this.badge?.simpleFilter?.interval
            ? this.fb.group({
                start: [this.badge.simpleFilter.interval.start ?? null],
                end: [this.badge.simpleFilter.interval.end ?? null],
              })
            : null;

          
          formGroupConfig.simpleFilter = this.fb.group({
            count: [this.badge?.simpleFilter?.count || 1, Validators.required],
            sourceId: [this.badge?.simpleFilter?.sourceId || null],
            aim: [this.badge?.simpleFilter?.aim || null],
            bounds: boundsGroup,
            interval: intervalGroup,
          });
        }

        this.badgeForm = this.fb.group(formGroupConfig);

        this.badgeForm
          .get("name.it")
          ?.valueChanges.subscribe((newValue: string) => {
            this.badgeForm
              .get("sortName")
              ?.setValue(newValue, { emitEvent: false });
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

  onFilterToggle(enabled: boolean) {
    enabled ? this.addFilter() : this.removeFilter();
  }

  addFilter() {
    this.isFiltering = true;
    
    if (!this.badgeForm.get("simpleFilter")) {
      const simpleFilterGroup = this.fb.group({
        count: [1],
        sourceId: [null],
        aim: [null],
        bounds: this.fb.group({
          leftTop: [[0, 0]],
          rightBottom: [[0, 0]],
        }),
        interval: this.fb.group({
          start: [null],
          end: [null],
        }),
      });

      this.badgeForm.addControl("simpleFilter", simpleFilterGroup);
    }
  }

  removeFilter() {
    this.isFiltering = false;

    if (this.badgeForm.get("simpleFilter")) {
      this.badgeForm.removeControl("simpleFilter");
    }
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

  updateFilter(event: any) {
    if (event) {
      this.badgeForm.patchValue({
        simpleFilter: event,
      });
    }
  }

  onSave(): void {
    console.log("Updated Challenge:", this.badgeForm.value.challenge);

    this.badgeService
      .updateBadge(this.badgeId, this.badgeForm.value)
      .subscribe((res) => {
        this.loadBadge(this.badgeId);
        this.snackBarService.openSnackBar("Badge aggiornato con successo");
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
