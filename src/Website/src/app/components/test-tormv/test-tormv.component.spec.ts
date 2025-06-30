import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTormvComponent } from './test-tormv.component';

describe('TestTormvComponent', () => {
  let component: TestTormvComponent;
  let fixture: ComponentFixture<TestTormvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTormvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTormvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
