import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-forms-user',
    templateUrl: './forms-user.directive.html',
    styleUrls: ['./forms-user.directive.css', '../forms.directive.css']
})
export class UserFormComponent implements OnInit {
    posLon: string;
    posLat: string;

    @Input() form: FormGroup;
    @Output() formChange = new EventEmitter<FormGroup>();
    constructor(private fb: FormBuilder){}

    ngOnInit(): any {
        this.form = this.fb.group({
            email: ['', Validators.email],
            password: ['', Validators.required],
            passwordRepeat: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required]
        });

        this.form.get('email').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('password').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('passwordRepeat').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('firstName').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('lastName').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }
}
