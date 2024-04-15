import {ChangeDetectorRef, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {SearchSourceComponent} from "./search-source/search-source.component";
import {UserService} from "../../../_services";

@Component({
    selector: 'app-data-access',
    templateUrl: './data-access.component.html',
    styleUrl: './data-access.component.css'
})
export class DataAccessComponent {
    @Output() accessToAdd = new EventEmitter<any>()
    @ViewChild(SearchSourceComponent) searchSourceComponent: SearchSourceComponent;

    listAccess = []
    addAccess: boolean = false

    constructor(private userService: UserService, private cd: ChangeDetectorRef) {
    }

    onAddAccess() {
        this.addAccess = true
    }

    handleCancellationAccess() {
        this.addAccess = !this.addAccess
        this.searchSourceComponent.clearForm()
    }

    onSearch(userToSearch: any) {
        this.userService.userSearch(userToSearch.firstName, userToSearch.email).subscribe(res => {
            this.listAccess = []
            console.log("La lista ", this.listAccess)
            if (res.data && res.data.length > 0) {

                res.data.map(data => {
                    this.listAccess.push(data)
                })
            }
            this.cd.markForCheck()

        })
    }

    handleSelection(access) {
        this.accessToAdd.emit(access)
        this.addAccess = !this.addAccess
        if (this.searchSourceComponent) {
            this.searchSourceComponent.clearForm();
            this.listAccess = []
        } else {
            console.error('SearchSourceComponent is not yet available.');
        }
    }

    trackByAccess(index, access) {
        return access.id; // Assuming each access has a unique ID
    }

}
