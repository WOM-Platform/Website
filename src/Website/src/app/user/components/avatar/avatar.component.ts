import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "app-avatar",
    templateUrl: "./avatar.component.html",
    styleUrls: ["./avatar.component.css"],
    standalone: false
})
export class AvatarComponent implements OnInit {
    @Input() startingLetter: string;
    @Input() fullName: string;
    @Input() role: string;

    constructor() {
    }

    ngOnInit() {
    }
}
