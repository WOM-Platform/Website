import {Component, Input} from '@angular/core';
import {Pos} from "../../../_models";
import {AddPosDialogComponent, PosDialogData} from "../dialog-create-pos/add-pos.component";
import {first} from "rxjs";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {MatDialog} from "@angular/material/dialog";
import {MerchantService, PosService} from "../../../_services";
import {TranslateService} from "@ngx-translate/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgFor, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-user-pos-list',
    standalone: true,
    imports: [NgIf, NgFor, MatIcon],
    templateUrl: './user-pos-list.component.html',
    styleUrl: './user-pos-list.component.css'
})
export class UserPosListComponent {
    @Input() posList: Pos[]
    @Input() action: string
    @Input() merchantId: string

    createNewPos: boolean = false

    constructor(private snackBar: MatSnackBar, private matDialog: MatDialog, private merchantService: MerchantService, private posService: PosService,
                private translate: TranslateService,) {
    }

    onEditPos(pos: Pos) {
        const posData = new PosDialogData();
        posData.merchantId = this.merchantId
        posData.pos = pos;
        posData.isEdit = true;

        console.log("Pos dara ", posData)
        this.matDialog.open(AddPosDialogComponent, {
            data: posData,
        });
    }

    onAddPos() {
        const posData = new PosDialogData();
        posData.merchantId = this.merchantId;
        posData.pos = null;
        posData.isEdit = false;

        const dialogRef = this.matDialog.open(AddPosDialogComponent, {
            data: posData,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.updatePosList();
                let successString;
                if (posData.isEdit) {
                    successString = "USER.EDIT_POS.SUCCESS";
                } else {
                    successString = "USER.ADD_POS.SUCCESS";
                }
                this.translate
                    .get(successString)
                    .pipe(first())
                    .subscribe((response) => {
                        this.openSnackBar(response);
                    });
            }
        });
    }

    handleCancellationPos() {
    }


    onDeletePos(pos: Pos) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: "500px",
            data: {
                title: "Conferma eliminazione",
                message: "Sei sicuro di voler confermare l'eliminazione?",
                confirm: "si",
                cancel: "Annulla",
            },
        });
        dialogRef.afterClosed().subscribe(() => {
            this.posService.delete(pos.id).subscribe({
                next: () => {
                    this.updatePosList();
                },
            });
        });
    }

    updatePosList() {
        this.merchantService
            .getMerchantPos(this.merchantId)
            .subscribe((res) => (this.posList = res["pos"]));
    }


    openSnackBar(message = "null"): any {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }

}
