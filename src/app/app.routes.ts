import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'brand/:makeName', component:  BrandInfoComponent }, // Assuming you have a BrandInfoComponent
  { path: '**', redirectTo: '' }
];
