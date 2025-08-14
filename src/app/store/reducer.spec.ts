import { appReducer, initialBrandState, BrandState } from './reducers';
import * as AppActions from './actions';
import { Brand, BrandInfo } from '../models/brand';
import { mockBrandInfo, mockBrandList } from '../test-models/brand-mocked';

describe('App Reducer', () => {
  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'UNKNOWN' } as any;
    const state = appReducer(undefined, action);
    expect(state).toEqual(initialBrandState);
  });

  it('should load brands on loadBrandListSuccess', () => {

    const action = AppActions.loadBrandListSuccess({ brands: mockBrandList });
    const state = appReducer(initialBrandState, action);

    expect(state.brands).toEqual(mockBrandList);
    expect(state.brands.length).toBe(mockBrandList.length);
  });

  it('should load brand info on loadBrandInfoSuccess', () => {
    const action = AppActions.loadBrandInfoSuccess({ brandInfo: mockBrandInfo });
    const state = appReducer(initialBrandState, action);

    expect(state.brandInfo).toEqual(mockBrandInfo);
    expect(state.brandInfo.brandModelInfo.length).toBe(mockBrandInfo.brandModelInfo.length);
  });
});
