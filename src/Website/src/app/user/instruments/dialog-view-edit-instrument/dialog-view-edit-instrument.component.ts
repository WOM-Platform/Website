import {
  Component,
  EventEmitter,
  Inject,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { Aim } from "src/app/_models/aim";
import { Access, Instrument } from "src/app/_models/instrument";
import { AimsService, UserService } from "src/app/_services";
import { SourceService } from "src/app/_services/source.service";
import { StorageService } from "src/app/_services/storage.service";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";

@Component({
  selector: "app-dialog-view-instrument",
  templateUrl: "./dialog-view-edit-instrument.component.html",
  styleUrls: ["./dialog-view-edit-instrument.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewEditInstrumentComponent implements OnInit, OnDestroy {
  @Output() updatedField = new EventEmitter<string>();

  instrument: Instrument;
  accessUsers: Access[];

  action: string;
  createNewAccess = false;

  subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cd: ChangeDetectorRef,
    private matDialog: MatDialog,
    private sourceService: SourceService,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.instrument = data;
    this.action = data.action;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  // to update instrument field like name, url and aims
  onUpdateSourceField(key: string, value: any, isTableToUpdate: boolean) {
    const updatedInstrument = { ...this.instrument };

    updatedInstrument[key] = value;
    this.sourceService.update(updatedInstrument).subscribe({
      next: () => {
        if (isTableToUpdate) this.updatedField.emit(key);
        this.instrument = updatedInstrument;
        this.cd.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }

  getAccessList(): void {
    this.sourceService.getInstrumentAccessList(this.instrument.id).subscribe({
      next: (res) => {
        const accessList = res["users"];
        this.onUpdateData(accessList);
        this.cd.markForCheck();
      },
      error: (err) => console.error(err),
    });
  }

  onDeleteAccess(access): void {
    const dialogDeleteRef = this.matDialog.open(DialogConfirmCancelComponent, {
      width: "500px",
      data: {
        title: "Conferma eliminazione",
        message: "Sei sicuro di voler confermare l'eliminazione?",
        confirm: "si",
        cancel: "Annulla",
      },
    });

    dialogDeleteRef.afterClosed().subscribe((result) => {
      if (result) {
        const delAccessSub = this.sourceService
          .deleteInstrumentAccess(this.instrument.id, access.userId)
          .subscribe({
            next: () => {
              this.checkAccessCurrentUser(access.userId);
              this.instrument.access = this.instrument.access.filter(
                (a) => a["userId"] !== access.userId
              );
              this.onUpdateData(this.instrument.access);
            },
            error: (err) =>
              console.error("Error deleting instrument access:", err),
          });
        this.subscriptions.add(delAccessSub);
      }
    });

    this.cd.markForCheck();
  }

  handleAccessList(access: any): void {
    const accessSub = this.sourceService
      .addInstrumentAccess(this.instrument.id, access.access.id)
      .subscribe({
        next: () => {
          this.checkAccessCurrentUser(access.access.id);

          this.instrument.access.push(access.access);
          this.sourceService
            .getInstrumentAccessList(this.instrument.id)
            .subscribe({
              next: (res) => {
                this.instrument.access = res["users"];

                this.onUpdateData(this.instrument.access);
              },

              // this.getAccessList();
            });
        },
        error: (err) => console.error(err),
      });

    this.subscriptions.add(accessSub);
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

  onUpdateData(data: any): void {
    this.instrument.access = data || [];
    this.action = "edit";

    // send
    this.cd.markForCheck();
  }
}
