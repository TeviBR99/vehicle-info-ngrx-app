import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { provideMockStore } from '@ngrx/store/testing';
import { initialBrandState } from '../store/reducers';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleService,
        provideMockStore({ initialState: initialBrandState }),
      ]
    });
    service = TestBed.inject(VehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
