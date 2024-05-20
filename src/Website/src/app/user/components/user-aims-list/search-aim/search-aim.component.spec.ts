import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAimComponent } from './search-aim.component';

describe('SearchAimComponent', () => {
  let component: SearchAimComponent;
  let fixture: ComponentFixture<SearchAimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
