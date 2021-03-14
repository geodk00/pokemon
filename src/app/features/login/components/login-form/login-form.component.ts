import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";


@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
    
    @Output() success: EventEmitter<void> = new EventEmitter();

    loginForm: FormGroup = new FormGroup({
        trainerName: new FormControl('',[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
        ])
    });

    constructor(private readonly localStorageService: LocalStorageService) {

    }

    ngOnInit(): void {
        const existingTrainer = this.localStorageService.getTrainer()
        if (existingTrainer !== null) {
            this.success.emit()
        }
        
    }

    get trainerName(): AbstractControl {
        return this.loginForm.get('trainerName')
    }

    get loading(): boolean {
        return this.localStorageService.loading;
    }

    get error(): string {
        return this.localStorageService.error;
    }

    onLoginClick(event) {
        const { trainerName } = this.loginForm.value
        this.localStorageService.setTrainer(trainerName)
        if (!this.error) {
            this.success.emit();
        }
    }

}