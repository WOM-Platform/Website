import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";



@Component({
    selector: 'app-signup-login-error-dialog',
    templateUrl: './signup-login-error.directive.html',
    styleUrls: ['./signup-login-error.directive.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LogInErrorDialogComponent {
    constructor(public dialogRef: MatDialogRef<LogInErrorDialogComponent>){}
}
