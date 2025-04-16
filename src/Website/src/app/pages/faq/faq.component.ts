import { Component } from "@angular/core";
import { FaqListComponent } from "../../components/faq-list/faq-list.component";

@Component({
  selector: "app-faq",
  imports: [FaqListComponent],
  templateUrl: "./faq.component.html",
  styleUrl: "./faq.component.css",
})
export class FaqComponent {}
