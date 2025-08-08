import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppReducer from './reducers';
import { BrandState } from '../models';

export const selectBrandsState = createFeatureSelector<BrandState>(AppReducer.vehicleFeatureKey);
export const selectVehicles = createSelector(selectBrandsState, (state: BrandState) => state?.brands);
