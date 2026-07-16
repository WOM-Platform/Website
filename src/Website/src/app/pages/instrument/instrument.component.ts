import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { StatsService } from "../../_services";
import { Stats } from "../../_models/stats";
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { AnimatedNumberComponent } from "src/app/components/animated-number/animated-number.component";

@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [AnimatedNumberComponent, TranslateModule],
})
export class InstrumentComponent implements OnInit {
  stats: Stats = new Stats();
  currLanguage = "";
  constructor(
    private statsService: StatsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.statsService.getStatsList().subscribe((res) => {
      this.stats = res;
    });
    this.currLanguage = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currLanguage = event.lang;
    });
  }
}
