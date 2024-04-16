import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SourceService} from "../../../_services/source.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-dialog-create-source',
    templateUrl: './dialog-create-source.component.html',
    styleUrl: './dialog-create-source.component.css'
})
export class DialogCreateSourceComponent implements OnInit, OnDestroy {
    newSource: FormGroup;
    showAddAccessButton = false
    isLoading = false
    private subscriptions: Subscription = new Subscription(); // To manage subscriptions

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogCreateSourceComponent>,
        private sourceService: SourceService,
        private cd: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

    ngOnInit(): void {
        this.newSource = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            url: ['', [Validators.required, Validators.pattern('^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$'), Validators.minLength(10)]],
            access: [[]]
        })

        const changedValue = this.newSource.valueChanges.subscribe(() => {
            this.showAddAccessButton = this.newSource.valid;
        });
        this.subscriptions.add(changedValue)
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe()
    }

    onSubmit() {
        if (this.newSource.valid) {
            const formData = this.newSource.value;
            this.dialogRef.close(formData);
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    handleAccessList(accessEl) {
        const currentAccess = this.newSource.get('access').value;
        this.newSource.get('access').setValue([...currentAccess, accessEl]);
    }
}
