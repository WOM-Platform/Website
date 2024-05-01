import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
    DialogCreateMerchant,
    MerchantDialogData
} from "../../components/dialog-create-merchant/dialog-create-merchant";
import {DialogType} from "../../../_models/dialogType";
import {first} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {NgIf} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant} from "../../../_models";
import {MerchantService} from "../../../_services";
import {StorageService} from "../../../_services/storage.service";
import {UserMerchantsComponent} from "../user-merchants.component";
import {FiltersComponent} from "../../components/filters/filters.component";
import {DialogViewUserComponent} from "../../components/dialog-view-user/dialog-view-user.component";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-merchants-tab',
    standalone: true,
    imports: [
        MatIcon,
        AdminTableComponent,
        NgIf,
        SharedModule,
        FiltersComponent
    ],
    templateUrl: './merchants-tab.component.html',
    styleUrl: './merchants-tab.component.css'
})
export class MerchantsTabComponent implements OnInit {
    @Output() isLoading = new EventEmitter<boolean>()

    merchantsList
    merchantsTableColumns = [{field: "name", hideOnMobile: false}, {field: "primaryActivity", hideOnMobile: false},]

    currentPage: number = 1;
    itemsPerPage: string = '10';
    pageCount: number;
    totalItems: number;

    searchParameters = ""
    formApiError: boolean;

    subscriptions = new Subscription()

    constructor(public matDialog: MatDialog,
                private merchantService: MerchantService,
                private cd: ChangeDetectorRef,
                private storageService: StorageService) {
    }

    ngOnInit() {
        /* TEMPORARY SECTION */
        this.merchantsList = JSON.parse(localStorage.getItem("merchantData"));
        console.log(this.merchantsList)
    }

    getMerchantsList() {
    }

    onCreateMerchant() {
        const merchantDialogData = new MerchantDialogData();
        merchantDialogData.data = null;
        merchantDialogData.type = DialogType.create;
        const dialogRef = this.matDialog.open(DialogCreateMerchant, {
            data: merchantDialogData
        });
        dialogRef.afterClosed().subscribe(merchant => {
            console.log("create close ", merchant)
            if (merchant) {
                this.merchantService.register(merchant).pipe(first()).subscribe(
                    result => {
                        this.storageService.clear(this.storageService.merchantFormKey);
                    }, error => {
                        this.formApiError = true;
                        console.log(error);
                    });
                /*  this.loadData();
                  this.translate.get('USER.ADD_MERCHANT.SUCCESS').pipe(first()).subscribe(
                      response => {
                          this.openSnackBar(response);
                      });*/
            }
        });
    }

    onViewMerchant(merchant: Merchant) {
        const viewKeys = [
            {field: 'id', isList: false},
            {field: 'fiscalCode', isList: false},
            {field: 'pos', isList: true},
            {field: 'primaryActivity', isList: false},
            {field: 'addressDetails[formattedAddress]', isList: false}
        ]
        console.log("cooo")
        console.log(merchant.address, merchant.zipCode, merchant.city, merchant.country)
        const dialogRef = this.matDialog.open(DialogViewUserComponent, {
            width: "900px",
            data: {
                viewValues: merchant,
                viewKeys: viewKeys,
                id: merchant.id,
                name: merchant.name,
                url: merchant.url,
                access: merchant["pos"],
                action: "view",
            },
        });
        const viewSub = dialogRef.afterClosed().subscribe((res) => {
            this.isLoading.emit(false);
            this.cd.markForCheck();

        });
        this.subscriptions.add(viewSub);
    }

    onDeleteMerchant(merchant: Merchant) {
    }

    onEditMerchant(merchant: Merchant) {
        /*    this.merchantService.update(merchant).pipe(first()).subscribe(
                result => {
                    this.storageService.clear(this.storageService.merchantFormKey);
                }, error => {
                    this.formApiError = true;
                    console.log(error);
                });*/
    }

    onPageChange(page: number): void {
        this.currentPage = page;
        this.getMerchantsList();
    }

    filterUpdate(filter) {
        if (this.currentPage != 1) this.currentPage = 1;
        this.itemsPerPage = filter.get('itemsPerPage').value
        if (filter.get('search').value.length >= 3 || filter.get('search').value.length === 0) {
            this.searchParameters = filter.get('search').value
        }
        this.getMerchantsList();
    }
}
