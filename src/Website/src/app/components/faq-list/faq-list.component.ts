import { Component, Input, OnInit } from "@angular/core";
import faqData from "../../../assets/json/faq.json";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

@Component({
  selector: "app-faq-list",
  imports: [CommonModule, TranslateModule],
  templateUrl: "./faq-list.component.html",
  styleUrl: "./faq-list.component.css",
  standalone: true,
  animations: [
    trigger("expandCollapse", [
      state(
        "open",
        style({
          height: "*",
          opacity: 1,
        })
      ),
      state(
        "closed",
        style({
          height: "0px",
          opacity: 0,
          padding: "0rem",
        })
      ),
      transition("open <=> closed", [animate("300ms ease-in-out")]),
    ]),
  ],
})
export class FaqListComponent implements OnInit {
  @Input() types: string[] = [];
  faqs: any[] = [];

  constructor(private translate: TranslateService) {}
  ngOnInit() {
    this.types.forEach((type) => {
      let filteredFaqs = faqData.filter((faq) => faq.type === type);
      filteredFaqs[0].list = filteredFaqs[0].list.map((faq) => ({
        ...faq,
        isOpen: false,
      }));

      this.faqs.push(...filteredFaqs);
    });
  }

  toggleFaq(type: string, index: number) {
    this.faqs[type].list[index].isOpen = !this.faqs[type].list[index].isOpen;
  }
}
