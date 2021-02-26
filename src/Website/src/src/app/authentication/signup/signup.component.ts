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

  public signupInvalid: boolean;
  private returnUrl: string;

  termsConditionsChecked: boolean;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private merchantService: MerchantService,
              private posService: PosService) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.formSubmit = this.fb.group({
      termsConditionsCheckbox: ['', Validators.requiredTrue]
    });
  }

  async onSubmit(): Promise<void> {
    if (!this.formSubmit.valid || !this.form.valid || !this.formMerchant.valid || !this.formPos.valid) {
      return;
    }
    const userData: UserRegistrationPayload = new UserRegistrationPayload() ;
    userData.email = this.form.controls.email.value;
    userData.name = this.form.controls.firstName.value;
    userData.password = this.form.controls.password.value;
    userData.surname = this.form.controls.lastName.value;

    const register = await this.userService.register(userData).pipe(first()).subscribe(
        result => {
        console.log(result);
        if (result.id !== null) {
          console.log(result);
          this.logIn(userData.email, userData.password);
        }
      }, error => {
        console.log(error);
      });
  }

  logIn(username: string, password: string): any {
    this.userService.login(username, password).pipe(first()).subscribe(
        result => {
          console.log(result);
          this.registerMerchant();
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
          this.registerPos(result.id);
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
}
