import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from "@angular/core";

import { Access } from "src/app/_models/instrument";
import { UserAccessListComponent } from "../user-access-list/user-access-list.component";

@Component({
  selector: "app-access-list",
  imports: [UserAccessListComponent],
  standalone: true,
  templateUrl: "./access-list.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./access-list.component.css"],
})
export class AccessListComponent {
  @Input() accessList: Access[] = [];
  @Input() action: string = "";
  @Input() showRole: boolean = false;
  @Output() deleteAccess = new EventEmitter<Access>();
  @Output() addAccess = new EventEmitter<Access>();

  createNewAccess = false;

  onDelete(access: Access) {
    this.deleteAccess.emit(access);
  }

  handleAccessList(user: any) {
    this.addAccess.emit(user);
  }
}
