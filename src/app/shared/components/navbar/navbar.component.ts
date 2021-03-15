import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/features/login/services/local-storage/local-storage.service';

/*
    The nav-bar at the top of the page
*/

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    constructor(private readonly localStorageService: LocalStorageService) {

    }

    get hasActiveSession(): boolean {
        return Boolean(this.localStorageService.getTrainer());
    }

}
