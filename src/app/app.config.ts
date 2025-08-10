import { Brand } from './models/index';
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { VehicleApiService } from './services/vehicle-api.service';
import { VehicleService } from './services/vehicle.service';
import { AppEffects } from './store/effects';
import { provideHttpClient } from '@angular/common/http';
import * as BrandReducer from './store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ [BrandReducer.vehicleFeatureKey]: BrandReducer.appReducer }),
    provideEffects([AppEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(),
  ],

};

