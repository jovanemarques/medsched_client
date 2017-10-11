import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';
import { MaterializeModule } from 'angular2-materialize';
import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MontlyScheduleComponent } from './montly-schedule/montly-schedule.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MontlyScheduleComponent,
    DailyScheduleComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    CalendarModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
