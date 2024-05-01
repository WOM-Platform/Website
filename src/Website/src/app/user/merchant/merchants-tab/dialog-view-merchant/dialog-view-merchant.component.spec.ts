import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewMerchantComponent } from './dialog-view-merchant.component';

describe('DialogViewMerchantComponent', () => {
  let component: DialogViewMerchantComponent;
  let fixture: ComponentFixture<DialogViewMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogViewMerchantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogViewMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
