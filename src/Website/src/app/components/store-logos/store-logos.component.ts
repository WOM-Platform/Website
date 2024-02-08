import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-store-logos",
  templateUrl: "./store-logos.component.html",
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
