import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Aim } from "src/app/_models";
import { Instrument } from "src/app/_models/instrument";
import { AimsService, UserService } from "src/app/_services";
import { SourceService } from "src/app/_services/source.service";
import { StorageService } from "src/app/_services/storage.service";

@Component({
  selector: "app-my-instruments-collection",
  templateUrl: "./my-instruments-collection.component.html",
  styleUrl: "./my-instruments-collection.component.css",
})
export class MyInstrumentsCollectionComponent implements OnInit {
  username: string;
  instruments: Instrument[];
  currentUser: any;

  constructor(
    private aimsService: AimsService,
    private cd: ChangeDetectorRef,
    private userService: UserService,
    private sourceService: SourceService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.userService.userOwnershipStatus.subscribe({
      next: (res) => {
        this.instruments = res["sources"];
      },
    });

    this.username =
      this.userService.currentUserValue.name +
      " " +
      this.userService.currentUserValue.surname;
    this.loadData();

    // save access list on the object
    this.getAccessList(this.instruments);

    this.instruments.map((instrument) => {
      const aimsLetter = instrument["aims"]["enabled"];
      if (aimsLetter) {
        this.aimsService.getAll().subscribe((re) => {
          const matchingAims = this.findMatchingCodes(re, aimsLetter);
          instrument["aims"] = matchingAims;
        });
      }
    });
  }

  loadData(): any {
    this.instruments = this.storageService.load("instrumentData");
    this.currentUser = this.storageService.load("currentUser");
  }

  findMatchingCodes(aims: Aim[], letters: string[]): Aim[] {
    return aims.filter((aim) => letters.includes(aim.code)).map((aim) => aim);
  }

  getAccessList(instruments: Instrument[]): void {
    instruments.map((instrument) => {
      this.sourceService.getInstrumentAccessList(instrument.id).subscribe({
        next: (res) => {
          const accessList = res["users"];
          instrument.access = accessList;
        },
        error: (err) => console.error(err),
      });
    });
  }

  // to update instrument field like name, url and aims
  onUpdateSourceField(
    instrument: Instrument,
    data: { key: string; value: any; isTableToUpdate: boolean }
  ) {
    const { key, value, isTableToUpdate } = data;
    const updatedInstrument = { ...instrument };

    updatedInstrument[key] = value;
    updatedInstrument.aims = [];
    this.sourceService.update(updatedInstrument).subscribe({
      next: () => {
        // if (isTableToUpdate) this.updatedField.emit(key);
        instrument = updatedInstrument;
        this.cd.detectChanges();
      },
      error: (err) => console.error(err),
    });
  }
}
