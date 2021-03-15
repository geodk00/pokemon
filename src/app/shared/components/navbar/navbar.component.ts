import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/features/login/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
/*
    The nav-bar at the top of the page
*/

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

    constructor(private readonly localStorageService: LocalStorageService, private readonly router: Router) {

    }

    get hasActiveSession(): boolean {
        return Boolean(this.localStorageService.getTrainer());
    }

    logout(): void {
        this.localStorageService.logout();
        this.router.navigateByUrl('/')
    }
}
