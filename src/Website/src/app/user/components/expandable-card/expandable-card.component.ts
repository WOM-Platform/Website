import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-expandable-card",
  standalone: true,
  templateUrl: "./expandable-card.component.html",
  styleUrl: "./expandable-card.component.css",
})
export class ExpandableCardComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  @Input() data;
  @Output() updateInstrument: EventEmitter<any> = new EventEmitter<any>();

  action = "view";

  ngOnInit(): void {
    if (this.role === "Admin") this.action = "edit";
  }

  // to update instrument field like name, url and aims
  onUpdateSourceField(key: string, value: any, isTableToUpdate: boolean) {
    this.updateInstrument.emit({ key, value, isTableToUpdate });
  }
}
