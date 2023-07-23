import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-store',
  templateUrl: './logo-store.component.html',
  styleUrls: ['./logo-store.component.css']
})
export class LogoStoreComponent implements OnInit {
  @Input() appURL :string = ""
  @Input() storeImage :string = ""
  @Input() alt: string =""
  @Input() title :string = ""

  constructor() { }

  ngOnInit(): void {
  }
  

}
