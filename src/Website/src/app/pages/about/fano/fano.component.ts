import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-fano",
  templateUrl: "./fano.component.html",
  styleUrls: ["./fano.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  imports: [TranslateModule],
})
export class FanoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
