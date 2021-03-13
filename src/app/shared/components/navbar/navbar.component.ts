import { Component } from "@angular/core";
import { LocalStorageService } from "src/app/features/login/services/local-storage/local-storage.service";

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class navbarComponent {

    constructor(private readonly localStorageService: LocalStorageService) {

    }

    get hasActiveSession(): boolean {
        return Boolean(this.localStorageService.getTrainer());
    }

}