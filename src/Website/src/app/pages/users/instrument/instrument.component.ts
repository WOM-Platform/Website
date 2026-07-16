import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { Stats } from "src/app/_models/stats";
import { StatsService } from "src/app/_services";

@Component({
  selector: "app-instrument",
  templateUrl: "./instrument.component.html",
  styleUrls: ["./instrument.component.css"],
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class InstrumentComponent implements OnInit {
  currLanguage = "";
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.currLanguage = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currLanguage = event.lang;
    });
  }
}
