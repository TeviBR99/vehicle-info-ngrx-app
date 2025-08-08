import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './actions';
import { BrandState } from '../models';


export const vehicleFeatureKey = 'vehicleReducer';

export const initialBrandState: BrandState = {
    brands: [],
    httpResult: { action: '' },
};


export const appReducer = createReducer(
  initialBrandState,
  on(AppActions.loadBrandListSuccess, (state, { brands }) => ({
    ...state,
    brands: [...brands],
  }))
  // Add more on() handlers for other actions
);


