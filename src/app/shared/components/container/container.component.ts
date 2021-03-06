import { Component } from '@angular/core';

/*
    A centering general purpose container
*/

@Component({
    selector: 'app-container',
    template: `<div class="container"><ng-content></ng-content></div>`,
    styles: [
        `.container {
            max-width: 75em;
            width: 100%;
            margin: 0 auto;
            padding: 0 1.5em;
        }`
    ]
})

export class AppContainerComponent {

}
