import {ChangeDetectorRef, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SourceService} from "../../../_services/source.service";

@Component({
    selector: 'app-dialog-create-source',
    templateUrl: './dialog-create-source.component.html',
    styleUrl: './dialog-create-source.component.css'
})
export class DialogCreateSourceComponent implements OnInit {
    newSource: FormGroup;
    showAddAccessButton = false
    isLoading = false

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
            name: ['', Validators.required],
            url: ['', [Validators.required, Validators.pattern('^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]+)(:[0-9]{1,5})?(\\/[^\\s]*)?$')]],
            access: [[]]
        })

        this.newSource.valueChanges.subscribe(() => {
            this.showAddAccessButton = this.newSource.valid;
        });
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

    updateAccessList(userId: any) {
        this.isLoading = true;
        this.sourceService.getInstrumentAccessList(userId).subscribe(res => {

            this.isLoading = false;
            this.cd.markForCheck(); // Trigger change detection since we are using OnPush strategy
        });
    }
}
