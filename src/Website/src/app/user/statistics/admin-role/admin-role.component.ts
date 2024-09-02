import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe, NgIf} from "@angular/common";
import {PieChartModule} from "@swimlane/ngx-charts";
import {SharedModule} from "../../../shared/shared.module";
import {Merchants} from "../../../_models";
import {Subscription} from "rxjs";
import {AuthService, StatsService} from "../../../_services";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {AmountMapComponent} from "../../components/amount-map/amount-map.component";
import {DatepickerComponent} from "../../../components/datepicker/datepicker.component";
import {SearchComponent} from "../../components/search/search.component";

interface PieChartData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-admin-role',
    standalone: true,
    imports: [
        NgIf,
        PieChartModule,
        SharedModule,
        AmountMapComponent,
        DatepickerComponent,
        DatePipe,
        SearchComponent
    ],
    templateUrl: './admin-role.component.html',
    styleUrl: './admin-role.component.css'
})
export class AdminRoleComponent implements OnInit, OnDestroy {

    merchantData: Merchants;
    merchantSubscription: Subscription;

    isDateFiltering: boolean = false;

    startDate
    endDate

    totalCreatedAmount: number;
    totalRedeemedAmount: number;
    totalCreatedAmountSub: Subscription;
    totalConsumedAmount: number = 0;
    totalCreatedAmountByAim: { aimCode: string, amount: number }[];

    isShowedGenerationFilter: boolean = false
    bboxArea
    chartCreatedAmountByAim: PieChartData[] = [];
    chartConsumedAmountByAim: PieChartData[] = [];

    view: [number, number] = [700, 400];

    colorScheme: any = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF5733',
            '#33FF57', '#3357FF', '#FF33A5', '#33FFF1', '#FF9933',
            '#9933FF', '#FF3380', '#80FF33', '#3380FF', '#FF5733',]
    };

    constructor(private authService: AuthService, private statsService: StatsService) {
    }

    ngOnInit(): any {
        this.loadData();
    }

    ngOnDestroy(): any {
        if (this.merchantSubscription)
            this.merchantSubscription.unsubscribe();
    }

    loadData(): any {
        this.generationVoucherData()
        this.consumptionVoucherData()
        /*
                       this.merchantSubscription = this.authService.merchants().subscribe({
                                next: (response) => {
                                    this.merchantData = response;
                                },
                                error: (error) => {
                                    console.log('Errore durante il download dei dati del merchant:', error);
                                }
                            }

                       );
                   */
    }

    generationVoucherData(instrumentName = "") {
        // Created total amount of wom
        this.statsService.getAdminTotalAmountGeneratedAndRedeemed(this.startDate, this.endDate, instrumentName).subscribe(data => {
            this.totalCreatedAmount = data.totalCount;
            this.totalRedeemedAmount = data.redeemedCount;
        })


        // Created amount of wom divided by aim
        this.statsService.getAdminCreatedAmountByAim(this.startDate, this.endDate, instrumentName).subscribe(data => {
            this.totalCreatedAmountByAim = data;

            this.chartCreatedAmountByAim = data.map(item => ({
                name: item.aimCode,
                value: item.amount
            }))
        });
    }

    consumptionVoucherData(merchantName = "") {
        // Consumed total amount of wom
        this.statsService.getAdminTotalAmountConsumed(this.startDate, this.endDate, merchantName).subscribe(data => {
            this.totalConsumedAmount = data.totalAmountConsumed;
        })
        // get total consumed by aims
        this.statsService.getAdminTotalConsumedByAim(this.startDate, this.endDate, merchantName).subscribe(data => {
            console.log("data ", data)
            this.chartConsumedAmountByAim = data.map(item => ({
                name: item.aimCode,
                value: item.amount
            }))
        })
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

    onDatesSelected(dates: { startDate: Date | null, endDate: Date | null }) {
        this.startDate = new DatePipe("it-IT").transform(dates.startDate, 'yyyy-MM-dd').toLocaleString()
        this.endDate = new DatePipe("it-IT").transform(dates.endDate, 'yyyy-MM-dd').toLocaleString()

        // call api to update statistics
        this.loadData()

    }

    cancelDataFilter() {
        this.startDate = ""
        this.endDate = ""
        this.isDateFiltering = !this.isDateFiltering
        this.loadData()
    }
}

