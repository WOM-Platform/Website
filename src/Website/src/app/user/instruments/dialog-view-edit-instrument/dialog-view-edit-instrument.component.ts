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
import { AimsService } from "src/app/_services";
import { SourceService } from "src/app/_services/source.service";
import { DialogConfirmCancelComponent } from "src/app/components/dialog-confirm-cancel/dialog-confirm-cancel";

@Component({
  selector: "app-dialog-view-instrument",
  templateUrl: "./dialog-view-edit-instrument.component.html",
  styleUrls: ["./dialog-view-edit-instrument.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewEditInstrumentComponent implements OnInit, OnDestroy {
  @Output() deleteAccess = new EventEmitter<any>();
  @Output() newAccess = new EventEmitter<any>();

  instrument: Instrument;
  accessUsers: Access[];

  action: string;
  createNewAccess = false;

  subscriptions: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cd: ChangeDetectorRef,
    private matDialog: MatDialog,
    private sourceService: SourceService
  ) {
    this.instrument = data;
    this.action = data.action;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onUpdateSourceField(key: string, value: any) {
    const updatedInstrument = { ...this.instrument };

    updatedInstrument[key] = value;

    this.sourceService
      .update(updatedInstrument)
      .subscribe((res) => console.log(res));
  }

  onDeleteAim(aimToRemove: Aim) {
    // Find the index of the aim to be removed
    const index = this.instrument.aims.findIndex(
      (aim) => aim.code === aimToRemove.code
    );

    if (index > -1) {
      // Create a deep copy of the instrument to avoid mutating the original directly
      const tmpInstrument: Instrument = JSON.parse(
        JSON.stringify(this.instrument)
      );
      tmpInstrument.aims.splice(index, 1);

      // Update the instrument
      this.sourceService.update(tmpInstrument).subscribe({
        next: (value) => {
          // Update the local instrument only after the API call succeeds
          this.instrument = tmpInstrument;
        },
        error: (error) => {
          console.error("API call failed:", error);
        },
      });
    } else {
      console.warn("Aim not found in the instrument.");
    }
  }

  // Update the instrument aims
  onUpdateAim(aimsList) {
    const tmpInstrument: Instrument = JSON.parse(
      JSON.stringify(this.instrument)
    );
    tmpInstrument.aims = aimsList;
    this.sourceService.update(tmpInstrument).subscribe({
      next: (value) => {
        this.instrument = aimsList;
      },
      error: (error) => {
        console.error("API call failed:", error);
      },
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
          // this.instrument.access.push(access.access);
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

  onUpdateData(data: any): void {
    this.instrument.access = data || [];
    this.action = "edit";
    this.cd.markForCheck();
  }

  handleAimsList(aim) {
    console.log("jjj ", aim);
  }
}
