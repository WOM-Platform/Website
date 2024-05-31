import {
    trigger,
    state,
    style,
    transition,
    animate,
} from "@angular/animations";
import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {Aim} from "src/app/_models";
import {Instrument, UIInstrument} from "src/app/_models/instrument";
import {AimsService, UserService} from "src/app/_services";
import {SourceService} from "src/app/_services/source.service";
import {StorageService} from "src/app/_services/storage.service";

@Component({
    selector: "app-my-instruments-collection",
    templateUrl: "./my-instruments-collection.component.html",
    styleUrl: "./my-instruments-collection.component.css",
    animations: [
        trigger("slideToggle", [
            state(
                "open",
                style({
                    height: "*",
                    opacity: 1,
                    overflow: "hidden",
                })
            ),
            state(
                "closed",
                style({
                    height: "0px",
                    opacity: 0,
                    overflow: "hidden",
                })
            ),
            transition("open <=> closed", [animate("300ms ease-in-out")]),
        ]),
    ],
})
export class MyInstrumentsCollectionComponent implements OnInit {
    username: string;
    instruments: UIInstrument[];
    currentUser: any;

    constructor(
        private aimsService: AimsService,
        private cd: ChangeDetectorRef,
        private userService: UserService,
        private sourceService: SourceService,
        private storageService: StorageService
    ) {
    }

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
                this.aimsService.getAll().subscribe((aimsList) => {
                    const matchingAims = this.aimsService.findMatchingCodes(aimsList, aimsLetter);
                    instrument["aims"] = matchingAims;
                });
            }
        });
    }

    loadData(): any {
        this.instruments = this.storageService
            .load("instrumentData")
            .map((instrument: Instrument, index: number) => ({
                ...instrument,
                isOpen: index === 0,
            }));
        this.currentUser = this.storageService.load("currentUser");
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
        const {key, value, isTableToUpdate} = data;
        const updatedInstrument = {...instrument};

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
