import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { countryList, Merchant, primaryActivityType } from "../../../_models";
import { MerchantService, PosService, UserService } from "src/app/_services";
import { ActivatedRoute } from "@angular/router";
import { Subscription, forkJoin } from "rxjs";
import { LoadingService } from "src/app/_services/loading.service";
import { Location } from "@angular/common";
import { StorageService } from "src/app/_services/storage.service";
import { Access } from "src/app/_models/instrument";
import { MatDialog } from "@angular/material/dialog";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";

@Component({
  selector: "app-merchant-detail",
  templateUrl: "./merchant-detail.component.html",
  styleUrl: "./merchant-detail.component.css",
})
export class MerchantDetailComponent implements OnInit, OnDestroy {
  id: string;
  name: string;
  fiscalCode: string;
  primaryActivity: string;
  posList: any[] = [];
  accessList: any[] = [];
  address: string;
  isEnabled: boolean;
  zipCode: string;
  country: string;
  action: string;
  createNewAccess = false;

  businessList: string[] = primaryActivityType;

  subscription: Subscription;

  merchantId: string;

  merchant: Merchant = new Merchant();

  isEditing = {
    fiscalCode: false,
    primaryActivity: false,
    address: false,
    zipCode: false,
    country: false,
  };

  primaryActivityOptions: string[] = primaryActivityType;

  constructor(
    private cd: ChangeDetectorRef,
    private loadingService: LoadingService,
    private location: Location,
    private matDialog: MatDialog,
    private merchantService: MerchantService,
    private posService: PosService,
    private storageService: StorageService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.merchantId = params["id"];
      this.action = params["action"];
      this.loadingService.show();
      this.subscription = forkJoin({
        merchantData: this.merchantService.getMerchantById(this.merchantId),
        accessData: this.merchantService.getAccessList(this.merchantId),
        // posData: this.posService.(merchantId)
      }).subscribe(({ merchantData, accessData }) => {
        this.merchant = merchantData;
        this.id = merchantData.id;
        this.name = merchantData.name;
        this.isEnabled = merchantData.enabled;
        this.fiscalCode = merchantData.fiscalCode;
        this.primaryActivity = merchantData.primaryActivity;
        this.address = merchantData.address;
        this.zipCode = merchantData.zipCode;
        this.country = merchantData.country;
        this.accessList = accessData["users"] || [];
        // this.posList = accessData.posList || [];
        this.loadingService.hide();
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
  startEditing(field: string): void {
    this.isEditing[field] = true;
  }

  stopEditing(field: string): void {
    this.isEditing[field] = false;
  }

  handleAccessList(user): void {
    const role = user.role;
    const access = user.access;

    const addAccessSub = this.merchantService
      .addAccess(this.id, access.id, role)
      .subscribe({
        next: () => {
          this.checkAccessCurrentUser(access.userId);
          this.updateAccessList();
        },
        error: (err) =>
          console.error("Error adding new instrument access:", err),
      });
    // this.subscriptions.add(addAccessSub);
  }

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

    dialogRef.afterClosed().subscribe((result) => {
      this.merchantService.deleteAccess(this.id, access.userId).subscribe({
        next: () => {
          this.updateAccessList();
        },
      });
    });
  }

  onCheckboxClick(): void {
    this.isEnabled = !this.isEnabled;
    this.onUpdateMerchant("enabled", this.isEnabled);
  }

  onUpdateMerchant(key: string, value: any) {
    const updatedMerchant = { ...this.merchant };

    updatedMerchant[key] = value;

    this.merchantService.update(updatedMerchant).subscribe();
  }

  updateAccessList() {
    this.merchantService
      .getAccessList(this.merchantId)
      .subscribe((res) => (this.accessList = res["users"]));
  }

  onUpdateDataAccess(data: any): void {
    this.accessList = data || [];
    this.action = "edit";
    this.cd.markForCheck();
  }

  onUpdateDataPos(data: any): void {
    this.posList = data || [];
    this.action = "edit";
    this.cd.markForCheck();
  }

  checkAccessCurrentUser(idAccess: string) {
    const currentUser = this.storageService.load("currentUser");
    if (idAccess === currentUser.id) {
      this.userService
        .me()
        .subscribe((res) => this.userService.updateUserOwnership(res));
    }
  }
}
