import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'brand-list', component: AppComponent, pathMatch: 'full' },
  { path: 'brand-info', component: VehicleInfoComponent, pathMatch: 'full' },
];
