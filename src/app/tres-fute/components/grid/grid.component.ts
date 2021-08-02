import { Component, Input } from "@angular/core";
import { GridItem } from "./grid";


@Component({
    selector: 'grid',
    templateUrl: 'grid.component.html'
})
export class GridComponent {
    @Input() public elements : GridItem[] = []
}