import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandListComponent } from './brand-list.component';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { mockBrandList } from '../test-models/brand-mocked';
import { signal } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { initialBrandState } from '../store/reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BrandListComponent', () => {
  let component: BrandListComponent;
  let fixture: ComponentFixture<BrandListComponent>;
  let vehicleService: VehicleService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandListComponent, NoopAnimationsModule],
      providers: [
        provideMockStore({ initialState: initialBrandState }),
        {
          provide: VehicleService,
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandListComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.inject(VehicleService);
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load brands from observable on init', () => {
    const spyOnBrandsObservable = spyOnProperty(vehicleService, 'brands$').and.returnValue(of(mockBrandList));

    component.ngOnInit();

    expect(spyOnBrandsObservable).toHaveBeenCalled();
    expect(component.brands()).toEqual(mockBrandList);
  });

  it('should call service to get brands list if no brands are loaded', () => {
    const spyOnGetBrandList = spyOn(vehicleService, 'getBrandsList');
    spyOnProperty(vehicleService, 'brands$').and.returnValue(of([]));
    spyOnProperty(vehicleService, 'brands').and.returnValue(signal(mockBrandList));

    component.ngOnInit();

    expect(spyOnGetBrandList).toHaveBeenCalled();
  });

  it('should filter brands based on search input', () => {
    component.brands = signal(mockBrandList);
    component.updateSearch('ho');

    expect(component.filteredBrands.length).toBe(1);
    expect(component.filteredBrands[0].name).toBe('Honda');
    expect(component.filteredBrands[0].id).toBe('2');
  });

  it('should navigate to brand info on goToBrandInfo', () => {
    const brand = { id: '1', name: 'Toyota' };
    component.goToBrandInfo(brand);

    expect(component.showList).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['brand', brand.id]);
  });
});
