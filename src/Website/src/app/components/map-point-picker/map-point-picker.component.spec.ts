import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPointPickerComponent } from './map-point-picker.component';

describe('MapPointPickerComponent', () => {
  let component: MapPointPickerComponent;
  let fixture: ComponentFixture<MapPointPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapPointPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPointPickerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
