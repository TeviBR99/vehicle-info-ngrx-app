import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppReducer from './reducers';
import { BrandState } from "./reducers";

export const selectBrandsState = createFeatureSelector<BrandState>(AppReducer.vehicleFeatureKey);
export const selectVehicles = createSelector(selectBrandsState, (state: BrandState) => state?.brands);
export const selectBrandInfo = createSelector(selectBrandsState, (state: BrandState) => state?.brandInfo);
