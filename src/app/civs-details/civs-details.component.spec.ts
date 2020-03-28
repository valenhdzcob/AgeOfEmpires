import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivsDetailsComponent } from './civs-details.component';

describe('CivsDetailsComponent', () => {
  let component: CivsDetailsComponent;
  let fixture: ComponentFixture<CivsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
