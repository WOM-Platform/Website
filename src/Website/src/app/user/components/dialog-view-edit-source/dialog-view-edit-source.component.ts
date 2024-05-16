import {
  Component,
  EventEmitter,
  Inject,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Aim } from "src/app/_models/aim";
import { Access, Instrument } from "src/app/_models/instrument";
import { AimsService } from "src/app/_services";
import { SourceService } from "src/app/_services/source.service";

@Component({
  selector: "app-dialog-view-user",
  templateUrl: "./dialog-view-edit-source.component.html",
  styleUrls: ["./dialog-view-edit-source.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogViewEditSourceComponent {
  @Output() deleteAccess = new EventEmitter<any>();
  @Output() newAccess = new EventEmitter<any>();

  instrument: Instrument;
  accessUsers: Access[];

  action: string;
  createNewAccess = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cd: ChangeDetectorRef,
    private sourceService: SourceService
  ) {
    this.instrument = data;
    this.action = data.action;
  }

  onUpdateData(data: any): void {
    this.instrument.access = data || [];
    this.action = "edit";
    this.cd.markForCheck();
  }

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
          console.log("API call succeeded, instrument updated:", value);
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
    console.log("aims list ", aimsList);
    const tmpInstrument: Instrument = JSON.parse(
      JSON.stringify(this.instrument)
    );
    tmpInstrument.aims = aimsList;

    console.log("tmp ", tmpInstrument);
    this.sourceService.update(tmpInstrument).subscribe({
      next: (value) => {
        this.instrument = aimsList;
        console.log("API call succeeded, instrument updated:", value);
      },
      error: (error) => {
        console.error("API call failed:", error);
      },
    });
  }

  onDeleteAccess(access: Access): void {
    this.deleteAccess.emit(access);
  }

  handleAccessList(access: Access): void {
    this.newAccess.emit(access);
  }

  handleAimsList(aim) {
    console.log("jjj ", aim);
  }
}
