import {Component, OnDestroy, OnInit} from "@angular/core";

import {Subscription, interval} from "rxjs";
<<<<<<< HEAD
import {map, takeWhile} from "rxjs/operators";
=======
import { map, takeWhile } from "rxjs/operators";
>>>>>>> origin/dev
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import {AuthService, StatsService} from "src/app/_services";
<<<<<<< HEAD
import {Merchants} from "src/app/_models";


interface PieChartData {
    name: string;
    value: number;
}
=======
import { Merchants } from "src/app/_models";
>>>>>>> origin/dev


interface PieChartData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-stats.component.html',
    styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnInit, OnDestroy {
    merchantData: Merchants;
    merchantSubscription: Subscription;

    totalCreatedAmount: number;
    totalCreatedAmountSub: Subscription;
    totalConsumedAmount: number = 0;

    chartCreatedAmountByAim: PieChartData[] = [];

    view: [number, number] = [700, 400];

<<<<<<< HEAD
    colorScheme: any = {
        domain: ['#5AA454', '#C7B42C', '#7aa3e5']
    };

=======
    colorScheme : any = {
        domain: ['#5AA454',  '#C7B42C', '#7aa3e5']
    };
>>>>>>> origin/dev
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
<<<<<<< HEAD
        this.statsService.getAdminTotalAmountCreated().subscribe(data => {
=======
        this.statsService.getTotalAmountCreated().subscribe(data => {
            console.log("Created ")
>>>>>>> origin/dev
            this.totalCreatedAmount = data;
        })

        // total amount of consumed wom
<<<<<<< HEAD
        this.statsService.getAdminTotalAmountConsumed().subscribe(data => {
=======
        this.statsService.getTotalAmountConsumed().subscribe(data => {
>>>>>>> origin/dev
            this.totalConsumedAmount = data;
        })

        // amount of wom created divided by aim
<<<<<<< HEAD
        this.statsService.getAdminCreatedAmountByAim().subscribe(data => {
=======
        this.statsService.getCreatedAmountByAim().subscribe(data => {
>>>>>>> origin/dev
            this.chartCreatedAmountByAim = data.map(item => ({
                name: item.aimTextId,
                value: item.amount
            }))
<<<<<<< HEAD
        });

        // amount of wom created divided by position
        this.statsService.getAdminCreatedAmountByPosition().subscribe(data => {
            console.log(data)
        })
        this.merchantSubscription = this.authService.merchants().subscribe({
                next: (response) => {
                    this.merchantData = response;
                },
                error: (error) => {
                    console.log('Errore durante il download dei dati del merchant:', error);
                }
            }
=======
            console.log("Total amount of wom")
            console.log(data)
        });

        // amount of wom created divided by position
        this.statsService.getCreatedAmountByPosition().subscribe(data => {
            console.log(data)
        })
        this.merchantSubscription = this.authService.merchants().subscribe({
            next:(response) => {
                this.merchantData = response;
            },
            error: (error) => {
                console.log('Errore durante il download dei dati del merchant:', error);
            }}
>>>>>>> origin/dev
        );
    }

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(`${type}: ${event.value}`);
    }

    public convertToPDF() {
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
