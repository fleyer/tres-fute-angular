import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from '../base/base.component';
import { GridItem } from './grid';
import { GridComponent } from './grid.component';

describe('Base component', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                GridComponent,
                BaseComponent
            ],
        }).compileComponents();
    });

    it('should create the base component', () => {
        const fixture = TestBed.createComponent(GridComponent);
        const gridCmp = fixture.componentInstance;
        expect(gridCmp).toBeTruthy();
    });

      it('should render empty grid component', () => {
        const fixture = TestBed.createComponent(GridComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;

        const items = compiled.querySelector('.gridContainer .gridItem')
        expect(items).toBeNull();
      });

      it('should render grid component items', () => {
        const fixture = TestBed.createComponent(GridComponent);
        const gridCmp = fixture.componentInstance
        const compiled = fixture.nativeElement as HTMLElement;

        gridCmp.elements = [ {content: 'test'} ]

        fixture.detectChanges();

        const items = compiled.querySelector('.gridItem')
        expect(items).not.toBeNull();
      });

      it('should render grid component items - using directive', () => {
        const fixture = TestBed.createComponent(GridComponent);
        const gridCmp = fixture.componentInstance

        gridCmp.elements = [ {content: 'test'} ]

        fixture.detectChanges();

        const items = fixture.debugElement.query(By.directive(BaseComponent))
        expect(items).not.toBeNull();
      });
});
