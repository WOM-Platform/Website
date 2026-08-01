import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PeopleMapFeatureComponent } from "./people-map-feature.component";

describe("PeopleMapFeatureComponent", () => {
  let component: PeopleMapFeatureComponent;
  let fixture: ComponentFixture<PeopleMapFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleMapFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleMapFeatureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
