import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {PieChartModule} from "@swimlane/ngx-charts";
import {SharedModule} from "../../../shared/shared.module";
import {Merchants} from "../../../_models";
import {Subscription} from "rxjs";
import {AuthService, StatsService} from "../../../_services";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";

interface PieChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-admin-stats',
  standalone: true,
  imports: [
    NgIf,
    PieChartModule,
    SharedModule
  ],
  templateUrl: './admin-stats.component.html',
  styleUrl: './admin-stats.component.css'
})
export class AdminStatsComponent {

  merchantData: Merchants;
  merchantSubscription: Subscription;

  totalCreatedAmount: number;
  totalCreatedAmountSub: Subscription;
  totalConsumedAmount: number = 0;

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
      console.log("Created ")
      this.totalCreatedAmount = data;
    })

    // total amount of consumed wom
    this.statsService.getTotalAmountConsumed().subscribe(data => {
      this.totalConsumedAmount = data;
    })

    // amount of wom created divided by aim
    this.statsService.getCreatedAmountByAim().subscribe(data => {
      this.chartCreatedAmountByAim = data.map(item => ({
        name: item.aimTextId,
        value: item.amount
      }))
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
    );
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

