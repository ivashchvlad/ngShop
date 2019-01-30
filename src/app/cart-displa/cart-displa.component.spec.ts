import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDisplaComponent } from './cart-displa.component';

describe('CartDisplaComponent', () => {
  let component: CartDisplaComponent;
  let fixture: ComponentFixture<CartDisplaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDisplaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDisplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
