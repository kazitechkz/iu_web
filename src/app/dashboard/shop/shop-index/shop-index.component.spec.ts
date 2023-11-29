import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIndexComponent } from './shop-index.component';

describe('ShopIndexComponent', () => {
  let component: ShopIndexComponent;
  let fixture: ComponentFixture<ShopIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopIndexComponent]
    });
    fixture = TestBed.createComponent(ShopIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
