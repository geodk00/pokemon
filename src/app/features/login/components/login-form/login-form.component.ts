import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";


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
    
    @Output() success: EventEmitter<void> = new EventEmitter();

    loading: boolean = false;

    loginForm: FormGroup = new FormGroup({
        trainerName: new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
        ])
    });

    constructor(private readonly localStorageService: LocalStorageService) {

    }

    get trainerName(): AbstractControl {
        return this.loginForm.get('trainerName')
    }

    onLoginClick(event) {
        const { trainerName } = this.loginForm.value
        this.loading = false;
        this.localStorageService.setTrainer(trainerName)
        this.loading = false;
        this.success.emit();
    }

}