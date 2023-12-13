import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringCtaComponent } from './catering-cta.component';

describe('CateringCtaComponent', () => {
  let component: CateringCtaComponent;
  let fixture: ComponentFixture<CateringCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateringCtaComponent]
    });
    fixture = TestBed.createComponent(CateringCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
