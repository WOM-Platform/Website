import {Component, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {EmailData} from "../../_models/emailData";

@Component({
    selector: 'app-forms-contact',
    templateUrl: './forms-contact.directive.html',
    styleUrls: ['./forms-contact.directive.css', '../forms.directive.css']
})
export class ContactFormComponent implements OnInit {
    @Input() form: UntypedFormGroup;
    @Output() formChange = new EventEmitter<UntypedFormGroup>();
    constructor(private fb: UntypedFormBuilder){}

    ngOnInit(): any {
        this.form = this.fb.group({
            senderName: ['', Validators.required],
            senderEmail: ['', Validators.email],
            subject: ['', Validators.required],
            content: ['', Validators.required]
        });

        this.form.get('senderName').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('senderEmail').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('subject').valueChanges.subscribe(value => this.formChange.emit(this.form));
        this.form.get('content').valueChanges.subscribe(value => this.formChange.emit(this.form));
    }
}
