import {Component, Input, OnInit} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { MerchantContainer } from "src/app/_models";


@Component({
    selector: 'app-merchant-stats',
    templateUrl: './merchant-stats.component.html',
    styleUrls: ['./merchant-stats.component.css']
})
export class MerchantStatsComponent implements OnInit{
    @Input() merchants: MerchantContainer[];

    totComparison  : {name: string, value: number}[] = [{name: "total", value: 0}, {name: "average", value: 160000}]

    viewAverage = [700, 200]
    tot = 0
    averageValue = 160000
    units: string = 'WOM bruciati';

    single: any[];
    view: [number, number] = [1000, 400];
    viewTotComparison : [number, number] = [400, 500]
    autoScale: true;

  // options
  showXAxis = true;
  showYAxis = true;
  
  
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'WOM consumati';

    // options
    tooltipDisabled: boolean = false;
    animate: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;

    colorsTotComparison = {
        domain: ['#464555','#FF566F']
    }
    colorsWOMConsumati = {
        domain: ['#2A69FF', '#DD52DB', '#FF57A3', '#FF8A70', '#FFC457', '#F9F871']
    };

    constructor() {
        Object.assign(this, { single });
    }

    
    ngOnInit(): void {
        // Sum all the offerts to know how many WOM where consume
        for(let i = 0; i < this.single.length; i++) {[0]
            console.log(this.single[i].value)
            this.totComparison[0].value = +this.single[i].value + this.totComparison[0].value
            this.tot = +this.single[i].value + this.tot
        }
        console.log(this.totComparison)
    }

    onSelect(data): void {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data): void {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data): void {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }
}


