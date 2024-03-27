import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentStatsComponent } from './instrument-stats.component';

describe('InstrumentStatsComponent', () => {
  let component: InstrumentStatsComponent;
  let fixture: ComponentFixture<InstrumentStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
