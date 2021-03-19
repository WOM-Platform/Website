import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-user-verify',
    templateUrl: './user-verify.component.html',
    styleUrls: ['./user-verify.component.css']
})
export class UserVerifyComponent {
}
