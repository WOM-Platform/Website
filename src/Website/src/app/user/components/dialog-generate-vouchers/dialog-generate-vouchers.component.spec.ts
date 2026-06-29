import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGenerateVouchersComponent } from './dialog-generate-vouchers.component';

describe('DialogGenerateVouchersComponent', () => {
  let component: DialogGenerateVouchersComponent;
  let fixture: ComponentFixture<DialogGenerateVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogGenerateVouchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGenerateVouchersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
