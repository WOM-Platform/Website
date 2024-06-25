import {
    ChangeDetectorRef,
    Component,
    Inject,
    OnDestroy,
    OnInit,
    ViewChild,
    AfterViewInit
} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormArray} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription, Observable, of} from "rxjs";
import {Aim, AimEditing} from "../../../_models";
import {AimsService} from "../../../_services";
import {switchMap} from "rxjs/operators";

@Component({
    selector: "app-dialog-create-instrument",
    templateUrl: "./dialog-create-instrument.component.html",
    styleUrls: ["./dialog-create-instrument.component.css"],
})
export class DialogCreateSourceComponent implements OnInit, OnDestroy, AfterViewInit {
    newSource: FormGroup;
    showAddAccessButton = false;
    isLoading = false;
    aimList: Aim[] = [];
    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(
        private aimsService: AimsService,
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogCreateSourceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    }

    ngOnInit(): void {
        this.newSource = this.fb.group({
            name: ["", [Validators.required, Validators.minLength(4)]],
            url: [
                "",
                [
                    Validators.required,
                    Validators.pattern(
                        "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$"
                    ),
                    Validators.minLength(10),
                ],
            ],
            aims: this.fb.group({
                enabled: this.fb.array([this.fb.control('')]),
                enableAll: [false],
            }),
            access: [[]],
        });

        this.subscriptions.add(
            this.newSource.valueChanges.subscribe(() => {
                this.showAddAccessButton = this.newSource.valid;
            })
        );
    }

    // to ensure that form controls are initialized
    ngAfterViewInit() {
        setTimeout(() => this.updateAimsArray([]), 0);
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onSubmit() {
        if (this.newSource.valid) {
            const formData = this.newSource.value;
            this.dialogRef.close(formData);
        }
    }

    fetchAimsForInstrument(aimsEditing: AimEditing): Observable<Aim[]> {
        return this.aimsService.getAll().pipe(
            switchMap((aimList) => {
                const aimsView = this.aimsService.findMatchingCodes(aimList, aimsEditing.enabled);
                return of(aimsView);
            })
        );
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    async onUpdateSourceField(key: string, value: any, isTableToUpdate: boolean) {
        console.log("Il valore inviato è ", value);
        if (key === 'aims') {
            this.updateAimsArray(value.enabled);
            this.newSource.get("aims").get("enableAll").setValue(value.enableAll);
        } else {
            this.newSource.get(key).setValue(value);
        }
    }

    async updateAimsArray(enabledAims: any[]) {
        const aimsArray = this.newSource.get('aims').get('enabled') as FormArray;
        while (aimsArray.length) {
            aimsArray.removeAt(0);
        }
        enabledAims.forEach(aim => aimsArray.push(this.fb.control(aim)));

        try {
            const aimsView = await this.fetchAimsForInstrument({enabled: enabledAims, enableAll: false}).toPromise();
            this.aimList = aimsView;
            this.cd.detectChanges();
        } catch (err) {
            console.error(err);
        }
    }

    handleAccessList(accessEl) {
        const currentAccess = this.newSource.get("access").value;
        this.newSource.get("access").setValue([...currentAccess, accessEl.access]);
    }
}
