import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchatsTabComponent } from './merchats-tab.component';

describe('MerchatsTabComponent', () => {
  let component: MerchatsTabComponent;
  let fixture: ComponentFixture<MerchatsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchatsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerchatsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
