import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-request-new-password',
    templateUrl: './request-new-password.component.html',
    styleUrls: ['./request-new-password.component.css']
})
export class RequestNewPasswordComponent implements OnInit {
    requestSent = false;
    form: FormGroup;

    constructor(private userService: UserService,
                private fb: FormBuilder){}

    ngOnInit(): void {
        this.form = this.fb.group({
            email: ['', Validators.email]
        });
    }

    requestPassword(): void {
        if (!this.form.valid) {
            console.log('input not valid');
            return;
        }
        if (this.form.controls.email.value === null) {
           console.log('email not inserted');
           return;
        }

        this.userService.passwordResetRequest(this.form.controls.email.value).pipe().subscribe(
            response => {
                this.requestSent = true;
                console.log(response);
            }, error => {
                console.log(error);
            });
    }
}
