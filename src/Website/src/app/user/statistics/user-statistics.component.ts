import {Component, OnDestroy, OnInit} from "@angular/core";

import {Subscription, interval} from "rxjs";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';
import {AuthService, StatsService, UserService} from "src/app/_services";
import {Merchants, User} from "src/app/_models";


interface PieChartData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-user-stats',
    templateUrl: './user-statistics.component.html',
    styleUrls: ['./user-statistics.component.css']
})
export class UserStatisticsComponent implements OnInit, OnDestroy {
    currentUser: User
    merchantData: Merchants;
    merchantSubscription: Subscription;

    totalCreatedAmount: number;
    totalCreatedAmountSub: Subscription;
    totalConsumedAmount: number = 0;

    chartCreatedAmountByAim: PieChartData[] = [];

    view: [number, number] = [700, 400];

    colorScheme: any = {
        domain: ['#5AA454', '#C7B42C', '#7aa3e5']
    };

    constructor(private authService: AuthService, private statsService: StatsService, private userService: UserService) {
    }

    ngOnInit(): any {
        // check user role
        this.currentUser = this.userService.currentUserValue
        console.log("Utente ", this.currentUser)
        this.loadData();
    }

    ngOnDestroy(): any {
        this.merchantSubscription.unsubscribe();
    }

    loadData(): any {
        // total amount of created wom
        this.statsService.getAdminTotalAmountCreated().subscribe(data => {
            this.totalCreatedAmount = data;
        })

        // total amount of consumed wom
        this.statsService.getAdminTotalAmountConsumed().subscribe(data => {
            this.totalConsumedAmount = data;
        })

        // amount of wom created divided by aim
        this.statsService.getAdminCreatedAmountByAim().subscribe(data => {
            this.chartCreatedAmountByAim = data.map(item => ({
                name: item.aimTextId,
                value: item.amount
            }))
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
