import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
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
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MerchantDetailComponent implements OnInit, OnDestroy {
  merchantId: string = "";
  action: string = "";
  merchant: Merchant = new Merchant();

  posList: any[] = [];
  accessList: Access[] = [];

  businessList: string[] = primaryActivityType;
  countryList: string[] = countryList;

  private subscriptions = new Subscription();

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
    this.subscriptions.add(
      this.route.params
        .pipe(
          tap((params) => {
            this.merchantId = params["id"];
            this.action = params["action"];
            this.loadingService.show();
          }),
          switchMap(() =>
            forkJoin({
              merchantData: this.merchantService.getMerchantById(
                this.merchantId
              ),
              accessData: this.merchantService.getAccessList(this.merchantId),
              posData: this.merchantService.getMerchantPos(this.merchantId),
            }).pipe(finalize(() => this.loadingService.hide()))
          )
        )
        .subscribe({
          next: ({ merchantData, accessData, posData }) => {
            this.merchant = merchantData;
            this.accessList = accessData?.users || [];
            this.posList = (posData as any)?.["pos"] || [];

            this.cd.detectChanges();
          },
          error: () => {
            this.loadingService.hide();
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

  onUpdateMerchant(key: string, value: any, isTableToUpdate: boolean) {
    const updatedMerchant = {
      ...this.merchant,
      [key]: value,
    };

    this.merchantService
      .update(updatedMerchant)
      .pipe(switchMap(() => this.userService.me()))
      .subscribe({
        next: (res) => {
          if (isTableToUpdate) {
            this.storageService.clearCache("merchantsList");
          }

          this.userService.updateUserOwnership(res);
          this.merchant = updatedMerchant;

          this.accessList.forEach((acc) => this.checkAccessCurrentUser(acc));
        },
        error: () => {
          this.snackBarService.openSnackBar("Errore durante la modifica");
        },
      });
  }

  handleAccessList(user: any): void {
    const role = user.role;
    const access = user.access;

    const addAccessSub = this.merchantService
      .addAccess(this.merchant.id, access.id, role)
      .pipe(
        switchMap(() => this.updateAccessList()) // Ensure the access list is updated
      )
      .subscribe({
        next: () => {
          // search for the access id to have the access type
          const accessToCheck: Access | undefined = this.accessList.find(
            (acc) => acc.userId === access.id
          );
          if (accessToCheck) {
            this.checkAccessCurrentUser(accessToCheck);
          }
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
        .deleteAccess(this.merchant.id, access.userId)
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

  private syncCurrentUserIfNeeded() {
    this.userService.me().subscribe({
      next: (res) => {
        this.userService.updateUserOwnership(res);
        this.accessList.forEach((acc) => this.checkAccessCurrentUser(acc));
      },
      error: () => {
        this.snackBarService.openSnackBar("Errore aggiornamento utente");
      },
    });
  }

  onCheckboxClick(): void {
    this.onUpdateMerchant("enabled", !this.merchant.enabled, false);
  }

  updateAccessList(): Observable<any> {
    return this.merchantService
      .getAccessList(this.merchantId)
      .pipe(tap((res) => (this.accessList = res?.users || [])));
  }

  updatePosList() {
    this.merchantService
      .getMerchantPos(this.merchantId)
      .subscribe((res: any) => (this.posList = res["pos"]));
  }

  checkAccessCurrentUser(access: Access) {
    const currentUser = this.storageService.load("currentUser");

    if (access.userId === currentUser.userId) {
      this.storageService.clear("currentUser");
      this.userService.me().subscribe((res) => {
        this.userService.updateUserOwnership(res);
      });
    }
  }
}
