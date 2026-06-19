import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { StoreLogoComponent } from "./store-logo/store-logo.component";
import { QrStoreLogoComponent } from "./qr-store-logo/qr-store-logo.component";

@Component({
  selector: "app-store-logos",
  imports: [StoreLogoComponent, QrStoreLogoComponent],
  standalone: true,
  templateUrl: "./store-logos.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./store-logos.component.css"],
})
export class StoreLogosComponent implements OnInit {
  @Input() appName = "";
  @Input() appleURL = "";
  @Input() appleQR?: string;
  @Input() googleURL = "";
  @Input() googleQR?: string;

  constructor() {}

  ngOnInit(): void {}
}
