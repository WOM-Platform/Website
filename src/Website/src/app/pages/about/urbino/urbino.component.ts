import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-urbino',
    templateUrl: './urbino.component.html',
    styleUrls: ['./urbino.component.css'],
    standalone: false
})
export class UrbinoComponent implements OnInit {
  src1 = "/assets/pdf/tutorial_contapassi.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}
