import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusdrivesComponent } from './campusdrives.component';

describe('CampusdrivesComponent', () => {
  let component: CampusdrivesComponent;
  let fixture: ComponentFixture<CampusdrivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusdrivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusdrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
