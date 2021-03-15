import { Component, EventEmitter, Input, Output } from '@angular/core';

/*
    A styled general purpose button
*/

@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})

export class BaseButtonComponent {

    @Input() disabled = false;
}
