import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {Merchant, PosRegistration, UserRegistrationPayload} from '../../_models';
import {first} from 'rxjs/operators';
import {MerchantService} from '../../_services/merchant.service';
import {PosService} from '../../_services/pos.service';

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

  // Spinner
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  displayProgressSpinner = false;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private merchantService: MerchantService,
              private posService: PosService) {
      this.termsAndConditionsText = 'Insert t&c text here';
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
      return;
    }

    const userData: UserRegistrationPayload = new UserRegistrationPayload() ;
    userData.email = this.form.controls.email.value;
    userData.name = this.form.controls.firstName.value;
    userData.password = this.form.controls.password.value;
    userData.surname = this.form.controls.lastName.value;

    this.userService.register(userData).pipe(first()).subscribe(
        result => {
            if (result.id !== null) {
              console.log(result);
              this.logIn(userData.email, userData.password);
            }
        }, error => {
          this.signupInvalid = true;
          this.errorMessage = error.title;
          this.signupComplete = true;
          console.log(error);
          this.displayProgressSpinner = false;
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
            this.signupInvalid = true;
            this.errorMessage = error.title;
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
            this.errorMessage = error.title;
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            console.log(error);
        });
  }

  logIn(username: string, password: string): any {
    this.userService.login(username, password).pipe().subscribe(
        result => {
            console.log(result);
            if (this.requireMerchantRegistration) {
                this.registerMerchant();
            } else {
                this.displayProgressSpinner = false;
                this.signupComplete = true;
                this.router.navigate(['/user/home']).then(r => r);
            }
        }, error => {
            this.signupInvalid = true;
            this.errorMessage = error.title;
            this.displayProgressSpinner = false;
            this.signupComplete = true;
            console.log(error);
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
