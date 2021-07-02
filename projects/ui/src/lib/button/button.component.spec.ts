import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';

fdescribe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      imports:[MatButtonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should use an @angular/material mat-raised-button', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('button[mat-raised-button]')
      ).toBeTruthy();
  });

  it('should public @input color property', () => {
    fixture.detectChanges();
    expect(component.color).toBe('primary');
  });

  it('should reflect color property value in button color attribute', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('button[mat-raised-button][ng-reflect-color=primary]')
      ).toBeTruthy();

    component.color = 'accent';
    fixture.detectChanges();

    expect(
      compiled.querySelector('button[mat-raised-button][ng-reflect-color=accent]')
      )
      .toBeTruthy();
  });

  it('should have a 5 pixel margin', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const margin =  window.getComputedStyle(compiled).margin;
    expect(margin).toBe('5px');

  });

});
