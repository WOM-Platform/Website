import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-create-instrument-dialog',
    templateUrl: './create-instrument-dialog.component.html',
    styleUrl: './create-instrument-dialog.component.css'
})
export class CreateInstrumentDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<CreateInstrumentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
