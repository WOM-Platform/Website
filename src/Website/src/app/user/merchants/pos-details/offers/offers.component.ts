import {Component, Input, OnInit} from '@angular/core';
import {Offer} from "../../../../_models/offer";
import {NgForOf, NgIf} from "@angular/common";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {CreateOfferComponent} from "./create-offer/create-offer.component";
import {ActiveBadgeComponent} from "../../../../components/active-badge/active-badge.component";
import {ActivatedRoute} from "@angular/router";
import {PosService} from "../../../../_services";
import {DialogConfirmCancelComponent} from "../../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {Merchant} from "../../../../_models";
import {SnackBarService} from "../../../../_services/snack-bar.service";

@Component({
    selector: 'app-offers',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        MatDialogModule,
        ActiveBadgeComponent
    ],
    templateUrl: './offers.component.html',
    styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
    @Input() posAction: string = "";
    offers: Offer[] = []
    posId: string;
    action: string;

    constructor(private dialog: MatDialog, private posService: PosService, private route: ActivatedRoute, private snackBarService: SnackBarService) {
    }

    ngOnInit() {
        this.loadData()
    }

    loadData() {
        this.route.paramMap.subscribe(params => {
            this.posId = params.get("posId")
            this.action = params.get("posAction");

            this.posService.getOffers(this.posId).subscribe({
                next: (offers) => {
                    offers.map(offer => {
                        this.posService.convertBlobToBase64(offer.imageBlob).subscribe(base64 => {
                            offer.imageString = base64
                        })
                    })

                    this.offers = offers
                },
                error: () => {
                }
            })
        })
    }

    addNewOffer() {
        const dialogRef = this.dialog.open(CreateOfferComponent,
            {
                width: "900px",
                maxHeight: "90vh",
                data: {},
            })
        dialogRef.afterClosed().subscribe((newOffer) => {
            if (newOffer) {
                this.posService.createOffer(this.posId, newOffer).subscribe({
                    next: (newOffer) => {
                        if (newOffer) {
                            console.log("new offer ", newOffer)
                            this.snackBarService.openSnackBar("Offerta creata correttamente")
                            this.posService.getOfferQrCode(newOffer).subscribe({
                                next: (offer) => {
                                    this.posService.convertBlobToBase64(offer.imageBlob).subscribe(base64 => {
                                        offer.imageString = base64
                                    })
                                    this.offers.push(offer)
                                }
                            })
                        }
                    },
                    error: (err) => {
                        console.error(err)
                        this.snackBarService.openSnackBar("Errore nella creazione dell'offerta")
                    }
                })
            }
        })
    }

    onEditOffer(offerId: string) {
        const dialogRef = this.dialog.open(CreateOfferComponent,
            {
                width: "900px",
                maxHeight: "90vh",
                data: {},
            })
        dialogRef.afterClosed().subscribe((newOffer) => {
            if (newOffer) {
                this.posService.createOffer(this.posId, newOffer).subscribe({
                    next: (newOffer) => {
                        if (newOffer) {
                            console.log("new offer ", newOffer)
                            this.snackBarService.openSnackBar("Offerta creata correttamente")
                            this.posService.getOfferQrCode(newOffer).subscribe({
                                next: (offer) => {
                                    this.posService.convertBlobToBase64(offer.imageBlob).subscribe(base64 => {
                                        offer.imageString = base64
                                    })
                                    this.offers.push(offer)
                                }
                            })
                        }
                    },
                    error: (err) => {
                        console.error(err)
                        this.snackBarService.openSnackBar("Errore nella creazione dell'offerta")
                    }
                })
            }
        })
    }

    onDeleteOffer(offerId: string) {
        const dialogRef = this.dialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            panelClass: 'custom-dialog-container',
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
                        this.offers.splice(this.offers.findIndex(offer => offer.id === offerId))
                        this.snackBarService.openSnackBar("Offerta cancellata correttamente")
                    },
                    error: () => {
                        this.snackBarService.openSnackBar("❌ Errore nella cancellazione dell'offerta")
                    }
                })
            }
        })
    }
}
