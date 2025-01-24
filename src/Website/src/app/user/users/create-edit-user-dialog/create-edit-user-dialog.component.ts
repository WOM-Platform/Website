import {Component, Inject, OnInit} from '@angular/core';
import {UserFormComponent} from "../../components/user-form/user-form.component";
import {User} from "../../../_models";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-create-user-dialog',
    imports: [
        NgIf,
        UserFormComponent,
    ],
    templateUrl: './create-edit-user-dialog.component.html',
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
