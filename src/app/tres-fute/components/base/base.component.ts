import { Component, Input } from '@angular/core';

@Component({
    selector: 'baseItem',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseComponent {

    checked : Boolean = false;
    @Input() content : string | undefined 

    onClick(){
        console.log('on click')

        this.checked = !this.checked;
    }
}