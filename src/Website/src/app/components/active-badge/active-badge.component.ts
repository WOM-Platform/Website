import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-active-badge',
    standalone: true,
    imports: [NgIf],
    templateUrl: './active-badge.component.html',
    styleUrl: './active-badge.component.css'
})
export class ActiveBadgeComponent {
    @Input() isActive: boolean
}
