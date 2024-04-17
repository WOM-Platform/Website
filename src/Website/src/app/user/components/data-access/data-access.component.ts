import {ChangeDetectorRef, Component, EventEmitter, OnDestroy, Output, ViewChild} from '@angular/core';
import {SearchSourceComponent} from "./search-source/search-source.component";
import {UserService} from "../../../_services";
import {animate, style, transition, trigger} from "@angular/animations";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-data-access',
    templateUrl: './data-access.component.html',
    styleUrl: './data-access.component.css',
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({opacity: 0}),
                animate('0.2s ease-out', style({opacity: 1})),
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate('0.2s ease-in', style({opacity: 0}))
            ])
        ])
    ]
})
export class DataAccessComponent implements OnDestroy{
    @Output() accessToAdd = new EventEmitter<any>()
    @ViewChild(SearchSourceComponent) searchSourceComponent: SearchSourceComponent;

    listAccess = []
    addAccess: boolean = false

    noResults: boolean = false;

    subscriptions : Subscription = new Subscription()
    constructor(private userService: UserService, private cd: ChangeDetectorRef) {
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe()
    }

    onAddAccess() {
        this.addAccess = true
    }

    handleCancellationAccess() {
        this.addAccess = !this.addAccess
        this.searchSourceComponent.clearForm()
    }

    onSearch(userToSearch: any) {
        if (userToSearch.firstName.length < 3 && userToSearch.email.length < 3 && userToSearch.lastName.length < 3) {
            this.listAccess = []
        } else {
           this.subscriptions = this.userService.userSearch(userToSearch.firstName, userToSearch.email).subscribe(res => {
                this.listAccess = [];
                if (res.data && res.data.length > 0) {
                    this.noResults = false;
                    this.listAccess = res.data;
                } else {
                    this.noResults = true;
                }
                this.cd.markForCheck();
            })

        }
        console.log("No results ", this.noResults)
        this.cd.markForCheck()
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
