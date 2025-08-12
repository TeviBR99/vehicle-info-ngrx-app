import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './actions';
import { Brand, BrandInfo } from '../models/brand';

export const vehicleFeatureKey = 'vehicleReducer';
export interface BrandState {
    brands: Brand[];
    brandInfo: BrandInfo;
    httpResult: { action: string; error?: unknown };
}

export const initialBrandState: BrandState = {
  brands: [],
  brandInfo: {} as BrandInfo,
  httpResult: { action: '' },
};

export const appReducer = createReducer(
  initialBrandState,
  on(AppActions.loadBrandListSuccess, (state, { brands }) => ({
    ...state,
    brands: [...brands],
  })),

  on(AppActions.loadBrandInfoSuccess, (state, { brandInfo }) => ({
    ...state,
    brandInfo: brandInfo,
  }))
);



