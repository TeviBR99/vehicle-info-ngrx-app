import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { BrandListComponent } from './brand-list/brand-list.component';

export const routes: Routes = [
  { path: '', component: BrandListComponent},
  { path: 'brand/:makeID', component:  BrandInfoComponent }, // Assuming you have a BrandInfoComponent
  { path: '**', redirectTo: '' }
];
