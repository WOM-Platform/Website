import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {Merchant, PosRegistration, UserRegistrationPayload} from '../../_models';
import {first} from 'rxjs/operators';
import {MerchantService} from '../../_services/merchant.service';
import {PosService} from '../../_services/pos.service';
import {MatDialog} from '@angular/material/dialog';
import {LogInErrorDialogComponent} from './signup-login-error.directive';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-merchant-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class MerchantSignUpComponent implements OnInit {
  form: FormGroup;
  formMerchant: FormGroup;
  formPos: FormGroup;
  formSubmit: FormGroup;
  errorMessage: string;

  signupInvalid: boolean;
  signupTimeout: boolean;
  signupComplete: boolean;
  returnUrl: string;
  requireMerchantRegistration: boolean;
  requirePosRegistration: boolean;
  termsConditionsChecked: boolean;
  termsAndConditionsText: string;
  userRegistered = false;
  userSignedIn = false;

  // Spinner
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  displayProgressSpinner = false;

  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private merchantService: MerchantService,
              private posService: PosService,
              private  translate: TranslateService) {
      this.termsAndConditionsText = translate.instant('TERMS_CONDITIONS.MAIN_TEXT');
  }

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.formSubmit = this.fb.group({
      termsConditionsCheckbox: ['', Validators.requiredTrue],
        tcInfo: [{value: this.termsAndConditionsText, disabled: true}, !Validators.required]
    });
  }

  onSubmit(): any {
    this.errorMessage = '';
    this.signupInvalid = false;
    this.signupComplete = false;
    this.showProgressSpinner();

    const merchantFormValid = this.requireMerchantRegistration
        ? (this.formMerchant !== undefined && this.formMerchant.valid)
        : true;
    const posFormValid = this.requirePosRegistration
        ? (this.formPos !== undefined && this.formPos.valid)
        : true;

    if (!this.form.valid || !this.formSubmit.valid || !merchantFormValid || !posFormValid) {
        this.signupInvalid = true;
        this.signupComplete = true;
        this.displayProgressSpinner = false;

        return;
    }

    const userData: UserRegistrationPayload = new UserRegistrationPayload() ;
    userData.email = this.form.controls.email.value;
    userData.name = this.form.controls.firstName.value;
    userData.password = this.form.controls.password.value;
    userData.surname = this.form.controls.lastName.value;

    if (this.userRegistered) {
        this.logIn(userData.email, userData.password);
        return;
    }

    this.userService.register(userData).pipe(first()).subscribe(
        result => {
            if (result.id !== null) {
                console.log(result);
                this.userRegistered = true;
                this.logIn(userData.email, userData.password);
            }
        }, error => {
            if (error.status === 422) {
                this.errorMessage = 'SIGN_UP.EMAIL_EXISTS_ERROR';
            } else {
                this.errorMessage = 'SIGN_UP.GENERIC_ERROR';
            }
            this.signupInvalid = true;
            this.signupComplete = true;
            this.displayProgressSpinner = false;
            console.log(error);
        });
  }

  registerMerchant(): any {
    const merchant: Merchant = new Merchant();
    merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
    merchant.country = this.formMerchant.controls.country.value;
    merchant.city = this.formMerchant.controls.city.value;
    merchant.zipCode = this.formMerchant.controls.cap.value;
    merchant.address = this.formMerchant.controls.address.value;
    merchant.primaryActivity = this.formMerchant.controls.primaryActivity.value;
    merchant.name = this.formMerchant.controls.name.value;
    // Optional values
    if (this.formMerchant.controls.url.value !== '') {
        merchant.url = this.formMerchant.controls.url.value;
    }
    if (this.formMerchant.controls.description.value !== '') {
      merchant.description = this.formMerchant.controls.description.value;
    }

    this.merchantService.register(merchant).pipe(first()).subscribe(
        result => {
          console.log(result);
          if (this.requirePosRegistration) {
            this.registerPos(result.id);
          } else {
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            this.router.navigate(['/user/home']).then(r => r);
          }
        }, error => {
            if (error.status === 422) {
                this.errorMessage = 'SIGN_UP.FISCAL_CODE_EXISTS_ERROR';
            } else {
                this.errorMessage = 'SIGN_UP.GENERIC_ERROR';
            }
            this.signupInvalid = true;
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            console.log(error);
        });
  }

  registerPos(merchantId: string): any {
    const pos: PosRegistration = new PosRegistration();
    pos.longitude = this.formPos.controls.longitude.value;
    pos.latitude = this.formPos.controls.latitude.value;
    pos.name = this.formPos.controls.name.value;
    pos.ownerMerchantId = merchantId;
    // Optional values
    if (this.formPos.controls.url.value !== '') {
        pos.url = this.formPos.controls.url.value;
    }

    this.posService.register(pos).pipe(first()).subscribe(
        result => {
          console.log(result);
          this.displayProgressSpinner = false;
          this.signupComplete = true;
          this.router.navigate(['/user/home']).then(r => r);
        }, error => {
            this.signupInvalid = true;
            this.errorMessage = 'SIGN_UP.GENERIC_ERROR';
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            console.log(error);
        });
  }

  logIn(username: string, password: string): any {
    if (this.userSignedIn) {
        console.log('user already signed in');
        if (this.requireMerchantRegistration) {
            this.registerMerchant();
        } else {
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            this.router.navigate(['/user/home']).then(r => r);
        }
        return;
    }
    this.userService.login(username, password).pipe().subscribe(
        result => {
            console.log(result);
            this.userService.getLoggedUser().pipe().subscribe(
                user => {
                    console.log('user');
                    this.userSignedIn = true;
                    if (this.requireMerchantRegistration) {
                        this.registerMerchant();
                    } else {
                        this.displayProgressSpinner = false;
                        this.signupComplete = true;
                        this.router.navigate(['/user/home']).then(r => r);
                    }
                }, error => {
                    this.displayProgressSpinner = false;
                    this.signupComplete = true;
                    console.log(error);
                });
        }, error => {
            this.signupInvalid = true;
            this.errorMessage = error.title;
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            console.log(error);

            const dialogRef = this.dialog.open(LogInErrorDialogComponent);
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/authentication/signin']).then(r => r);
            });
        });
  }

  tcLinkClicked(): any {
      this.router.navigate(['/privacy']).then(r => r);
  }

  showProgressSpinner = () => {
    this.displayProgressSpinner = true;
    setTimeout(() => {
        if (!this.signupComplete) {
            this.displayProgressSpinner = false;
            this.signupInvalid = true;
            this.signupTimeout = true;
        }
    }, 10000);
  }
}
