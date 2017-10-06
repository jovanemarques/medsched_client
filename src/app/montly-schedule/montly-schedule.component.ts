import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
//import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-montly-schedule',
  templateUrl: './montly-schedule.component.html',
  styleUrls: ['./montly-schedule.component.css'],
  styles: [
    `
    .red-cell {
      background-color: red !important;
    }
    .blue-cell {
      background-color: blue !important;
    }
  `
  ]
})
export class MontlyScheduleComponent {

  //view: string = 'month';
  viewDate: Date = new Date();
  holidays: number[] = [10, 19]; // call from some webservice

  private isHoliday(day){ // make a funcional function, maybe?
    let isHoliday = false;
    for(let holiday of this.holidays){
      if (holiday === day){
        return isHoliday = true;
      }
    }
    return isHoliday;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (day.isWeekend || this.isHoliday(day.date.getDate())) {
        //day.cssClass = 'red-cell';
        day.backgroundColor = 'rgb(254, 218, 218)';
      }
    });
  }

}
