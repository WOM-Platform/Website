import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-avatar",
  templateUrl: "./avatar.component.html",
  styleUrls: ["./avatar.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AvatarComponent implements OnInit {
  @Input() fullName: string = "";
  @Input() role: string = "";

  constructor() {}

  ngOnInit() {}
}
