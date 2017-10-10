import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MontlyScheduleComponent } from './montly-schedule/montly-schedule.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';

const APP_ROUTES: Routes = [
  { path: '', component: MontlyScheduleComponent },
  { path: 'daily', component: DailyScheduleComponent },
  { path: 'monthy', component: MontlyScheduleComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
