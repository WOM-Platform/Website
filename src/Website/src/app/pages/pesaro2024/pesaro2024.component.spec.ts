import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesaro2024Component } from './pesaro2024.component';

describe('Pesaro2024Component', () => {
  let component: Pesaro2024Component;
  let fixture: ComponentFixture<Pesaro2024Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pesaro2024Component]
    });
    fixture = TestBed.createComponent(Pesaro2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
