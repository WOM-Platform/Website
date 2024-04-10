import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {SearchSourceComponent} from "../search-source/search-source.component";

@Component({
    selector: 'app-data-access',
    templateUrl: './data-access.component.html',
    styleUrl: './data-access.component.css'
})
export class DataAccessComponent {
    addAccess: boolean = false
    @ViewChild(SearchSourceComponent) searchSourceComponent: SearchSourceComponent;
    @Output() selectedAccess = new EventEmitter<any>()

    listAccess = [
        {
            'name': 'uno',
            'id': ''
        },
        {
            'name': 'due',
            'id': ''
        },
        {
            'name': 'tre',
            'id': ''
        }
    ]

    onAddAccess() {
        console.log("On add access")
        this.addAccess = true
    }

    handleCancellationAccess() {
        this.addAccess = !this.addAccess
        this.searchSourceComponent.clearForm()
    }

    onSearch(userToSearch: any) {

    }

    handleSelection(access) {
        this.selectedAccess.emit(access)
    }
}
