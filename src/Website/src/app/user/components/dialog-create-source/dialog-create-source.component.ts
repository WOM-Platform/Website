import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-create-source',
    templateUrl: './dialog-create-source.component.html',
    styleUrl: './dialog-create-source.component.css'
})
export class DialogCreateSourceComponent implements OnInit {
    newSource: FormGroup;
    showAddAccessButton = false

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<DialogCreateSourceComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

    ngOnInit(): void {
        this.newSource = this.fb.group({
            name: ['', Validators.required],
            url: ['', [Validators.required, Validators.pattern('^(https?|ftp)://[a-zA-Z0-9-.]+.[a-zA-Z]{2,}(?:/[^/|?|\'|&]*)?$')]],
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

    handleAccessList() {

    }
}
