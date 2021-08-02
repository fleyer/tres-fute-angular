import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from './base.component';

describe('Base component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BaseComponent
      ],
    }).compileComponents();
  });

  it('should create the base component', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const baseCmp = fixture.componentInstance;
    expect(baseCmp).toBeTruthy();
  });

  it('should render empty base component', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.baseContainer .innerComponent .content')?.innerHTML).toBe('');
  });

  it('should render base component with content', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const baseCmp = fixture.componentInstance

    fixture.debugElement.query(By.css('.baseContainer')).triggerEventHandler('click',null)
    
    expect(baseCmp.checked).toBeTrue();
  });
});
