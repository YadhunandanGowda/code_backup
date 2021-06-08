import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutpopupComponent } from './checkoutpopup.component';

describe('CheckoutpopupComponent', () => {
  let component: CheckoutpopupComponent;
  let fixture: ComponentFixture<CheckoutpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
