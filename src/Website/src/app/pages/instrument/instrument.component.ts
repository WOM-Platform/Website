import { Component, OnInit } from "@angular/core";
import { StatsService } from "../../_services";
import { Stats } from "../../_models/stats";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.css"],
  standalone: false,
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
