import {
    AfterViewInit,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../_services";
import {StorageService} from "../../_services/storage.service";
import {Instrument} from "src/app/_models/instrument";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
    selector: "app-user-instrument",
    templateUrl: "./user-instruments.component.html",
    styleUrls: ["./user-instruments.component.css"],
})
export class UserInstrumentsComponent
    implements OnInit, AfterViewInit, OnDestroy {
    username: string;
    instruments: Instrument[];
    currentUser: any;

    @ViewChild("tabGroup") tabGroup!: MatTabGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private storageService: StorageService
    ) {
    }

    ngOnInit() {
        this.userService.userOwnershipStatus.subscribe({
            next: (res) => {
                this.instruments = res["sources"];
            },
        });

        this.username =
            this.userService.currentUserValue.name +
            " " +
            this.userService.currentUserValue.surname;
        this.loadData();
    }

    ngAfterViewInit(): void {
        this.route.queryParams.subscribe((params) => {
            const selectedTabIndex = params["selectedTabIndex"];
            if (selectedTabIndex !== undefined) {
                this.navigateToTab(selectedTabIndex);
            }
        });
    }

    ngOnDestroy(): void {
    }

    loadData(): any {
        this.instruments = this.storageService.load("instrumentData");
        this.currentUser = this.storageService.load("currentUser");
    }

    async navigateToSecondTab(): Promise<void> {
        this.navigateToTab(1);
    }

    private navigateToTab(index: number): void {
        if (this.tabGroup) {
            this.tabGroup.selectedIndex = index;
        }
    }
}
