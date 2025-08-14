import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandInfoComponent } from './brand-info.component';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { initialBrandState } from '../store/reducers';
import { of } from 'rxjs';
import { mockBrandInfo, mockBrandList } from '../test-models/brand-mocked';
import { Signal, signal } from '@angular/core';
import { BrandInfo } from '../models/brand';

describe('BrandInfoComponent', () => {
  let component: BrandInfoComponent;
  let fixture: ComponentFixture<BrandInfoComponent>;
  let vehicleService: VehicleService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandInfoComponent],
      providers: [
        provideMockStore({ initialState: initialBrandState }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ makeID: '123' })
          }
        },
        {
          provide: VehicleService,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BrandInfoComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.inject(VehicleService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the ID from the route', () => {
    let mockSignal: Signal<BrandInfo> = signal(mockBrandInfo)
    spyOnProperty(vehicleService, 'brandInfo').and.returnValue(mockSignal);
    component.ngOnInit();
    expect(component.brandInfo()).toBe(mockBrandInfo);
  });

  it('should goBack', () => {
    const spyOnBack = spyOn(window.history, 'back');
    component.goBack();
    expect(spyOnBack).toHaveBeenCalled();
  });
});
