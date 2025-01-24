import {
    ChangeDetectorRef,
    Component,
    OnInit,
} from "@angular/core";
import {AimsService} from "../../_services";
import {Aim} from "../../_models";


@Component({
    selector: "app-aims-tab",
    templateUrl: "./user-aims.component.html",
    styleUrl: "./user-aims.component.css",
    standalone: false
})
export class UserAimsComponent implements OnInit {
    aimsTableColumns: any[] = [
        {field: "code", hideOnMobile: false},
        {field: "it", hideOnMobile: false},
        {field: "en", hideOnMobile: false},
        {field: "hidden", hideOnMobile: false},
    ];

    aimsData: any[];

    constructor(
        private aimsService: AimsService,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.aimsService.getAll().subscribe({
            next: (res) => {
                this.aimsData = res.map((aim: Aim) => {
                    let transformedAim = {
                        code: aim.code,
                        it: aim.titles.it,
                        en: aim.titles.en,
                        hidden: aim.hidden,
                    };
                    return transformedAim;
                });

                this.cdr.detectChanges();
            },
            error: (err) => console.error(err),
        });
    }
}
