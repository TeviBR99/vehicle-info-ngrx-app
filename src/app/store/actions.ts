import { createAction, props } from "@ngrx/store";
import { Brand, BrandInfo } from "../models/brand";

export const LOAD_BRANDS = '[Brands] Load Brands';
export const LOAD_BRANDS_SUCCESS = '[Brands] Load Brands Success';
export const LOAD_BRANDS_FAILURE = '[Brands] Load Brands Failure';

export const LOAD_BRAND_INFO = '[Brands] Load Brand Info';
export const LOAD_BRAND_INFO_SUCCESS = '[Brands] Load Brand Info Success';
export const LOAD_BRAND_INFO_ERROR = '[Brands] Load Brand Info Failure';

export const loadBrandList = createAction(
  LOAD_BRANDS,
  props<{docType: string }>()
);

export const loadBrandListSuccess = createAction(
  LOAD_BRANDS_SUCCESS,
  props<{brands: Brand[] }>()
);

export const loadBrandListError = createAction(
  LOAD_BRANDS_FAILURE,
  props<{error: unknown }>()
);

export const loadBrandInfo = createAction(
  LOAD_BRAND_INFO,
  props<{id: string }>()
);

export const loadBrandInfoSuccess = createAction(
  LOAD_BRAND_INFO_SUCCESS,
  props<{brandInfo: BrandInfo}>()
);

export const loadBrandInfoError = createAction(
  LOAD_BRAND_INFO_ERROR,
  props<{error: unknown}>()
);
