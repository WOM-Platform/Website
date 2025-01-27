import { Component, Input, OnInit } from "@angular/core";
import { Pos } from "../../../_models";
import { PosDialogData } from "../pos-details/pos-details";
import { first } from "rxjs";
import { DialogConfirmCancelComponent } from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { MatDialog } from "@angular/material/dialog";
import { MerchantService, PosService } from "../../../_services";
import { TranslateService } from "@ngx-translate/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NgFor, NgIf } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";
import { PosCreateDialogComponent } from "../pos-create-dialog/pos-create-dialog.component";

@Component({
  selector: "app-user-pos-list",
  imports: [NgIf, NgFor, MatIcon],
  standalone: true,
  templateUrl: "./user-pos-list.component.html",
  styleUrl: "./user-pos-list.component.css",
})
export class UserPosListComponent implements OnInit {
  @Input() posList: Pos[];
  @Input() actionMerchant: string;
  @Input() merchantId: string;

  createNewPos: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private posService: PosService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  onEditPos(pos: Pos, action: string) {
    this.router.navigate(
      [
        `user/merchants/${this.merchantId}/edit/pos/${pos.id}/${action}`,
      ] /*{relativeTo: this.route}*/
    );
    /*   const posData = new PosDialogData();
           posData.merchantId = this.merchantId
           posData.pos = pos;
           posData.isEdit = true;

           this.matDialog.open(PosDetailsComponent, {
               data: posData,
           });*/
  }

  onAddPos() {
    const posData = new PosDialogData();
    posData.merchantId = this.merchantId;
    posData.pos = null;
    posData.isEdit = false;

    const dialogRef = this.matDialog.open(PosCreateDialogComponent, {
      data: posData,
      width: "80vw",
      height: "90vh",
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

  handleCancellationPos() {}

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
