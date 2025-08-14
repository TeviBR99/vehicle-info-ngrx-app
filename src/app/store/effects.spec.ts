import { Brand } from './../models/brand';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { AppEffects } from './effects';
import * as AppActions from './actions';
import { VehicleApiService } from '../services/vehicle-api.service';
import { mockBrandList } from '../test-models/brand-mocked';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let vehicleApiService: VehicleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        { provide: VehicleApiService},
        provideHttpClient(withInterceptorsFromDi())
      ]
    });

    effects = TestBed.inject(AppEffects);
    vehicleApiService = TestBed.inject(VehicleApiService);
  });

  it('should dispatch loadBrandListSuccess on successful brand list load', (done) => {
    spyOn(vehicleApiService, 'getBrandsList').and.returnValue(of(mockBrandList));

    actions$ = of(AppActions.loadBrandList({ docType: 'JSON' }));

    effects.loadBrandList$.subscribe(action => {
      expect(action).toEqual(AppActions.loadBrandListSuccess({ brands: mockBrandList }));
      done();
    });
  });

  it('should dispatch loadBrandListError on failed brand list load', (done) => {
    const mockError = new Error('Failed to load');
     spyOn(vehicleApiService, 'getBrandsList').and.returnValue(throwError(() => mockError));

    actions$ = of(AppActions.loadBrandList({ docType: 'JSON' }));

    effects.loadBrandList$.subscribe(action => {
      expect(action).toEqual(AppActions.loadBrandListError({ error: mockError }));
      done();
    });
  });
});
