import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbinoComponent } from './urbino.component';

describe('UrbinoComponent', () => {
  let component: UrbinoComponent;
  let fixture: ComponentFixture<UrbinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
