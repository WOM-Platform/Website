import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FaqListComponent } from "../../components/faq-list/faq-list.component";

@Component({
  selector: "app-faq",
  imports: [FaqListComponent],
  templateUrl: "./faq.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: "./faq.component.css",
})
export class FaqComponent {}
