import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {
  countryList,
  Merchant,
  primaryActivityType,
  UIMerchant,
  UserMe,
} from "src/app/_models";
import { StorageService } from "src/app/_services/storage.service";
import { Subscription, first } from "rxjs";
import { DialogType } from "src/app/_models/dialogType";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import {
  MerchantDialogData,
  DialogCreateMerchant,
} from "../dialog-create-merchant/dialog-create-merchant.component";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MerchantService, UserService } from "src/app/_services";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Access } from "../../../_models/instrument";

@Component({
  selector: "app-my-merchants-collection",
  templateUrl: "./my-merchants-collection.component.html",
  styleUrl: "./my-merchants-collection.component.css",
  animations: [
    trigger("slideToggle", [
      state(
        "open",
        style({
          height: "*",
          opacity: 1,
          overflow: "hidden",
        })
      ),
      state(
        "closed",
        style({
          height: "0px",
          opacity: 0,
          overflow: "hidden",
        })
      ),
      transition("open <=> closed", [animate("300ms ease-in-out")]),
    ]),
    trigger("rotateArrow", [
      state("open", style({ transform: "rotate(180deg)" })),
      state("close", style({ transform: "rotate(0deg)" })),
      transition("open <=> closed", [animate("300ms ease-in-out")]),
    ]),
  ],
  standalone: false,
})
export class MyMerchantsCollectionComponent implements OnInit {
  currentUser: UserMe;
  merchants: UIMerchant[];

  subscriptions: Subscription;
  actions: string[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private snackBar: MatSnackBar,
    private storageService: StorageService,
    private translate: TranslateService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): any {
    this.currentUser = this.storageService.loadCurrentUser();

    this.userService.userOwnershipStatus.subscribe({
      next: (res) => {
        this.merchants = res["merchants"];
      },
    });
    this.merchants = this.currentUser.merchants.map(
      (merchant: Merchant, idx: number) => ({
        ...merchant,
        isOpen: idx === 0,
      })
    );

    this.merchants.map((merchant, idx) => {
      this.merchantService.getAccessList(merchant.id).subscribe({
        next: (accessList) => {
          this.actions[idx] = merchant.access === "Admin" ? "edit" : "view";
          this.merchants[idx] = {
            ...this.merchants[idx],
            accessList: accessList["users"],
          };
        },
        error: (err) => console.error(err),
      });
    });
  }

  onCreateMerchant() {
    const merchantDialogData = new MerchantDialogData();

    merchantDialogData.data = null;
    merchantDialogData.type = DialogType.create;
    merchantDialogData.isAdmin = false;

    const dialogRef = this.matDialog.open(DialogCreateMerchant, {
      data: merchantDialogData,
    });
    dialogRef.afterClosed().subscribe((merchant) => {
      if (merchant) {
        this.merchantService
          .register(merchant)
          .pipe(first())
          .subscribe({
            next: (result: Merchant) => {
              if (result) {
                this.merchantService.addAccess(
                  result.id,
                  this.userService.currentUserValue.id
                );
                this.loadData();
                this.translate
                  .get("USER.ADD_MERCHANT.SUCCESS")
                  .pipe(first())
                  .subscribe((response) => {
                    this.openSnackBar(response);
                  });
                this.storageService.clear(this.storageService.merchantFormKey);
                this.updateMerchantsList();
              }
            },
            error: (error) => {
              console.error(error);
            },
          });
      }
    });
  }

  /*addMerchant(): any {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        merchantDialogData.isAdmin = false;
        merchantDialogData.accessToAdd

        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.loadData();
                this.translate
                    .get("USER.ADD_MERCHANT.SUCCESS")
                    .pipe(first())
                    .subscribe((response) => {
                        this.openSnackBar(response);
                    });

                this.updateMerchantsList();
            }
        });
    }*/

  updateMerchantsList() {
    this.userService.me().subscribe(() => {
      this.loadData();
    });
  }

  editMerchant(merchant: Merchant): any {
    const merchantDialogData = new MerchantDialogData();
    merchantDialogData.data = merchant;
    merchantDialogData.type = DialogType.edit;
    this.merchantService.getAccessList(merchant.id).subscribe({
      next: () => {
        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
          data: merchantDialogData,
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.loadData();
            this.translate
              .get("USER.EDIT_MERCHANT.SUCCESS")
              .pipe(first())
              .subscribe((response) => {
                this.openSnackBar(response);
              });
          }
        });
      },
    });
  }

  onUpdateMerchant(index: number, key: string, value: any) {
    const updatedMerchant = this.merchants[index];

    updatedMerchant[key] = value;

    this.merchantService.update(updatedMerchant).subscribe({
      next: () => {
        // clear local storage info and merchant list
        this.storageService.clear("currentUser");
        this.storageService.clearCache("merchantsList");

        this.userService.me().subscribe({
          next: (res) => {
            this.userService.updateUserOwnership(res);
            this.merchants[index] = updatedMerchant;
          },
          error: (err) => {
            console.error(err);

            let ref = this.snackBar.open(
              "Errore durante l'aggiornamento dei dati",
              "close",
              { duration: 5000 }
            );
            ref.afterDismissed().subscribe(() => {});
          },
        });
      },
      error: (err) => {
        console.error(err);

        let ref = this.snackBar.open("Errore durante la modifica", "close", {
          duration: 5000,
        });
        ref.afterDismissed().subscribe(() => {});
      },
    });
  }

  onDeleteMerchant(merchant: Merchant) {
    const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
      width: "500px",
      data: {
        title: "Conferma eliminazione",
        message: "Sei sicuro di voler confermare l'eliminazione?",
        confirm: "si",
        cancel: "Annulla",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const delSub = this.merchantService
          .deleteMerchant(merchant.id)
          .subscribe(() => {
            this.updateMerchantsList();
          });
        this.subscriptions.add(delSub);
      }
    });
  }

  openSnackBar(message = "null"): any {
    this.snackBar.open(message, null, {
      duration: 5000,
    });
  }

  handleAccessList(user, merchantId, idx): void {
    const role = user.role;
    const access = user.access;

    const addAccessSub = this.merchantService
      .addAccess(merchantId, access.id, role)
      .subscribe({
        next: () => {
          this.checkAccessCurrentUser(access.id);
          this.updateAccessList(merchantId, idx);
        },
        error: (err) =>
          console.error("Error adding new instrument access:", err),
      });
    this.subscriptions.add(addAccessSub);
  }

  onDeleteAccess(access: Access, merchantId, idx) {
    const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
      width: "500px",
      data: {
        title: "Conferma eliminazione",
        message: "Sei sicuro di voler confermare l'eliminazione?",
        confirm: "si",
        cancel: "Annulla",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.merchantService.deleteAccess(merchantId, access.userId).subscribe({
        next: () => {
          this.checkAccessCurrentUser(access.userId);
          this.updateAccessList(merchantId, idx);
        },
      });
    });
  }

  updateAccessList(merchantId, idx) {
    this.merchantService
      .getAccessList(merchantId)
      .subscribe((res) => (this.merchants[idx].accessList = res["users"]));
  }

  checkAccessCurrentUser(idAccess: string) {
    const currentUser = this.storageService.load("currentUser");
    if (idAccess === currentUser.id) {
      this.userService
        .me()
        .subscribe((res) => this.userService.updateUserOwnership(res));
    }
  }

  protected readonly businessList = primaryActivityType;
  protected readonly countryList = countryList;
}
