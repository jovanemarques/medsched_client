import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

  viewDate: Date = new Date();
  dayStartHour: Number = 8;
  dayEndHour: Number = 17;

  constructor() { }

  ngOnInit() {
  }

}
