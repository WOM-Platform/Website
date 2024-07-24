import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {LoadingService} from "../../../_services/loading.service";
import {UserService} from "../../../_services";
import {User} from "../../../_models";
import {StorageService} from "../../../_services/storage.service";

@Component({
    selector: 'app-user-form',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgClass,
        NgIf
    ],
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
    @Input() userToEdit: User | null = null;
    @Input() isRoleAccessRequired: boolean = false
    @Output() userSaved: EventEmitter<any> = new EventEmitter<any>()

    userForm: FormGroup
    isLoading: boolean = false
    errorMessage: string = "";

    currentUser

    constructor(private cd: ChangeDetectorRef,
                private fb: FormBuilder,
                private loadingService: LoadingService,
                private storageService: StorageService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.currentUser = this.storageService.loadCurrentUser();
        this.userForm = this.fb.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', this.passwordValidator],
            roleUser: ['User'],
        });

        if (this.isRoleAccessRequired) {
            this.userForm.addControl('roleAccess', this.fb.control('User'))
        }
        if (!this.userToEdit) {
            this.userForm.get('password')?.setValidators([Validators.required, Validators.minLength(8)]);
        } else {
            this.userForm.patchValue({
                name: this.userToEdit.name,
                surname: this.userToEdit.surname,
                email: this.userToEdit.email,
                roleUser: this.userToEdit.role,
            });
        }
    }

    // the password has to be 8 char min if set
    passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value && control.value.length < 8) {
            return {'minlength': true};
        }
        return null;
    }


    onSave() {

        if (this.userForm.valid) {
            this.isLoading = true;
            const user: User = {
                ...this.userForm.value,
                id: this.userToEdit ? this.userToEdit.id : ''
            };

            const changedValues = this.getChangedValues(this.userToEdit, this.userForm.value);

            const request$ = this.userToEdit
                ? this.userService.userEdit(user.id, changedValues)
                : this.userService.userCreate(user.name, user.surname, user.email, user.password, user.role);

            request$.subscribe({
                next: (savedUser) => {
                    this.userSaved.emit(savedUser);
                    this.isLoading = false;
                },
                error: (err) => {
                    this.errorMessage = "Failed to save user: " + err;
                    this.isLoading = false;
                    this.cd.markForCheck();
                }
            });
        }
    }

    getChangedValues(initialValues: any, currentValues: any): any {
        const changedValues: any = {};

        for (const key in currentValues) {
            if (initialValues[key] !== currentValues[key]) {
                changedValues[key] = currentValues[key];
            }
        }
        return changedValues;
    }
}
