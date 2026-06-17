import {Component, Inject, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UserFormComponent} from "../../components/user-form/user-form.component";
import {User} from "../../../_models";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
    selector: 'app-create-user-dialog',
    imports: [
    UserFormComponent
],
    templateUrl: './create-edit-user-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './create-edit-user-dialog.component.css'
})
export class CreateEditUserDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
                private dialogRef: MatDialogRef<CreateEditUserDialogComponent>) {
    }

    ngOnInit() {

    }

    onCreatedUser(user: User) {
        if (user) {
            this.dialogRef.close(user)
        } else {

        }
    }

    onEditUser(user: Partial<User>) {
        this.dialogRef.close(user)
    }
}
