import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {PieChartModule} from "@swimlane/ngx-charts";
import {SharedModule} from "../../../shared/shared.module";
import {Merchant, Merchants} from "../../../_models";
import {Subscription} from "rxjs";
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
import {
    ChartDataSwimlane, GenerationRedeemedStatsApiResponse,
    RankMerchants,
    TotalCreatedAmountByAim,
    ChartDataSwimlaneSeries, ConsumedStatsApiResponse
} from "../../../_models/stats";
import {LoadingService} from "../../../_services/loading.service";
import {StatisticsFiltersComponent} from "../../components/statistics-filters/statistics-filters.component";

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
        LazySearchComponent,
        StatisticsFiltersComponent
    ],
    templateUrl: './admin-role.component.html',
    styleUrl: './admin-role.component.css'
})
export class AdminRoleComponent implements OnInit, OnDestroy {

    merchantData: Merchants;
    merchantSubscription: Subscription;


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
    totalConsumedOverTime: ChartDataSwimlane[] = [];
    totalGeneratedOverTime: ChartDataSwimlaneSeries[] = [];
    totalCreatedAmountByAim: TotalCreatedAmountByAim[];
    rankMerchants: RankMerchants[] = []
    offerConsumedVouchers: any;
    availableVouchers: number

    isConsumedDataReady = false
    isGeneratedDataReady = false

    isShowedGenerationFilter: boolean = false
    bboxArea
    chartCreatedAmountByAim: ChartDataSwimlane[] = [];
    chartConsumedAmountByAim: ChartDataSwimlane[] = [];

    view: [number, number] = [500, 400];

    colorScheme: any = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FF5733',
            '#33FF57', '#3357FF', '#FF33A5', '#33FFF1', '#FF9933',
            '#9933FF', '#FF3380', '#80FF33', '#3380FF', '#FF5733',]
    };

    constructor(
        private authService: AuthService,
        private loadingService: LoadingService,
        private merchantService: MerchantService,
        private sourceService: SourceService,
        private statsService: StatsService
    ) {
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

    generalData(source?: Instrument, merchant?: Merchant) {
        if (source) {
            this.filters.sourceName = source.name
            this.filters.sourceId = source.id;
        }

        if (merchant) {
            this.filters.merchantName = merchant.name
            this.filters.merchantId = merchant.id;
        }


    }

    generationVoucherData(source?: Instrument) {
        if (source) {
            this.filters.sourceName = source.name
            this.filters.sourceId = source.id;
        }
        this.statsService.fetchVouchersGeneratedAndRedeemedStats(this.filters).subscribe((data: GenerationRedeemedStatsApiResponse) => {
            this.totalCreatedAmount = data.totalGenerated;
            this.totalRedeemedAmount = data.totalRedeemed;
            this.totalCreatedAmountByAim = data.voucherByAim;

            this.chartCreatedAmountByAim = this.totalCreatedAmountByAim.map(item => ({
                name: item.aimCode,
                value: item.amount
            }))

            this.availableVouchers = data.voucherAvailable
            this.isGeneratedDataReady = true

            this.totalGeneratedOverTime = data.totalGeneratedAndRedeemedOverTime.map(item => ({
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

        })
    }

    consumptionVoucherData(merchant?: Merchant) {
        if (merchant) {
            this.filters.merchantName = merchant.name
            this.filters.merchantId = merchant.id;
        }

        this.statsService.fetchVouchersConsumedStats(this.filters, this.locationParameters).subscribe((data: ConsumedStatsApiResponse) => {
            // Consumed total amount of WOM
            this.totalConsumedAmount = data.totalConsumed;
            console.log("Undefie ", data)
            // Get total consumed by aims
            this.chartConsumedAmountByAim = data.voucherByAims.map(item => ({
                name: item.aimCode,
                value: item.amount
            }));

            // Get rank of merchants
            this.rankMerchants = data.merchantRanks
            // Get total consumed over time
            this.totalConsumedOverTime = data.totalConsumedOverTime.map(
                data => ({
                    name: data.date,
                    value: data.total
                })
            )

            // All requests are done, now set isConsumedDataReady to true
            this.isConsumedDataReady = true;
        })


        // Add additional observable if merchantId is present
        if (this.filters.merchantId) {
            // Get vouchers consumed by offer
            this.statsService.getVouchersConsumedByOffer(this.filters).pipe(tap((data) => {
                this.offerConsumedVouchers = data;
            }))
        }

        // Fetch the available vouchers in parallel (not part of the forkJoin)
        this.statsService.getAmountOfAvailableVouchers(this.locationParameters, this.filters.merchantId).subscribe((data: number) => {
            this.availableVouchers = data;
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

    elementSelected(elementKey: string, elementSelected: Merchant | Instrument) {
        if (elementKey === 'merchant' && this.isMerchant(elementSelected)) {
            this.consumedDataFetched = []
            this.isConsumedDataReady = false;
            this.consumptionVoucherData(elementSelected);
        } else if (elementKey === 'source' && this.isInstrument(elementSelected)) {
            this.generatedDataFetched = []
            this.isGeneratedDataReady = false;
            this.generationVoucherData(elementSelected);
        }
    }

    isMerchant(element: Merchant | Instrument): element is Merchant {
        // Check for a property that only Merchant has
        return (element as Merchant).name !== undefined;
    }

    isInstrument(element: Merchant | Instrument): element is Instrument {
        // Check for a property that only Instrument has
        return (element as Instrument).name !== undefined;
    }

    clearElementFilter(elementToClear: string) {
        if (elementToClear === 'merchant') {
            this.filters.merchantName = ''
            this.filters.merchantId = ''
            this.isConsumedDataReady = false

            this.consumptionVoucherData()
        }
        if (elementToClear === "source") {
            this.filters.sourceName = ''
            this.filters.sourceId = ''
            this.isGeneratedDataReady = false

            this.generationVoucherData()
        }
    }

    onDatesSelected(date) {
        this.filters.startDate = date.startDate;
        this.filters.endDate = date.endDate;
        this.loadData()
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

    onSelect(event): void {
        console.log(event);
    }


}

