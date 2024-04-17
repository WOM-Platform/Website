import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogConfirmComponent} from "../../../components/dialog-confirm/dialog-confirm";
import {DialogConfirmCancelComponent} from "../../../components/dialog-confirm-cancel/dialog-confirm-cancel";
import {DialogViewUserComponent} from "../dialog-view-user/dialog-view-user.component";
import {SourceService} from "../../../_services/source.service";


@Component({
    selector: 'app-sources-list',
    templateUrl: './sources-list.component.html',
    styleUrl: './sources-list.component.css'
})
export class SourcesListComponent implements OnInit {
    @Input() usersList: any[]
    @Input() usersTableColumns: any[]

    @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
    @Output() viewUser = new EventEmitter<any>();
    @Output() editUser = new EventEmitter<any>();

    tests = [{'name':"uno"}, {'name':"due"}]
    displayedColumns: string[] = []
    constructor(private matDialog: MatDialog, private sourceService: SourceService) {
    }

    ngOnInit() {
    this.setupColumns()
    }

    setupColumns() {
        this.displayedColumns = this.usersTableColumns.map(c => c['field']).concat('extraColumn')
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

    protected readonly console = console;
}
