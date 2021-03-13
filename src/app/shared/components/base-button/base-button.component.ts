import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-base-button',
    templateUrl: './base-button.component.html',
    styleUrls: ['./base-button.component.css']
})

export class BaseButtonComponent {

    @Input() disabled: boolean = false;
    @Output() onClick: EventEmitter<any> = new EventEmitter();

    onClickButton(event) {
        console.log('click')
        this.onClick.emit(event);
    }
}