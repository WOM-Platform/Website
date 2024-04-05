import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm";
import {DialogConfirmCancelComponent} from "../dialog-confirm-cancel/dialog-confirm-cancel";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
    @Input() usersList: any[]
    @Input() usersTableColumns: string[]
    @Output() deleteSource: EventEmitter<any> = new EventEmitter<any>();

    constructor(private deleteDialog: MatDialog) {
    }

    ngOnInit() {
        console.log("user list component ")
        console.log(this.usersTableColumns)
    }

    editSource() {
        console.log("Edit source")
    }

    onDeleteSource(user: any) {
        const dialogRef = this.deleteDialog.open(DialogConfirmCancelComponent, {
            width: '250px',
            data: {
                title: 'Conferma eliminazione',
                message: 'Sei sicuro di voler confermare l\'eliminazione?',
                confirm: "si",
                cancel: "Annulla"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {

                this.deleteSource.emit(user); // Emit the deleteSource event
            }
        });
    }
}
