import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmComponent} from "../../../components/dialog-confirm/dialog-confirm";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {DialogViewUserComponent} from "../dialog-view-user/dialog-view-user.component";
import {SourceService} from "../../../_services/source.service";

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
    @Input() usersList: any[]
    @Input() usersTableColumns: string[]

    @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
    @Output() viewUser = new EventEmitter<any>();
    @Output() editUser = new EventEmitter<any>();

    constructor(private matDialog: MatDialog, private sourceService: SourceService) {
    }

    ngOnInit() {
        console.log(this.usersTableColumns)
    }

    onViewUser(user: any) {
        this.viewUser.emit(user)
    }

    onEditUser(user: any) {
        this.editUser.emit(user);
    }

    onDeleteUser(user: any) {
        const dialogRef = this.matDialog.open(DialogConfirmCancelComponent, {
            width: '500px',
            data: {
                title: 'Conferma eliminazione',
                message: 'Sei sicuro di voler confermare l\'eliminazione?',
                confirm: "si",
                cancel: "Annulla"
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deleteUser.emit(user); // Emit the deleteSource event
            }
        });
    }
}
