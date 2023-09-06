import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-logo',
  templateUrl: './store-logo.component.html',
  styleUrls: ['./store-logo.component.css']
})
export class StoreLogoComponent implements OnInit {
  @Input() appURL :string = ""
  @Input() storeImage :string = ""
  @Input() alt: string =""
  @Input() title :string = ""

  constructor() { }

  ngOnInit(): void {
  }
  

}
