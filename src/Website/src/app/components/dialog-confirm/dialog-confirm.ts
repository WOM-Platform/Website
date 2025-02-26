import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


export interface DialogData {
    title: string;
    message: string;
    confirm: string;
}

@Component({
    selector: 'app-dialog-confirm',
    templateUrl: 'dialog-confirm.html',
    standalone: false
})
export class DialogConfirmComponent {
    title: string;
    message: string;
    confirm: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.title = data.title;
        this.message = data.message;
        this.confirm = data.confirm;
    }
}
