import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCtaComponent } from './pizza-cta.component';

describe('PizzaCtaComponent', () => {
  let component: PizzaCtaComponent;
  let fixture: ComponentFixture<PizzaCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaCtaComponent]
    });
    fixture = TestBed.createComponent(PizzaCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
