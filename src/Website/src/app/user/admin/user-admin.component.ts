import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SourceService} from "../../_services/source.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAdminComponent {
    @Input() user: any;
    isLoading = false
    merchantsTableColumns: string[] = ['name', 'email']
    activeTabIndex: number = 0;  // Default to the first tab

    constructor(private router: Router, private sourceService: SourceService, private matDialog: MatDialog, private cd: ChangeDetectorRef) {
    }

    onLoading(loading) {
        this.isLoading = loading
    }

    onTabChange(index: number): void {
        this.activeTabIndex = index;
    }

    openStats() {
        this.router.navigateByUrl("user/stats/admin")
    }
}
