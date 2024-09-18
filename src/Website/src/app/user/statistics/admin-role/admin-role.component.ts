import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {PieChartModule} from "@swimlane/ngx-charts";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant, Merchants} from "../../../_models";
import {forkJoin, Subscription} from "rxjs";
import {AuthService, MerchantService, StatsService} from "../../../_services";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import {AmountMapComponent} from "../../components/amount-map/amount-map.component";
import {DatepickerComponent} from "../../../components/datepicker/datepicker.component";
import {SearchComponent} from "../../components/search/search.component";
import {DashboardAdminFilter} from "../../../_models/filter";
import {SourceService} from "../../../_services/source.service";
import {LazySearchComponent} from "../../components/lazy-search/lazy-search.component";
import {Instrument} from "../../../_models/instrument";
import {LocationParams} from "../../../_models/LocationParams";
import {tap} from "rxjs/operators";

interface ChartData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-admin-role',
    standalone: true,
    imports: [
        PieChartModule,
        SharedModule,
        AmountMapComponent,
        DatepickerComponent,
        DatePipe,
        SearchComponent,
        CommonModule,
        LazySearchComponent
    ],
    templateUrl: './admin-role.component.html',
    styleUrl: './admin-role.component.css'
})
export class AdminRoleComponent implements OnInit, OnDestroy {

    merchantData: Merchants;
    merchantSubscription: Subscription;

    isDateFiltering: boolean = false;

    filters: DashboardAdminFilter = {
        startDate: "",
        endDate: "",
        merchantId: "",
        merchantName: "",
        sourceId: "",
        sourceName: ""
    }

    displayLimit: number = 5;
    isExpanded: boolean = false;

    locationParameters: LocationParams = {}

    generatedDataFetched = []
    consumedDataFetched = []

    totalCreatedAmount: number;
    totalRedeemedAmount: number;
    totalCreatedAmountSub: Subscription;
    totalConsumedAmount: number = 0;
    totalConsumedOverTime: ChartData[] = [];
    totalGeneratedOverTime: { name: string, series: ChartData[] }[] = [];
    totalCreatedAmountByAim: { aimCode: string, amount: number }[];
    rankMerchants: { id: string, name: string, amount: number, rank: number }[] = []
    offerConsumedVouchers: any;
    availableVouchers: number

    isConsumedDataReady = false
    isGeneratedDataReady = false

    isShowedGenerationFilter: boolean = false
    bboxArea
    chartCreatedAmountByAim: ChartData[] = [];
    chartConsumedAmountByAim: ChartData[] = [];

    view: [number, number] = [500, 400];

    colorScheme: any = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF5733',
            '#33FF57', '#3357FF', '#FF33A5', '#33FFF1', '#FF9933',
            '#9933FF', '#FF3380', '#80FF33', '#3380FF', '#FF5733',]
    };

    constructor(private authService: AuthService, private merchantService: MerchantService, private sourceService: SourceService, private statsService: StatsService) {
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
        this.generalData()

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

    // search for source user
    searchSource(sourceName: string) {
        this.sourceService.getAllInstruments({search: sourceName}).subscribe(data => {
            this.generatedDataFetched = data.data

        })
    }

    // search for merchant user
    searchMerchant(merchantName: string) {
        this.merchantService.getAllMerchants({search: merchantName}).subscribe(data => {
            this.consumedDataFetched = data.data
        })
    }

    generalData() {
    }

    generationVoucherData(source?: Instrument) {
        if (source) {
            this.filters.sourceName = source.name
            this.filters.sourceId = source.id;
        }
        const observables = [
            // Created total amount of wom
            this.statsService.getAdminTotalAmountGeneratedAndRedeemed(this.filters).pipe(tap(data => {
                this.totalCreatedAmount = data.totalCount;
                this.totalRedeemedAmount = data.redeemedCount;
            })),
            // Created amount of wom divided by aim
            this.statsService.getAdminCreatedAmountByAim(this.filters).pipe(tap((data) => {
                this.totalCreatedAmountByAim = data;

                this.chartCreatedAmountByAim = data.map(item => ({
                    name: item.aimCode,
                    value: item.amount
                }))
            })),

            this.statsService.getTotalGeneratedOverTime(this.filters).pipe(tap((data: any[]) => {
                this.totalGeneratedOverTime = data.map(item => ({
                    name: item.date,
                    series: [
                        {
                            name: 'Voucher Redeemed',
                            value: item.totalRedeemed ? Number(item.totalRedeemed) : 0  // Ensure value is a number or 0
                        },
                        {
                            name: 'Voucher Generated',
                            value: item.totalGenerated ? Number(item.totalGenerated) : 0  // Ensure value is a number or 0
                        }
                    ]
                }))
            }))
        ]

        forkJoin(observables).subscribe({
            next: () => {
                // All requests are done, now set isConsumedDataReady to true
                this.isGeneratedDataReady = true;
            },
            error: (err) => {
                console.error('Error occurred while fetching data:', err);
                // Handle error and potentially set isConsumedDataReady to false
            }
        });
    }

    consumptionVoucherData(merchant?: Merchant) {
        if (merchant) {
            this.filters.merchantName = merchant.name
            this.filters.merchantId = merchant.id;
        }

        // Array to store the observables
        const observables = [
            // Consumed total amount of WOM
            this.statsService.getAdminTotalAmountConsumed(this.filters).pipe(tap((data: number) => {
                this.totalConsumedAmount = data;
            })),

            // Get total consumed by aims
            this.statsService.getAdminTotalConsumedByAim(this.filters).pipe(tap((data) => {
                this.chartConsumedAmountByAim = data.map(item => ({
                    name: item.aimCode,
                    value: item.amount
                }));
            })),

            // Get rank of merchants
            this.statsService.getRankMerchants(this.filters).pipe(tap((data) => {
                this.rankMerchants = data;
            })),

            // Get total consumed over time
            this.statsService.getTotalConsumedOverTime(this.filters).pipe(tap((res: any[]) => {
                this.totalConsumedOverTime = res.map(data => ({
                    name: data.date,
                    value: data.total
                }));
            }))
        ];

        // Add additional observable if merchantId is present
        if (this.filters.merchantId) {
            observables.push(
                // Get vouchers consumed by offer
                this.statsService.getVouchersConsumedByOffer(this.filters).pipe(tap((data) => {
                    this.offerConsumedVouchers = data;
                }))
            );
        }

        // Execute all requests in parallel
        forkJoin(observables).subscribe({
            next: () => {
                // All requests are done, now set isConsumedDataReady to true
                this.isConsumedDataReady = true;
            },
            error: (err) => {
                console.error('Error occurred while fetching data:', err);
                // Handle error and potentially set isConsumedDataReady to false
            }
        });

        // Fetch the available vouchers in parallel (not part of the forkJoin)
        this.statsService.getAmountOfAvailableVouchers(this.locationParameters, this.filters.merchantId).subscribe((data: number) => {
            this.availableVouchers = data;
            console.log("available ", this.availableVouchers)
        });
    }


    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        console.log(`${type}: ${event.value}`);
    }

    toggleDisplay() {
        this.isExpanded = !this.isExpanded;
        this.displayLimit = this.isExpanded ? this.rankMerchants.length : 5;
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

    onResize(event) {
        this.view = [event.target.innerWidth / 3, 400];
    }

    onDatesSelected(dates: { startDate: Date | null, endDate: Date | null }) {
        if (dates.startDate) {
            this.filters.startDate = new DatePipe("it-IT").transform(dates.startDate, 'yyyy-MM-dd').toLocaleString();
        }
        if (dates.endDate) {
            this.filters.endDate = new DatePipe("it-IT").transform(dates.endDate, 'yyyy-MM-dd').toLocaleString();
        }

        // call api to update statistics
        this.loadData()
    }

    cancelDataFilter() {
        this.filters.startDate = ""
        this.filters.endDate = ""
        this.isDateFiltering = !this.isDateFiltering
        this.loadData()
    }

    clearElementFilter(elementToClear: string) {
        if (elementToClear === 'merchant') {
            this.filters.merchantName = ''
            this.filters.merchantId = ''

            this.consumptionVoucherData()
        }
        if (elementToClear === "source") {
            this.filters.sourceName = ''
            this.filters.sourceId = ''

            console.log("calling here ")
            this.generationVoucherData()
        }
    }

    convertToCSV(): string {
        let csvRows = [];

        csvRows.push('Total Created Amount,' + this.totalCreatedAmount);
        csvRows.push('Total Redeemed Amount,' + this.totalRedeemedAmount);
        csvRows.push('Total Consumed Amount,' + this.totalConsumedAmount);
        csvRows.push('');  // Blank line for separation

        // totalCreatedAmountByAim
        csvRows.push('Aim Code,Created Amount');
        this.totalCreatedAmountByAim.forEach(item => {
            csvRows.push(`${item.aimCode},${item.amount}`);
        });
        csvRows.push('');  // Blank line for separation

        // chartCreatedAmountByAim
        csvRows.push('Chart Created Amount By Aim');
        csvRows.push('Label,Value');
        this.chartCreatedAmountByAim.forEach(item => {
            csvRows.push(`${item.value},${item.value}`);
        });
        csvRows.push('');  // Blank line for separation

        // chartConsumedAmountByAim
        csvRows.push('Chart Consumed Amount By Aim');
        csvRows.push('Label,Value');
        this.chartConsumedAmountByAim.forEach(item => {
            csvRows.push(`${item.value},${item.value}`);
        });

        // Join all rows with a newline
        return csvRows.join('\n');
    }

    // Method to download the CSV
    downloadCSV() {
        this.statsService.downloadCsv().subscribe(blob => {
            const url = URL.createObjectURL(blob);

            // Create an anchor element and trigger a download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'totalConsumedOverTime.csv';
            a.click();

            // Clean up the URL object
            URL.revokeObjectURL(url);
        })
        /*const csvData = this.convertToCSV();
        const blob = new Blob([csvData], {type: 'text/csv'});
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);*/
    }

    onSelect(event): void {
        console.log(event);
    }


}

