import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
    @Input() usersList: any[]
    @Input() usersTableColumns: string[]

    ngOnInit() {
        console.log("user list component ")
        console.log(this.usersTableColumns)
    }

    editSource() {
        console.log("Edit source")
    }
}
