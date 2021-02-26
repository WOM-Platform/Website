import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {Merchant, PosRegistration, User, UserRegistrationPayload} from '../../_models';
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

  countryList: string[] = ['a', 'b'];
  businessList: string[] = ['a', 'b'];

  posLon: string;
  posLat: string;
  termsConditionsChecked: boolean;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private merchantService: MerchantService,
              private posService: PosService) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.formMerchant = this.fb.group({
      name: ['', Validators.required],
      fiscalCode: ['', Validators.required],
      address: ['', !Validators.required],
      cap: ['', !Validators.required],
      city: ['', !Validators.required],
      country: ['', !Validators.required],
      primaryActivityType: ['', Validators.required],
      url: ['', !Validators.required],
      description: ['', Validators.required],
    });

    this.formPos = this.fb.group({
      name: ['', Validators.required],
      latitude: [{value: '', disabled: true}, Validators.required],
      longitude: [{value: '', disabled: true}, Validators.required],
      url: ['', !Validators.required]
    });

    this.formSubmit = this.fb.group({
      termsConditionsCheckbox: ['', Validators.requiredTrue]
    });
  }

  async onSubmit(): Promise<void> {
    const userData: UserRegistrationPayload = new UserRegistrationPayload() ;
    userData.email = this.form.value.email;
    userData.name = this.form.value.name;
    userData.password = this.form.value.password;
    userData.surname = this.form.value.surname;

    const register = await this.userService.register(userData).pipe(first()).subscribe(
        result => {
        console.log(result);
        if (result.id !== null) {
          console.log(result);
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
    merchant.fiscalCode = this.formMerchant.value.fiscalCode;
    merchant.url = this.formMerchant.value.url;
    merchant.description = this.formMerchant.value.description;
    merchant.country = this.formMerchant.value.country;
    merchant.city = this.formMerchant.value.city;
    merchant.zipCode = this.formMerchant.value.zipCode;
    merchant.address = this.formMerchant.value.address;
    merchant.primaryActivityType = this.formMerchant.value.primaryActivityType;
    merchant.name = this.formMerchant.value.name;

    this.merchantService.register(merchant).pipe(first()).subscribe(
        result => {
          this.registerPos(result.id);
        }, error => {
          console.log(error);
        });
  }

  registerPos(merchantId: string): any {
    const pos: PosRegistration = new PosRegistration();
    pos.url = this.formPos.value.url;
    pos.longitude = this.formPos.value.longitude;
    pos.latitude = this.formPos.value.latitude;
    pos.name = this.formPos.value.name;
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
