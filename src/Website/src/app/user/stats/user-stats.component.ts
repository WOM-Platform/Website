import {Component, OnDestroy, OnInit} from "@angular/core";

import {Subscription, interval} from "rxjs";
import { map, takeWhile } from "rxjs/operators";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {AuthService, StatsService} from "src/app/_services";
import { Merchants } from "src/app/_models";


interface PieChartData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit, OnDestroy{
    merchantData: Merchants;
    merchantSubscription: Subscription;

    totalCreatedAmount: number;
    totalConsumedAmount: number = 0;

    displayChartCreatedAmount: number = 0;
    
    chartCreatedAmountByAim: PieChartData[] = [];

    view: [number, number] = [700, 400];

    colorScheme : any = {
        domain: ['#5AA454',  '#C7B42C', '#7aa3e5']
    };
    constructor(private authService: AuthService, private statsService: StatsService) {
    }

    ngOnInit(): any {
        this.loadData();
    }

    ngOnDestroy(): any {
        this.merchantSubscription.unsubscribe();
    }

    loadData(): any {
        // total amount of created wom
        this.statsService.getTotalAmountCreated().subscribe(data => {
            this.totalCreatedAmount = data;
            this.animateNumber()
        })

        // total amount of consumed wom
        this.statsService.getTotalAmountConsumed().subscribe(data => {
            this.totalConsumedAmount = data;
        })

        this.statsService.getCreatedAmountByAim().subscribe(data => {
            this.chartCreatedAmountByAim = data.map(item => ({
                name: item.aimTextId,
                value: item.amount
            }))
            console.log("Total amount of wom")
            console.log(data)
        });

        this.merchantSubscription = this.authService.merchants().pipe().subscribe(
            response =>
            {
                this.merchantData = response;
            }, error => {
                console.log('error downloading merchant data ', error);
            });
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(`${type}: ${event.value}`);
    }

    animateNumber() {
        const duration = 500;
        const intervalTime = 50
        const steps = duration / intervalTime
        const increment = this.totalCreatedAmount / steps;
        
        interval(intervalTime).pipe(
            map(i => (i+1) * increment),
            takeWhile(value => value <= this.totalCreatedAmount, true)
        ).subscribe({next: (value) => this.displayChartCreatedAmount = value,
        complete: () => this.displayChartCreatedAmount = this.totalCreatedAmount})
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
