import { Component, Input, OnInit } from "@angular/core";
import { Offer } from "../../../../_models/offer";
import { CommonModule, NgForOf, NgIf } from "@angular/common";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CreateEditOfferComponent } from "./create-edit-offer/create-edit-offer.component";
import { BadgeComponent } from "../../../../components/badge/badge.component";
import { ActivatedRoute } from "@angular/router";
import { PosService } from "../../../../_services";
import { DialogConfirmCancelComponent } from "../../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { SnackBarService } from "../../../../_services/snack-bar.service";

@Component({
  selector: "app-offers",
  imports: [NgForOf, CommonModule, MatDialogModule, BadgeComponent],
  standalone: true,
  templateUrl: "./offers.component.html",
  styleUrl: "./offers.component.css",
})
export class OffersComponent implements OnInit {
  @Input() posAction: string = "";
  offers: Offer[] = [];
  posId: string;
  action: string;

  constructor(
    private dialog: MatDialog,
    private posService: PosService,
    private route: ActivatedRoute,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.route.paramMap.subscribe((params) => {
      this.posId = params.get("posId");
      this.action = params.get("posAction");

      this.posService.getOffers(this.posId).subscribe({
        next: (offers) => {
          offers.map((offer) => {
            this.posService
              .convertBlobToBase64(offer.imageBlob)
              .subscribe((base64) => {
                offer.imageString = base64;
              });
          });

          this.offers = offers;
        },
        error: () => {},
      });
    });
  }

  addNewOffer() {
    const dialogRef = this.dialog.open(CreateEditOfferComponent, {
      width: "900px",
      maxHeight: "90vh",
      data: {},
    });
    dialogRef.afterClosed().subscribe((newOffer) => {
      if (newOffer) {
        this.posService.createOffer(this.posId, newOffer).subscribe({
          next: (newOffer) => {
            if (newOffer) {
              this.snackBarService.openSnackBar("Offerta creata correttamente");
              this.posService.getOfferQrCode(newOffer).subscribe({
                next: (offer) => {
                  this.posService
                    .convertBlobToBase64(offer.imageBlob)
                    .subscribe((base64) => {
                      offer.imageString = base64;
                    });
                  this.offers.push(offer);
                },
              });
            }
          },
          error: (err) => {
            console.error(err);
            this.snackBarService.openSnackBar(
              "Errore nella creazione dell'offerta"
            );
          },
        });
      }
    });
  }

  onEditOffer(offer: Offer) {
    // Create a deep copy of the offer
    const originalOffer: Offer = { ...offer };

    const dialogRef = this.dialog.open(CreateEditOfferComponent, {
      width: "900px",
      maxHeight: "90vh",
      data: { offer: originalOffer },
    });

    dialogRef.afterClosed().subscribe((editedOffer) => {
      if (editedOffer) {
        // Check if the offer's main fields are edited
        const isEdited =
          originalOffer.title !== editedOffer.title ||
          originalOffer.description !== editedOffer.description;

        // Check if the deactivated status is edited
        const isDeactivatedEdited =
          originalOffer.deactivated !== editedOffer.deactivated;

        if (isEdited) {
          this.posService
            .editOfferTitle(this.posId, editedOffer.id, {
              title: editedOffer.title,
              description: editedOffer.description,
            })
            .subscribe({
              next: () => {
                const index = this.offers.findIndex(
                  (o) => o.id === editedOffer.id
                );
                if (index !== -1) {
                  this.offers[index] = editedOffer;
                }
              },
              error: (err) => {
                console.error(err);
                this.snackBarService.openSnackBar(
                  "Errore nella modifica dell'offerta"
                );
              },
            });
        }

        if (isDeactivatedEdited) {
          this.posService
            .updateOfferStatus(
              this.posId,
              editedOffer.id,
              editedOffer.deactivated
            )
            .subscribe({
              next: (updated: Offer) => {
                const index = this.offers.findIndex((o) => o.id === updated.id);
                if (index !== -1) {
                  this.offers[index].deactivated = updated.deactivated;
                }
              },
              error: (err) => {
                console.error(err);
                this.snackBarService.openSnackBar(
                  "Errore nella modifica dello stato dell'offerta"
                );
              },
            });
        }
      }
    });
  }

  onDeleteOffer(offerId: string) {
    const dialogRef = this.dialog.open(DialogConfirmCancelComponent, {
      width: "500px",
      panelClass: "custom-dialog-container",
      data: {
        title: "Conferma eliminazione",
        message: "Sei sicuro di voler confermare l'eliminazione?",
        confirm: "si",
        cancel: "Annulla",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.posService.deleteOffer(this.posId, offerId).subscribe({
          next: () => {
            this.offers.splice(
              this.offers.findIndex((offer) => offer.id === offerId),
              1
            );
            this.snackBarService.openSnackBar(
              "Offerta cancellata correttamente"
            );
          },
          error: () => {
            this.snackBarService.openSnackBar(
              "❌ Errore nella cancellazione dell'offerta"
            );
          },
        });
      }
    });
  }
}
