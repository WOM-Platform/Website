import {Component, Inject} from '@angular/core';
import { PosRegistration} from '../../_models';
import {first} from 'rxjs/operators';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PosService} from '../../_services/pos.service';

@Component({
    selector: 'app-pos-dialog',
    templateUrl: 'add-pos.component.html',
    styleUrls: ['add-pos.component.css']
})
export class AddPosDialogComponent {
    formPos: FormGroup;
    formInputError: boolean;
    formApiError: boolean;

    constructor(@Inject(MAT_DIALOG_DATA) public data: string,
                public dialogRef: MatDialogRef<AddPosDialogComponent>,
                private posService: PosService) {}

    onSubmit(): any {
        this.formInputError = this.formPos === undefined;
        if (this.formPos.controls.latitude.value === 0) {
            this.formInputError = true;
            return;
        }

        const pos: PosRegistration = new PosRegistration();
        pos.longitude = this.formPos.controls.longitude.value;
        pos.latitude = this.formPos.controls.latitude.value;
        pos.name = this.formPos.controls.name.value;
        pos.ownerMerchantId = this.data;

        // Optional values
        if (this.formPos.controls.url.value !== '') {
            pos.url = this.formPos.controls.url.value;
        }

        this.posService.register(pos).pipe(first()).subscribe(
            result => {
                console.log(result);
                this.dialogRef.close(true);
            }, error => {
                this.formApiError = true;
                console.log(error);
            });
    }
}
