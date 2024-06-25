import {
    trigger,
    state,
    style,
    transition,
    animate,
} from "@angular/animations";
import {ChangeDetectorRef, Component, OnInit, OnDestroy} from "@angular/core";
import {Aim} from "src/app/_models";
import {InstrumentEditing, UIInstrument} from "src/app/_models/instrument";
import {AimsService, UserService} from "src/app/_services";
import {SourceService} from "src/app/_services/source.service";
import {StorageService} from "src/app/_services/storage.service";
import {Subscription} from "rxjs";

@Component({
    selector: "app-my-instruments-collection",
    templateUrl: "./my-instruments-collection.component.html",
    styleUrls: ["./my-instruments-collection.component.css"],
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
        trigger("rotateArrow", [
            state("open", style({transform: 'rotate(180deg)'})),
            state("close", style({transform: 'rotate(0deg)'})
            ),
            transition('open <=> closed', [animate("300ms ease-in-out")])
        ])
    ],
})
export class MyInstrumentsCollectionComponent implements OnInit, OnDestroy {
    username: string;
    editingInstruments: InstrumentEditing[] = [];
    uiInstruments: UIInstrument[] = [];
    currentUser: any;

    private subscriptions: Subscription[] = [];

    constructor(
        private aimsService: AimsService,
        private cd: ChangeDetectorRef,
        private userService: UserService,
        private sourceService: SourceService,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.username = `${this.userService.currentUserValue.name} ${this.userService.currentUserValue.surname}`;
        this.loadUserData();
        this.cd.detectChanges();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    fetchAimsForInstrument(instrument: InstrumentEditing) {
        const {id} = instrument;
        this.subscriptions.push(
            this.aimsService.getAll().subscribe({
                next: (aimList: Aim[]) => {
                    const matchingAims = this.aimsService.findMatchingCodes(aimList, instrument.aims.enabled);
                    const instrumentUI = this.uiInstruments.find(uiInstrument => uiInstrument.id === id);
                    if (instrumentUI) {
                        instrumentUI.aims = matchingAims;
                        this.cd.detectChanges();
                    }
                },
                error: (err) => console.error(err),
            })
        );
    }

    loadUserData() {
        this.subscriptions.push(
            this.userService.userOwnershipStatus.subscribe({
                next: (res) => {
                    if (res && res["sources"]) {
                        this.editingInstruments = res["sources"];
                        this.editingInstruments.forEach((instrument) => {
                            this.fetchAimsForInstrument(instrument);
                            this.fetchAccessListForInstrument(instrument);
                        });
                    }
                },
                error: (err) => console.error(err),
            })
        );

        this.uiInstruments = this.storageService.load("instrumentData").map((instrument: InstrumentEditing, index: number) => {
            this.fetchAimsForInstrument(instrument);
            this.fetchAccessListForInstrument(instrument);
            return {
                ...instrument,
                isOpen: index === 0,
            };
        });
        this.currentUser = this.storageService.load("currentUser");
    }

    fetchAccessListForInstrument(instrument: InstrumentEditing) {
        this.subscriptions.push(
            this.sourceService.getInstrumentAccessList(instrument.id).subscribe({
                next: (res) => {
                    const accessList = res['users'] || [];
                    const instrumentUI = this.uiInstruments.find(uiInstrument => uiInstrument.id === instrument.id);
                    if (instrumentUI) {
                        instrumentUI.access = accessList;
                        this.cd.detectChanges();
                    }
                },
                error: (err) => console.error(err),
            })
        );
    }

    updateInstrumentField(
        instrument: InstrumentEditing,
        data: { key: string; value: any; isTableToUpdate: boolean }
    ) {
        const {key, value} = data;
        const updatedInstrument = {...instrument, [key]: value};

        this.sourceService.update(updatedInstrument).subscribe({
            next: () => {
                instrument[key] = value;
                this.cd.detectChanges();
            },
            error: (err) => console.error(err),
        });
    }

    findEditingInstrumentById(instrumentId: string) {
        return this.editingInstruments.find(instrument => instrument.id === instrumentId);
    }
}
