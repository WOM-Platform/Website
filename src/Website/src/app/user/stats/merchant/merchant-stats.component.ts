import {Component, Input} from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import {Merchant, MerchantContainer} from "../../../_models";

@Component({
    selector: 'app-merchant-stats',
    templateUrl: './merchant-stats.component.html',
    styleUrls: ['./merchant-stats.component.css']
})
export class MerchantStatsComponent {
    @Input()
    merchants: MerchantContainer[];

    single: any[];
    view: any[] = undefined;

    // options
    tooltipDisabled: boolean = false;
    animate: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showLabels: boolean = true;
    isDoughnut: boolean = false;

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        Object.assign(this, { single });
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


