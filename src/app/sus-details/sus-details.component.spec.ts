import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusDetailsComponent } from './sus-details.component';

describe('SusDetailsComponent', () => {
  let component: SusDetailsComponent;
  let fixture: ComponentFixture<SusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
