import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

/*
    Form used to register a trainer
    will emit 'success' when the trainer has
    been set or if the user is already "logged in"
*/


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

    @Output() loginSuccess: EventEmitter<void> = new EventEmitter();

    loginForm: FormGroup = new FormGroup({
        trainerName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
        ])
    });

    constructor(private readonly localStorageService: LocalStorageService) { }

    ngOnInit(): void {
        const existingTrainer = this.localStorageService.getTrainer();
        if (existingTrainer !== null) {
            this.loginSuccess.emit();
        }
    }

    get trainerName(): AbstractControl {
        return this.loginForm.get('trainerName');
    }

    get loading(): boolean {
        return this.localStorageService.loading;
    }

    get error(): string {
        return this.localStorageService.error;
    }

    onLoginClick(event): void {
        const { trainerName } = this.loginForm.value;
        this.localStorageService.setTrainer(trainerName);
        if (!this.error) {
            this.loginSuccess.emit();
        }
    }

}
