import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoStoresComponent } from './logo-stores.component';

describe('LogoStoresComponent', () => {
  let component: LogoStoresComponent;
  let fixture: ComponentFixture<LogoStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
