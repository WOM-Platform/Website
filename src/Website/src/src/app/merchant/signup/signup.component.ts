import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-merchant-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class MerchantSignUpComponent implements OnInit {
  form: FormGroup;
  public signupInvalid: boolean;
  private returnUrl: string;

  countryList: string[] = ['a', 'b'];
  businessList: string[] = ['a', 'b'];

  posLon: string;
  posLat: string;
  termsConditionsChecked: boolean;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';

    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      merchantName: ['', Validators.required],
      fiscalCode: ['', Validators.required],
      merchantAddress: ['', !Validators.required],
      merchantCap: ['', !Validators.required],
      merchantCity: ['', !Validators.required],
      countries: ['', !Validators.required],
      businesses: ['', Validators.required],
      merchantWebsite: ['', !Validators.required],
      merchantDescription: ['', Validators.required],
      posName: ['', Validators.required],
      posLatitude: [{value: '', disabled: true}, Validators.required],
      posLongitude: [{value: '', disabled: true}, Validators.required],
      posUrl: ['', !Validators.required],
      termsConditionsCheckbox: ['', Validators.requiredTrue]
    });
  }

  async onSubmit(): Promise<void> {
  }
}
