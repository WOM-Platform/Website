import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-badge',
    standalone: true,
    imports: [NgIf, NgClass],
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.css'
})
export class BadgeComponent {
    @Input() text: string = ''
    @Input() textColor: string = 'text-black'
    @Input() bgColor: string = 'bg-transparent'
}