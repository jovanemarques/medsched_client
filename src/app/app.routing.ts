import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MainComponent } from './main/main.component';
import { MontlyScheduleComponent } from './montly-schedule/montly-schedule.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';

const APP_ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'daily', component: DailyScheduleComponent },
  { path: 'monthy', component: MontlyScheduleComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
