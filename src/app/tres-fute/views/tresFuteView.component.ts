import { Component } from '@angular/core';
import { GridItem } from '../components/grid/grid';

@Component({
    selector: 'tres-fute',
    templateUrl: './tresFuteView.component.html',
    styleUrls: ['./tresFuteView.component.scss']
})
export class TresFuteViewComponent {
    elements: GridItem[] = [{ content: '2' }]
}