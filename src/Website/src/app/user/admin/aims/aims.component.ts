import {Component, OnInit} from '@angular/core';
import {AdminTableComponent} from "../../components/admin-table/admin-table.component";
import {AimsService} from "../../../_services";
import {Aim, Titles} from "../../../_models";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-aims',
    templateUrl: './aims.component.html',
    styleUrl: './aims.component.css'
})
export class AimsComponent implements OnInit {
    aimsTableColumns: any[] = [
        {field: 'code', hideOnMobile: false},
        {field: 'it', hideOnMobile: false},
        {field: 'en', hideOnMobile: false},
        {field: 'hidden', hideOnMobile: false},
    ]

    aimsData: any[]

    constructor(private aimsService: AimsService) {
    }

    ngOnInit() {
        this.aimsService.getAll().subscribe(res => {
            this.aimsData = res.map((aim: Aim) => {
                let transformedAim = {
                    code: aim.code,
                    it: aim.titles.it,
                    en: aim.titles.en,
                    hidden: aim.hidden
                };
                return transformedAim;
            });
        });
    }
}

