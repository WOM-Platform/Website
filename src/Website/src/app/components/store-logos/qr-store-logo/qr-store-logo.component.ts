import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-qr-store-logo",
    imports: [],
    templateUrl: "./qr-store-logo.component.html",
    styleUrls: ["./qr-store-logo.component.css"]
})
export class QrStoreLogoComponent {
    @Input() appURL: string = "";
    @Input() qrImage: string = "";
    @Input() alt: string = "";
    @Input() title: string = "";
}
