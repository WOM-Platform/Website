import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import {
  finalize,
  forkJoin,
  of,
  Subject,
  Subscription,
  throwError,
} from "rxjs";
import { DialogCreateSourceComponent } from "../dialog-create-instrument/dialog-create-instrument.component";
import { DialogViewEditInstrumentComponent } from "../dialog-view-edit-instrument/dialog-view-edit-instrument.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { SourceService } from "../../../_services/source.service";
import { DialogConfirmCancelComponent } from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import { LoadingService } from "../../../_services/loading.service";
import { StorageService } from "../../../_services/storage.service";
import { AimsService } from "src/app/_services";
import { Aim } from "src/app/_models";

@Component({
  selector: "app-admin-managment-instruments",
  templateUrl: "./admin-managment-instruments.component.html",
  styleUrl: "./admin-managment-instruments.component.css",
})
export class AdminManagmentInstrumentsComponent implements OnInit, OnDestroy {
  searchParameters: string = "";
  searchTerms = new Subject<string>();

  currentPage: number = 1;
  itemsPerPage: string;
  pageCount: number;
  totalItems: number;

  errorMessage: string = "";

  instrumentsList: any;
  instrumentsTableColumns: any[] = [
    { field: "name", hideOnMobile: false },
    { field: "url", hideOnMobile: true },
    { field: "WOM generati", hideOnMobile: true },
  ];

  sourcesSubscription: Subscription;
  private subscriptions: Subscription = new Subscription(); // To manage subscriptions

  constructor(
    private aimsService: AimsService,
    private sourceService: SourceService,
    private matDialog: MatDialog,
    private cd: ChangeDetectorRef,
    private loadingService: LoadingService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.getSourcesList();
  }

  getSourcesList() {
    this.loadingService.show();

    const cachedData = this.storageService.get("instrumentsList");
    if (cachedData) {
      this.assignInstrumentData(cachedData);
      this.loadingService.hide();
    } else {
      this.subscriptions.add(
        this.sourceService
          .getInstrumentList(
            this.searchParameters,
            this.currentPage,
            this.itemsPerPage
          )
          .pipe(
            catchError((error) => {
              console.error("Error fetching instruments:", error);
              return of(null);
            }),
            finalize(() => {
              this.loadingService.hide();
              this.cd.markForCheck();
            })
          )
          .subscribe((res) => {
            if (res) {
              this.storageService.set("instrumentsList", res);
              this.assignInstrumentData(res);
            }
          })
      );
    }
  }

  private assignInstrumentData(data) {
    this.totalItems = data.totalCount;
    this.pageCount = data.pageCount;
    this.itemsPerPage = data.pageSize;
    this.instrumentsList = data.data || [];
    this.currentPage =
      this.storageService.get("instrumentsCurrentPage") || this.currentPage;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onCreateSource() {
    const dialogRef = this.matDialog.open(DialogCreateSourceComponent, {
      width: "900px",
      maxHeight: "90vh",
      panelClass: "custom-dialog-backdrop",
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.name && result.url) {
        this.loadingService.show();
        this.cd.markForCheck();
        const createSub = this.sourceService
          .createInstrument(result.name, result.url)
          .subscribe({
            next: (user) => {
              this.processAccess(user, result);
            },
            error: (err) => {
              this.errorMessage = "Failed to create instrument.";
              this.loadingService.hide();
              this.cd.markForCheck();
            },
          });
        this.subscriptions.add(createSub);
      } else {
        this.errorMessage = "Invalid input data.";
        this.loadingService.hide();
        this.cd.markForCheck();
      }
    });
  }

  onUpdateItemsPerPage(value: string) {
    this.storageService.clearCache("instrumentsList");
    this.itemsPerPage = value;

    this.getSourcesList();
  }

  private processAccess(user, result) {
    if (result.access && result.access.length > 0) {
      const accessSub = this.sourceService
        .addAccessSequentially(user.id, result.access)
        .subscribe({
          next: () => console.log("All access rights added successfully."),
          error: (err) => {
            console.error("Error adding access rights:", err);
            this.loadingService.hide();
            this.cd.markForCheck();
          },
          complete: () => {
            this.storageService.clearCache("instrumentsList");
            this.getSourcesList();
            this.loadingService.hide();
            this.cd.markForCheck();
          },
        });
      this.subscriptions.add(accessSub);
    } else {
      this.storageService.clearCache("instrumentsList");
      this.getSourcesList();
      this.loadingService.hide();
      this.cd.markForCheck();
    }
  }

  onViewSource(user: any) {
    this.openDialogViewEdit(user, "view");
    // this.subscriptions.add(viewSub);
  }

  openDialogViewEdit(user, action: string) {
    this.loadingService.show();

    forkJoin({
      accessInstrument: this.sourceService.getInstrumentAccessList(user.id),
      datainstrument: this.sourceService.details(user.id),
    }).subscribe((res) => {
      this.loadingService.hide();

      const data = res.datainstrument;
      const aimsLetter = data["aims"]["enabled"];

      this.aimsService.getAll().subscribe((re) => {
        const matchingAims = this.findMatchingCodes(re, aimsLetter);
        const dialogRef = this.matDialog.open(
          DialogViewEditInstrumentComponent,
          {
            width: "900px",
            panelClass: "overflow-y-auto",
            data: {
              id: data.id,
              name: data.name,
              url: data.url,
              access: res.accessInstrument["users"],
              aims: matchingAims,
              action: action,
            },
          }
        );

        dialogRef.afterClosed().subscribe((res) => {
          this.loadingService.hide();
          this.cd.markForCheck();
        });
      });
    });
  }

  findMatchingCodes(aims: Aim[], letters: string[]): Aim[] {
    return aims.filter((aim) => letters.includes(aim.code)).map((aim) => aim);
  }

  onEditSource(user: any) {
    this.openDialogViewEdit(user, "edit");
  }

  updateAccessList(
    userId: any,
    dialogRef: MatDialogRef<DialogViewEditInstrumentComponent>
  ) {}

  onDeleteSource(userToDelete: any) {
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
        const delSub = this.sourceService
          .deleteInstrument(userToDelete.id)
          .subscribe((res) => {
            this.storageService.clearCache("instrumentsList");
            this.getSourcesList();
          });
        this.subscriptions.add(delSub);
      }
    });
  }

  onPageChange(page: number): void {
    this.storageService.clearCache("instrumentsList");
    this.currentPage = page;
    this.storageService.set("instrumentsCurrentPage", this.currentPage);
    this.getSourcesList();
  }

  filterUpdate(filter) {
    this.storageService.clearCache("instrumentsList");
    if (this.currentPage != 1) this.currentPage = 1;
    this.itemsPerPage = filter.get("itemsPerPage").value;
    this.storageService.set("intrumentsItemsPerPage", this.itemsPerPage);
    if (
      filter.get("search").value.length >= 3 ||
      filter.get("search").value.length === 0
    ) {
      this.searchParameters = filter.get("search").value;
    }
    this.getSourcesList();
  }
}
