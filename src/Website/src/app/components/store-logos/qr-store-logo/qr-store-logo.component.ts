import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-qr-store-logo",
  templateUrl: "./qr-store-logo.component.html",
  styleUrls: ["./qr-store-logo.component.css"],
})
export class QrStoreLogoComponent implements OnInit {
  @Input() appURL: string = "";
  @Input() qrImage: string = "";
  @Input() alt: string = "";
  @Input() title: string = "";

  ngOnInit(): void {
    console.log("hihihhi");
    console.log(this.qrImage);
  }
}
