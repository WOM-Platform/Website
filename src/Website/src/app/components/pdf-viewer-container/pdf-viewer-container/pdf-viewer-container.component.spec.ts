import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewerContainerComponent } from './pdf-viewer-container.component';

describe('PdfViewerContainerComponent', () => {
  let component: PdfViewerContainerComponent;
  let fixture: ComponentFixture<PdfViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfViewerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
