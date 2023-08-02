import {Component, OnDestroy, OnInit} from "@angular/core";

import {Subscription} from "rxjs";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { AuthService } from "src/app/_services";
import { Merchants } from "src/app/_models";

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit, OnDestroy{
    merchantData: Merchants;
    merchantSubscription: Subscription;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): any {
        this.loadData();
    }

    ngOnDestroy(): any {
        this.merchantSubscription.unsubscribe();
    }

    loadData(): any {
        this.merchantSubscription = this.authService.merchants().pipe().subscribe(
            response =>
            {
                this.merchantData = response;
            }, error => {
                console.log('error downloading merchant data');
            });
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(`${type}: ${event.value}`);
    }

    public convertToPDF()
    {
        html2canvas(document.getElementById('toPrint')).then(canvas => {
            // Few necessary setting options
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var width = pdf.internal.pageSize.getWidth();
            var height = canvas.height * width / canvas.width;
            pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
            pdf.save('output.pdf'); // Generated PDF
        });
    }
}
