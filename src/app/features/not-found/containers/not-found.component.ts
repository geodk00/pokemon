import { Component } from '@angular/core';

@Component({
    selector: 'app-not-found',
    template: `<app-container><a routerLink="/">Back to safey</a></app-container>`,
    styles: [`a { font-size: 3em; text-align: center; display: block}`]
})

export class NotFoundComponent {

}
