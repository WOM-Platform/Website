import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgFor, NgIf} from "@angular/common";
import {Access} from "src/app/_models/instrument";
import {AuthModule} from "../../auth.module";
import {UserAccessListComponent} from "../user-access-list/user-access-list.component";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: "app-access-list",
    imports: [NgIf, NgFor, UserAccessListComponent, MatIcon],
    templateUrl: "./access-list.component.html",
    styleUrls: ["./access-list.component.css"]
})
export class AccessListComponent {
    @Input() accessList: Access[];
    @Input() action: string;
    @Input() showRole: boolean = false;
    @Output() deleteAccess = new EventEmitter<Access>();
    @Output() addAccess = new EventEmitter<Access>()

    createNewAccess = false;


    onDelete(access: Access) {
        this.deleteAccess.emit(access);
    }

    handleAccessList(user) {
        this.addAccess.emit(user)
    }
}
