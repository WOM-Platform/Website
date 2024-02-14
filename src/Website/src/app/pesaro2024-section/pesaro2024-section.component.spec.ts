import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesaro2024SectionComponent } from './pesaro2024-section.component';

describe('Pesaro2024SectionComponent', () => {
  let component: Pesaro2024SectionComponent;
  let fixture: ComponentFixture<Pesaro2024SectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pesaro2024SectionComponent]
    });
    fixture = TestBed.createComponent(Pesaro2024SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
