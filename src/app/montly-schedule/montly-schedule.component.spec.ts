import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontlyScheduleComponent } from './montly-schedule.component';

describe('MontlyScheduleComponent', () => {
  let component: MontlyScheduleComponent;
  let fixture: ComponentFixture<MontlyScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontlyScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontlyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
