import {Component, EventEmitter, Inject, Output, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
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

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cd: ChangeDetectorRef) {
        this.id = data.id;
        this.name = data.name;
        this.url = data.url;
        this.accessUsers = data.access || [];
        this.action = data.action;
    }

    onUpdateData(data: any): void {
        this.accessUsers = data || [];
        this.action = "edit"
        this.cd.markForCheck()
    }

    onDeleteAccess(access: any): void {
        this.deleteAccess.emit(access)
    }

    handleAccessList(access): void {
        this.newAccess.emit(access)
    }
}
