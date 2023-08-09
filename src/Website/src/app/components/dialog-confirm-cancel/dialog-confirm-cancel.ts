import {Component, Inject} from "@angular/core";
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from "@angular/material/legacy-dialog";

export interface DialogData {
    title: string;
    message: string;
    confirm: string;
    cancel: string;
}

@Component({
    selector: 'app-dialog-confirm-cancel',
    templateUrl: 'dialog-confirm-cancel.html',
})
export class DialogConfirmCancelComponent {
    title: string;
    message: string;
    confirm: string;
    cancel: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.title = data.title;
        this.message = data.message;
        this.confirm = data.confirm;
        this.cancel = data.cancel;
    }
}
