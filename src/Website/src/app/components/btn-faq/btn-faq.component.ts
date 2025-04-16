import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-btn-faq",
  imports: [RouterLink, TranslateModule],
  template: `
    <div class="flex flex-col items-center mt-6 gap-6">
      <a
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl"
        [routerLink]="['/faq']"
      >
        <span [innerHTML]="'FAQ.OPEN_PAGE_FAQ' | translate"></span>
      </a>
    </div>
  `,
})
export class BtnFaqComponent {}
