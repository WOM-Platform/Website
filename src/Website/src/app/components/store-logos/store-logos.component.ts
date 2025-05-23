import { Component, Input, OnInit } from "@angular/core";
import { StoreLogoComponent } from "./store-logo/store-logo.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-store-logos",
  imports: [StoreLogoComponent, NgIf],
  standalone: true,
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
