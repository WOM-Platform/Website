import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
    @Input() startingLetter: string;
    @Input() fullName: string;
    @Input() role: Set<string>;

    constructor() {
        console.log(this.role)
    }
}
