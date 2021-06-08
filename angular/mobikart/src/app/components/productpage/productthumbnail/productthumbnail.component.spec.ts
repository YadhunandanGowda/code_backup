import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductthumbnailComponent } from './productthumbnail.component';

describe('ProductthumbnailComponent', () => {
  let component: ProductthumbnailComponent;
  let fixture: ComponentFixture<ProductthumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductthumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductthumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
