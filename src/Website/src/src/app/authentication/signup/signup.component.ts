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

  signupInvalid: boolean;
  returnUrl: string;
  requireMerchantRegistration: boolean;
  requirePosRegistration: boolean;
  termsConditionsChecked: boolean;
  termsAndConditionsText: string;

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
    this.signupInvalid = false;
    const merchantFormValid = (this.requireMerchantRegistration && this.formMerchant.valid) || !this.requireMerchantRegistration;
    const posFormValid = (this.requirePosRegistration && this.formPos.valid) || !this.requirePosRegistration;
    console.log('form: ' + this.form.valid);
    console.log('submit: ' + this.formSubmit.valid);
    console.log('merchant: ' + merchantFormValid);
    console.log('pos: ' + posFormValid);

    if (!this.form.valid || !this.formSubmit.valid || !merchantFormValid || !posFormValid) {
      console.log('signup invalid');
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
            this.router.navigate(['/user/home']).then(r => r);
          }
        }, error => {
          console.log(error);
        });
  }

  registerMerchant(): any {
    const merchant: Merchant = new Merchant();
    merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
    merchant.url = this.formMerchant.controls.url.value;
    merchant.description = this.formMerchant.controls.description.value;
    merchant.country = this.formMerchant.controls.country.value;
    merchant.city = this.formMerchant.controls.city.value;
    merchant.zipCode = this.formMerchant.controls.cap.value;
    merchant.address = this.formMerchant.controls.address.value;
    merchant.primaryActivityType = this.formMerchant.controls.primaryActivityType.value;
    merchant.name = this.formMerchant.controls.name.value;

    this.merchantService.register(merchant).pipe(first()).subscribe(
        result => {
          console.log(result);
          if (this.requirePosRegistration) {
            this.registerPos(result.id);
          } else {
            this.router.navigate(['/user/home']).then(r => r);
          }
        }, error => {
          console.log(error);
        });
  }

  registerPos(merchantId: string): any {
    const pos: PosRegistration = new PosRegistration();
    pos.url = this.formPos.controls.url.value;
    pos.longitude = this.formPos.controls.longitude.value;
    pos.latitude = this.formPos.controls.latitude.value;
    pos.name = this.formPos.controls.name.value;
    pos.ownerMerchantId = merchantId;

    this.posService.register(pos).pipe(first()).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['/user/home']).then(r => r);
        }, error => {
          console.log(error);
        });
  }

    tcLinkClicked(): any {
      this.router.navigate(['/privacy']).then(r => r);
    }
}
