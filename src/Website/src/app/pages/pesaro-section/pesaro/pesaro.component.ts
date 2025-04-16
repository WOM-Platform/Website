import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { StoreLogosComponent } from "src/app/components/store-logos/store-logos.component";
import { FaqListComponent } from "../../../components/faq-list/faq-list.component";
import { RouterModule } from "@angular/router";
import { BtnFaqComponent } from "../../../components/btn-faq/btn-faq.component";

@Component({
  selector: "app-pesaro",
  templateUrl: "./pesaro.component.html",
  styleUrls: ["./pesaro.component.css"],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    StoreLogosComponent,
    FaqListComponent,
    BtnFaqComponent,
  ],
  standalone: true,
})
export class PesaroComponent {}
