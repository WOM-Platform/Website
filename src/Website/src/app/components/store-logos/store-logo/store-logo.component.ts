import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-store-logo",
  standalone: true,
  templateUrl: "./store-logo.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./store-logo.component.css"],
})
export class StoreLogoComponent implements OnInit {
  @Input() appURL: string = "";
  @Input() storeImage: string = "";
  @Input() alt: string = "";
  @Input() title: string = "";

  constructor() {}

  ngOnInit(): void {}
}
