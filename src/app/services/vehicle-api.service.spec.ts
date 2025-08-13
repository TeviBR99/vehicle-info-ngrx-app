import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VehicleApiService } from './vehicle-api.service';
import { mockBrandInfo, mockBrandList, mockBrandListResponse, mockBrandModelInfo, mockBrandModelInfoResponse, mockVehicleTypes, mockVehicleTypesResponse } from '../test-models/brand-mocked';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('VehicleApiService', () => {
  let service: VehicleApiService;
  let httpClient: HttpClient;
  let spyOnHttpClient: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [VehicleApiService, provideHttpClient(withInterceptorsFromDi())],
    });

    service = TestBed.inject(VehicleApiService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of brands', (done) => {
    spyOn(service, 'getBrandsList').and.returnValue(of(mockBrandList))
    spyOn(httpClient, 'get').and.returnValue(of(mockBrandListResponse));

    service.getBrandsList('json').subscribe(brands => {
      expect(brands).toBeDefined();
      expect(brands.length).toBeGreaterThan(0);
      expect(brands).toEqual(mockBrandList);
      done();
    });

  });

  it('should return vehicle types for a make', (done) => {
    spyOn(service, 'getVehicleTypesForMake').and.returnValue(of(mockVehicleTypes))
    spyOn(httpClient, 'get').and.returnValue(of(mockVehicleTypesResponse));
    service.getVehicleTypesForMake('123').subscribe(types => {
      expect(types).toBeDefined();
      expect(types.length).toBeGreaterThan(0);
      expect(types).toEqual(mockVehicleTypes);
      done();
    });

  });

  it('should return models for a make', (done) => {
    spyOn(service, 'getModelsForMake').and.returnValue(of(mockBrandModelInfo))
    spyOn(httpClient, 'get').and.returnValue(of(mockBrandModelInfoResponse))
    service.getModelsForMake('1').subscribe(models => {
      expect(models).toBeDefined();
      expect(models.length).toBeGreaterThan(0);
      expect(models).toEqual(mockBrandModelInfo);
      done();
    });
  });

  it('should return combined brand info', (done) => {
    spyOn(service, 'getVehicleTypesForMake').and.returnValue(of(mockVehicleTypes))
    spyOn(service, 'getModelsForMake').and.returnValue(of(mockBrandModelInfo))
    spyOn(service, 'getBrandInfo').and.returnValue(of(mockBrandInfo))

    service.getBrandInfo('1').subscribe(info => {
      expect(info).toBeDefined();
      expect(info.vehicleType.length).toBe(2);
      expect(info.brandModelInfo.length).toBe(2);
      expect(info.vehicleType[0].vehicleTypeName).toBe('Sedan');
      expect(info.brandModelInfo[0].modelName).toBe('Camry');
      done();
    });

  });
});
