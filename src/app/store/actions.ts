import { createAction, props } from "@ngrx/store";
import { Brand } from "../models";

export const LOAD_BRANDS = '[Items] Load Items';
export const LOAD_BRANDS_SUCCESS = '[Items] Load Items Success';
export const LOAD_BRANDS_FAILURE = '[Items] Load Items Failure';

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
