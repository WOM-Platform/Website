import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdminTableComponent} from "../components/admin-table/admin-table.component";
import {AimsService} from "../../_services";
import {Aim, Titles} from "../../_models";
import {NgIf} from "@angular/common";
import {LoadingService} from "../../_services/loading.service";
import {StorageService} from "../../_services/storage.service";

@Component({
    selector: 'app-aims-tab',
    templateUrl: './user-aims.component.html',
    styleUrl: './user-aims.component.css'
})
export class UserAimsComponent implements OnInit {
    aimsTableColumns: any[] = [
        {field: 'code', hideOnMobile: false},
        {field: 'it', hideOnMobile: false},
        {field: 'en', hideOnMobile: false},
        {field: 'hidden', hideOnMobile: false},
    ]

    aimsData: any[]

    constructor(private aimsService: AimsService, private loadingService: LoadingService, private storageService: StorageService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.loadingService.show()

        const cachedAims = this.storageService.get('aimsList')
        if (cachedAims) {
            this.aimsData = cachedAims
            this.loadingService.hide()
        } else {
            this.aimsService.getAll().subscribe({
                next: res => {
                    this.aimsData = res.map((aim: Aim) => {
                        let transformedAim = {
                            code: aim.code,
                            it: aim.titles.it,
                            en: aim.titles.en,
                            hidden: aim.hidden
                        };
                        return transformedAim;
                    })
                    this.storageService.set('aimsList', this.aimsData)
                    this.loadingService.hide()
                    this.cdr.detectChanges();
                },
                error: (err) => console.error(err)
            });
        }
    }
}

