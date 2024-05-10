import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output
} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Pos, primaryActivityType} from "../../../_models";

@Component({
    selector: 'app-dialog-view-edit-merchant',
    templateUrl: './dialog-view-edit-merchant.component.html',
    styleUrl: './dialog-view-edit-merchant.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogViewEditMerchantComponent {
    @Output() deleteAccess = new EventEmitter<any>();
    @Output() newAccess = new EventEmitter<any>();
    @Output() deletePos = new EventEmitter<any>();
    @Output() newPos = new EventEmitter<any>();

    id: string;
    name: string;
    fiscalCode: string;
    primaryActivity: string;
    posList: any[];
    accessList: any[]
    action: string;
    createNewAccess = false;

    businessList: string[] = primaryActivityType;

    isEditing = {
        fiscalCode: false,
        primaryActivity: false,
        address: false,
        zipCode: false,
        country: false,
    };

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private cd: ChangeDetectorRef) {
        this.accessList = data.access;
        this.id = data.id;
        this.name = data.name;
        this.fiscalCode = data.fiscalCode;
        this.primaryActivity = data.primaryActivity;
        this.posList = data.posList || [];
        this.action = data.action;
    }

    startEditing(field: string): void {
        this.isEditing[field] = true;
    }

    stopEditing(field: string): void {
        this.isEditing[field] = false;
    }

    onDeleteAccess(access: any): void {
        this.deleteAccess.emit(access)
    }

    handleAccessList(access): void {
        this.newAccess.emit(access)
    }

    onNewPos(pos: Pos) {
        this.newPos.emit(pos)
    }

    onDeletePos(posId: string) {
        this.deletePos.emit(posId)
    }

    onUpdateDataAccess(data: any): void {
        this.accessList = data || [];
        this.action = "edit"
        this.cd.markForCheck()
    }

    onUpdateDataPos(data: any): void {
        this.posList = data || [];
        this.action = "edit"
        this.cd.markForCheck()
    }

}
