import {Component} from "@angular/core";
import {EmailService} from "../../_services/email.service";
import {EmailData} from "../../_models/emailData";
import {UntypedFormGroup} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css'],
    standalone: false
})
export class ContactsComponent {
    formData: UntypedFormGroup;

    constructor(private emailService: EmailService,
                private router: Router,
                private snackBar: MatSnackBar,
                private translateService: TranslateService){
    }

    ngOnInit(){
    }

    onSubmit(): any {
        const emailData: EmailData = new EmailData();
        if (!this.formData || !this.formData.valid) {
            this.openSnackBar(this.translateService.instant('CONTACTS.FORM_ERROR'));
            return;
        }
        emailData.senderEmail = this.formData.controls.senderEmail.value;
        emailData.senderName = this.formData.controls.senderName.value;
        emailData.subject = this.formData.controls.subject.value;
        emailData.content = this.formData.controls.content.value;

        this.emailService.sendEmail(emailData).subscribe(res => {
            this.openSnackBar(this.translateService.instant('CONTACTS.SEND_SUCCESS'));
            setTimeout(() => {
                this.router.navigate(['home']);
            }, 2000);
        }, error => {
            console.log(error);
            this.openSnackBar(this.translateService.instant('CONTACTS.SEND_ERROR'));
        })
    }

    openSnackBar(message = 'null'): any {
        this.snackBar.open(message, null, {
            duration: 5000
        });
    }
}
