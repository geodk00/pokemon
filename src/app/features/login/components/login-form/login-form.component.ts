import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styles: [
        `label, input {
            display: block;
            width: 100%;
            margin-bottom: 1em;
        }
        `
    ]
})

export class LoginFormComponent {
     loading: boolean = false;

    loginForm: FormGroup = new FormGroup({
        trainerName: new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
        ])
    });

    get trainerName(): AbstractControl {
        return this.loginForm.get('trainerName')
    }

    onLoginClick() {
        console.log(this.loginForm.value)
        this.loading = false;
    }
}