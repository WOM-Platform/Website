import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {SearchSourceComponent} from "./search-source/search-source.component";
import {UserService} from "../../../_services";
import {animate, style, transition, trigger} from "@angular/animations";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-user-access-list',
    templateUrl: './user-access-list.component.html',
    styleUrl: './user-access-list.component.css',
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
export class UserAccessListComponent implements OnDestroy {
    @Input() isRoleRequired: boolean = false;
    @Output() accessToAdd = new EventEmitter<any>()
    @ViewChild(SearchSourceComponent) searchSourceComponent: SearchSourceComponent;

    listAccess = []
    addAccess: boolean = false

    noResults: boolean = false;

    subscriptions: Subscription = new Subscription()

    isLoading = false;
    errorMessage: string = '';

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
        this.clearList();
        this.searchSourceComponent.clearForm()
    }

    onSearch(userToSearch: any) {
        if ((userToSearch.name && userToSearch.name.length < 3) && (userToSearch.email && userToSearch.email.length < 3)) {
            this.listAccess = []
            this.cd.markForCheck()
        } else {
            this.subscriptions = this.userService.userSearch(userToSearch.name, userToSearch.email).subscribe(res => {
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
    }

    onCreateAccess(userToAdd: any) {
        if (userToAdd.name && userToAdd.surname && userToAdd.email && userToAdd.password) {
            this.isLoading = true
            this.userService.userCreate(userToAdd.name, userToAdd.surname, userToAdd.email, userToAdd.password).subscribe({
                next: (user) => {
                    this.handleSelection(user);
                    this.isLoading = false
                    this.cd.markForCheck();
                },
                error: (err) => {
                    this.errorMessage = 'Failed to create instrument.';
                    this.isLoading = false;
                    this.cd.markForCheck();
                }
            });
        }
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

    clearList() {
        this.listAccess = []

    }

    trackByAccess(index, access) {
        return access.id; // Assuming each access has a unique ID
    }

}
