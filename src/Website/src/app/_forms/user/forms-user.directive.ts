import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-forms-user',
    templateUrl: './forms-user.directive.html',
    styleUrls: ['./forms-user.directive.css', '../forms.directive.css']
})
export class UserFormComponent implements OnInit, OnChanges {
    posLon: string;
    posLat: string;

    @Input() form: FormGroup;
    @Input() disabled: boolean;
    @Output() formChange = new EventEmitter<FormGroup>();
    constructor(private fb: FormBuilder){}

    ngOnInit(): any {
        this.form = this.fb.group({
            email: [{value: '', disabled: this.disabled}, Validators.email],
            password: [{value: '', disabled: this.disabled}, Validators.required],
            passwordRepeat: [{value: '', disabled: this.disabled}, Validators.required],
            firstName: [{value: '', disabled: this.disabled}, Validators.required],
            lastName: [{value: '', disabled: this.disabled}, Validators.required]
        });

        this.form.get('email').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('password').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('passwordRepeat').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('firstName').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('lastName').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }

    ngOnChanges(changes: SimpleChanges): any {
        console.log('changed');
        if (this.disabled) {
            this.form.controls.email.disable();
            this.form.controls.password.disable();
            this.form.controls.passwordRepeat.disable();
            this.form.controls.firstName.disable();
            this.form.controls.lastName.disable();
        }
    }
}
