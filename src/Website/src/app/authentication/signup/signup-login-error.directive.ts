import {Component} from '@angular/core';
import {MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';


@Component({
    selector: 'app-signup-login-error-dialog',
    templateUrl: './signup-login-error.directive.html',
    styleUrls: ['./signup-login-error.directive.css']
})
export class LogInErrorDialogComponent {
    constructor(public dialogRef: MatDialogRef<LogInErrorDialogComponent>){}
}
