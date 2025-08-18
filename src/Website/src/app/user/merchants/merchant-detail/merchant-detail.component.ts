import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { countryList, Merchant, primaryActivityType } from "../../../_models";
import { MerchantService, PosService, UserService } from "src/app/_services";
import { ActivatedRoute } from "@angular/router";
import { Subscription, forkJoin, Observable, finalize } from "rxjs";
import { LoadingService } from "src/app/_services/loading.service";
import { Location } from "@angular/common";
import { StorageService } from "src/app/_services/storage.service";
import { Access } from "src/app/_models/instrument";
import { MatDialog } from "@angular/material/dialog";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";
import { TranslateService } from "@ngx-translate/core";
import { switchMap, tap } from "rxjs/operators";
import { SnackBarService } from "../../../_services/snack-bar.service";

@Component({
  selector: "app-merchant-detail",
  templateUrl: "./merchant-detail.component.html",
  styleUrl: "./merchant-detail.component.css",
  standalone: false,
})
export class MerchantDetailComponent implements OnInit, OnDestroy {
  id: string;
  name: string;
  fiscalCode: string;
  activationCode: string;
  primaryActivity: string;
  posList: any[] = [];
  accessList: Access[] = [];
  address: string;
  isEnabled: boolean;
  zipCode: string;
  country: string;
  action: string;

  businessList: string[] = primaryActivityType;
  countryList: string[] = countryList;

  subscription: Subscription;

  merchantId: string;

  merchant: Merchant = new Merchant();

  subscriptions = new Subscription();

  constructor(
    private cd: ChangeDetectorRef,
    private loadingService: LoadingService,
    private location: Location,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private snackBarService: SnackBarService,
    private posService: PosService,
    private storageService: StorageService,
    private translate: TranslateService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.merchantId = params["id"];
      this.action = params["action"];
      this.loadingService.show();
      const observable = forkJoin({
        merchantData: this.merchantService.getMerchantById(this.merchantId),
        accessData: this.merchantService.getAccessList(this.merchantId),
        posData: this.merchantService.getMerchantPos(this.merchantId),
      });
      observable
        .pipe(
          finalize(() => {
            this.loadingService.hide();
          })
        )
        .subscribe(({ merchantData, accessData, posData }) => {
          this.merchant = merchantData;
          this.id = merchantData.id;
          this.name = merchantData.name;
          this.fiscalCode = merchantData.fiscalCode;
          this.activationCode = merchantData.activationCode;
          this.isEnabled = merchantData.enabled;
          this.primaryActivity = merchantData.primaryActivity;
          this.address = merchantData.address;
          this.zipCode = merchantData.zipCode;
          this.country = merchantData.country;
          this.accessList = accessData["users"] || [];
          this.posList = posData["pos"] || [];

          this.cd.detectChanges();
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goBack(): void {
    this.location.back();
  }

  onUpdateMerchant(key: string, value: any, isTableToUpdate: boolean) {
    const updatedMerchant = { ...this.merchant };

    updatedMerchant[key] = value;

    this.merchantService.update(updatedMerchant).subscribe({
      next: () => {
        this.userService.me().subscribe({
          next: (res) => {
            // update admin table if a field of the one shown is edited
            if (isTableToUpdate)
              this.storageService.clearCache("merchantsList");

            this.accessList.map((accessToCheck) => {
              this.checkAccessCurrentUser(accessToCheck);
            });

            this.userService.updateUserOwnership(res);
            this.merchant = updatedMerchant;
          },
          error: (err) => {
            console.error(err);

            let ref = this.snackBarService.openSnackBar(
              "Errore durante l'aggiornamento dei dati"
            );
            ref.afterDismissed().subscribe();
          },
        });
      },
      error: (err) => {
        console.error(err);
        this.snackBarService.openSnackBar("Errore durante la modifica");
      },
    });
  }

  handleAccessList(user): void {
    const role = user.role;
    const access = user.access;

    const addAccessSub = this.merchantService
      .addAccess(this.id, access.id, role)
      .pipe(
        switchMap(() => this.updateAccessList()) // Ensure the access list is updated
      )
      .subscribe({
        next: () => {
          // search for the access id to have the access type
          const accessToCheck: Access = this.accessList.find(
            (acc) => acc.userId === access.id
          );
          this.checkAccessCurrentUser(accessToCheck);
        },
        error: (err) =>
          console.error("Error adding new instrument access:", err),
      });
    this.subscriptions.add(addAccessSub);
  }

  // to delete an access from the list
  onDeleteAccess(access: Access) {
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
      this.merchantService
        .deleteAccess(this.id, access.userId)
        .pipe(
          switchMap(() => this.updateAccessList()) // Ensure the access list is updated
        )
        .subscribe({
          next: () => {
            // Check if we need to
            this.updateAccessList();
            this.checkAccessCurrentUser(access);
          },
        });
    });
  }

  onCheckboxClick(): void {
    this.isEnabled = !this.isEnabled;
    this.onUpdateMerchant("enabled", this.isEnabled, false);
  }

  updateAccessList(): Observable<any> {
    return this.merchantService.getAccessList(this.merchantId).pipe(
      tap((res) => {
        this.accessList = res["users"];
      })
    );
  }

  updatePosList() {
    this.merchantService
      .getMerchantPos(this.merchantId)
      .subscribe((res) => (this.posList = res["pos"]));
  }

  checkAccessCurrentUser(access: Access) {
    const currentUser = this.storageService.load("currentUser");

    if (access.userId === currentUser.userId) {
      /*this.userService.updateCurrentUser(access, actionOnUser)*/
      this.storageService.clear("currentUser");
      this.userService.me().subscribe((res) => {
        this.userService.updateUserOwnership(res);
      });
    }
  }
}
