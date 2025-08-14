import { TestBed } from '@angular/core/testing';

import { VehicleService } from './vehicle.service';
import { provideMockStore } from '@ngrx/store/testing';
import { initialBrandState } from '../store/reducers';
import { loadBrandInfo, loadBrandList } from '../store/actions';

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

  it('should dispatch loadBrandList action', () => {
    spyOn(service['store'], 'dispatch');
    service.getBrandsList();
    expect(service['store'].dispatch).toHaveBeenCalledWith(loadBrandList({ docType: 'JSON' }));
  });

  it('should return brands as an observable', () => {
    const brands$ = service.brands$;
    expect(brands$).toBeDefined();
  });

  it('should return brands as a signal', () => {
    const brandsSignal = service.brands;
    expect(brandsSignal).toBeDefined();
  });

  it('should dispatch loadBrandInfo action with brandId', () => {
    const brandId = '123';
    spyOn(service['store'], 'dispatch');
    service.getBrandInfo(brandId);
    expect(service['store'].dispatch).toHaveBeenCalledWith(loadBrandInfo({ id: brandId }));
  });

  it('should return brandInfo as an observable', () => {
    const brandInfo$ = service.brandInfo$;
    expect(brandInfo$).toBeDefined();
  });

  it('should return brandInfo as a signal', () => {
    const brandInfoSignal = service.brandInfo;
    expect(brandInfoSignal).toBeDefined();
  });
});
