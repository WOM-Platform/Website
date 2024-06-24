import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiditySliderComponent } from './validity-slider.component';

describe('ValiditySliderComponent', () => {
  let component: ValiditySliderComponent;
  let fixture: ComponentFixture<ValiditySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiditySliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiditySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
