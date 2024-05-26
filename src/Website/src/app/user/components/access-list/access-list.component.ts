import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { Access } from "src/app/_models/instrument";

@Component({
  selector: "app-access-list",
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: "./access-list.component.html",
  styleUrls: ["./access-list.component.css"], // Corrected to "styleUrls"
})
export class AccessListComponent implements OnInit {
  @Input() accessList: Access[];
  @Input() action: string;
  @Input() showRole: boolean = false;
  @Output() deleteAccess = new EventEmitter<Access>(); // Ensure to emit the correct type

  ngOnInit(): void {
    console.log("Action ", this.action);
  }

  onDelete(access: Access) {
    console.log("EWWEWEWEEWEWEW ", access);
    this.deleteAccess.emit(access);
  }
}
