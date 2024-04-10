import {Component, EventEmitter, Inject, Output, ChangeDetectionStrategy} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-view-user',
    templateUrl: './dialog-view-user.component.html',
    styleUrls: ['./dialog-view-user.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogViewUserComponent {
    @Output() deleteAccess = new EventEmitter<any>();
    @Output() newAccess = new EventEmitter<any>();

    id: string;
    name: string;
    url: string;
    accessUsers: any[];
    action: string;
    createNewAccess = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.accessUsers = data.access || [];
        this.action = data.action;
    }

    onUpdateData(data: any): void {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.accessUsers = data.access || [];
        this.action = data.action;
    }

    onDeleteAccess(access: any): void {
        console.log("ACCESS ", access)
        this.deleteAccess.emit(access)
    }

    handleAccessList(access): void {
        console.log("EMit from dialog view")
        this.newAccess.emit(access)
    }
}
