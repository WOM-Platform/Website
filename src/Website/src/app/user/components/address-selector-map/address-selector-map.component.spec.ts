import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSelectorMapComponent } from './address-selector-map.component';

describe('AddressSelectorMapComponent', () => {
  let component: AddressSelectorMapComponent;
  let fixture: ComponentFixture<AddressSelectorMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressSelectorMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressSelectorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
