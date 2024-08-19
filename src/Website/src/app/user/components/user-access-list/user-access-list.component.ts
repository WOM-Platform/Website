import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    ViewChild,
} from "@angular/core";
import {SearchSourceComponent} from "./search-source/search-source.component";
import {UserService} from "../../../_services";
import {animate, style, transition, trigger} from "@angular/animations";
import {Subscription} from "rxjs";
import {NgFor, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@Component({
    selector: "app-user-access-list",
    templateUrl: "./user-access-list.component.html",
    standalone: true,
    imports: [NgIf, NgFor, FormsModule, MatIcon, SearchSourceComponent],
    styleUrl: "./user-access-list.component.css",
    animations: [
        trigger("fadeInOut", [
            transition(":enter", [
                // :enter is alias to 'void => *'
                style({opacity: 0}),
                animate("0.2s ease-out", style({opacity: 1})),
            ]),
            transition(":leave", [
                // :leave is alias to '* => void'
                animate("0.2s ease-in", style({opacity: 0})),
            ]),
        ]),
    ],
})
export class UserAccessListComponent implements OnDestroy {
    @Input() isRoleAccessRequired: boolean = false;
    @Output() accessToAdd = new EventEmitter<any>();
    @ViewChild(SearchSourceComponent)
    searchSourceComponent: SearchSourceComponent;

    listAccess = [];
    addAccess: boolean = false;

    noResults: boolean = false;

    subscriptions: Subscription = new Subscription();

    isLoading = false;
    errorMessage: string = "";

    userRole = "User";

    selectedAccess: any | null = null;

    // Indicates whether the user selection UI should be shown.
    // This should only be set to true when searching for an already existing user.
    createUserAccess = false;

    constructor(
        private userService: UserService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onAddAccess() {
        this.addAccess = true;
    }

    handleCancellationAccess() {
        this.noResults = false;
        this.addAccess = !this.addAccess;
        this.clearList();
        this.searchSourceComponent.clearForm();
    }

    onSearch(userToSearch: any) {
        if (
            userToSearch.name &&
            userToSearch.name.length < 3 &&
            userToSearch.email &&
            userToSearch.email.length < 3
        ) {
            this.listAccess = [];
            this.cd.detectChanges();
        } else {
            this.subscriptions = this.userService
                .userSearch(userToSearch.name, userToSearch.email)
                .subscribe((res) => {
                    this.listAccess = [];
                    if (res.data && res.data.length > 0) {
                        this.noResults = false;
                        this.listAccess = res.data;
                    } else {
                        this.noResults = true;
                    }
                    this.cd.detectChanges();
                });
        }
    }

    onCreateAccess(user: any) {
        this.handleSelection(user);
        this.isLoading = false;
        this.cd.markForCheck();
    }

    handleSelection(access) {
        if (this.searchSourceComponent) {
            this.searchSourceComponent.clearForm();
            this.listAccess = [];
        } else {
            console.error("SearchSourceComponent is not yet available.");
        }
        if (!this.isRoleAccessRequired) {
            this.addUserToAccessList(access);
        } else {
            this.selectedAccess = access;
        }
        this.cd.detectChanges()
    }

    addUserToAccessList(access, role = "") {
        this.addAccess = !this.addAccess;
        this.selectedAccess = "";
        this.accessToAdd.emit({access: access, role: role});
    }

    clearList() {
        this.listAccess = [];
        this.createUserAccess = !this.createUserAccess
    }

    trackByAccess(index, access) {
        return access.id; // Assuming each access has a unique ID
    }
}
