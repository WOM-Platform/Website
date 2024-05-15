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

  onDeleteAim(aim: Aim) {
    console.log("delete no active");
  }

  onDeleteAccess(access: Access): void {
    this.deleteAccess.emit(access);
  }

  handleAccessList(access: Access): void {
    console.log("access ", access);
    this.newAccess.emit(access);
  }
}
