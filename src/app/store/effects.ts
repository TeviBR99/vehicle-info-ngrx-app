import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AppActions from './actions';
import { VehicleApiService } from '../services/vehicle-api.service';

@Injectable()
export class AppEffects {

  private actions$ = inject(Actions);
  private vehicleService = inject(VehicleApiService);

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadBrandList),
      mergeMap(({docType}) =>
        this.vehicleService.getBrandsList(docType).pipe(
          map(brands => AppActions.loadBrandListSuccess({ brands })),
          catchError(error => of(AppActions.loadBrandListError({ error })))
        )
      )
    )
  );
}
