import * as brandSelectors from './selectors';
import * as brandReducer from './reducers';
import { BrandState } from './reducers';
import { mockBrandInfo, mockBrandList } from '../test-models/brand-mocked';

describe('Brand Selectors', () => {

  const mockState: BrandState = {
    brands: mockBrandList,
    brandInfo: mockBrandInfo,
    httpResult: { action: 'load' }
  };

  const stateInput = {
    [brandReducer.vehicleFeatureKey]: mockState
  };

  it('selectBrandsState should return the brand feature state', () => {
    const result = brandSelectors.selectBrandsState(stateInput);
    expect(result).toEqual(mockState);
  });

  it('selectVehicles should return the list of brands', () => {
    const result = brandSelectors.selectVehicles(stateInput);
    expect(result).toEqual(mockBrandList);
  });

  it('selectBrandInfo should return the current brand info', () => {
    const result = brandSelectors.selectBrandInfo(stateInput);
    expect(result).toEqual(mockState.brandInfo);
  });
});
