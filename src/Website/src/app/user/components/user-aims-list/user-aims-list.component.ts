import {animate, style, transition, trigger} from "@angular/animations";
import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {Aim, AimEditing, AimWithChecked} from "src/app/_models";
import {AimsService} from "src/app/_services";

@Component({
    selector: "app-user-aims-list",
    templateUrl: "./user-aims-list.component.html",
    styleUrls: ["./user-aims-list.component.css"],
    animations: [
        trigger("fadeInOut", [
            transition(":enter", [
                style({opacity: 0}),
                animate("0.2s ease-out", style({opacity: 1})),
            ]),
            transition(":leave", [animate("0.2s ease-in", style({opacity: 0}))]),
        ]),
    ],
})
export class UserAimsListComponent implements OnInit, OnChanges {
    @Input() instrumentAims: AimEditing;
    @Output() aimsEmit = new EventEmitter<{ enabled: string[], enableAll: boolean }>();

    addAim: boolean = false;
    listAims: AimWithChecked[] = [];
    selectedAims: AimWithChecked[] = [];
    selectAll: boolean = false;

    constructor(private aimsService: AimsService) {
    }

    ngOnInit() {
        this.loadAims();
    }

    ngOnChanges() {
        this.loadAims();
    }

    loadAims() {
        this.aimsService.getAll().subscribe((aims: Aim[]) => {
            this.listAims = aims.map((aim) => ({
                ...aim,
                isChecked:
                    this.instrumentAims &&
                    this.instrumentAims.enabled.length > 0 &&
                    this.instrumentAims.enabled.some(
                        (instrumentAim: string) => instrumentAim === aim.code
                    ),
            }));
            this.updateSelectedAims();
            this.selectAll = this.listAims.every((aim) => aim.isChecked);
        });
    }

    onAddAim() {
        this.addAim = true;
    }

    handleCancellationAim() {
        this.addAim = false;
        this.clearList();
        this.loadAims();
    }

    toggleAll(event: any) {
        this.listAims.forEach((aim) => (aim.isChecked = event.target.checked));
        this.updateSelectedAims();
    }

    onAimChange() {
        this.selectAll = this.listAims.every((aim) => aim.isChecked);
        this.updateSelectedAims();
    }

    updateSelectedAims() {
        this.selectedAims = this.listAims.filter((aim) => aim.isChecked);
    }

    clearList() {
        this.listAims = [];
    }

    emitSelectedAims() {
        const cleanedSelectedAims = this.selectedAims.map(aim => aim.code);

        this.aimsEmit.emit({
            "enabled": cleanedSelectedAims,
            "enableAll": this.selectAll
        });
        this.handleCancellationAim();
        this.loadAims();
    }

    hasChanges() {
        const selectedCodes = this.selectedAims.map((aim) => aim.code).sort();
        const instrumentCodes =
            this.instrumentAims && this.instrumentAims.enabled.map((aim) => aim).sort();
        return JSON.stringify(selectedCodes) !== JSON.stringify(instrumentCodes);
    }
}
