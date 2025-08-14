
import { Brand, BrandInfo, VehicleType } from "../models/brand";

export const mockBrandList: Brand[] = [
  { id: '1', name: 'Toyota' },
  { id: '2', name: 'Honda' }
]

export const mockBrandListResponse: any = [
  {
    Results: [
      { Make_ID: '1', Make_Name: 'Toyota' },
      { Make_ID: '2', Make_Name: 'Honda' }
    ]
  }
];

export const mockVehicleTypes: VehicleType[] = [
    { brandId: '1', vehicleTypeId: '1', vehicleTypeName: 'Sedan' },
    { brandId: '2', vehicleTypeId: '2', vehicleTypeName: 'SUV' }
]

export const mockVehicleTypesResponse: any = [
  {
    Results: [
      { VehicleTypeId: '1', VehicleTypeName: 'Sedan' },
      { VehicleTypeId: '2', VehicleTypeName: 'SUV' }
    ]
  }
]

export const mockBrandModelInfo: any = [
  { id: '1', name: 'Toyota', modelId: '101', modelName: 'Camry' },
  { id: '2', name: 'Honda', modelId: '102', modelName: 'Civic' }
];

export const mockBrandModelInfoResponse = [
  {
    Results: [
      { Make_ID: '1', Make_Name: 'Toyota', Model_ID: '101', Model_Name: 'Camry' },
      { Make_ID: '2', Make_Name: 'Honda', Model_ID: '102', Model_Name: 'Civic' }
    ]
  }
]

export const mockBrandInfo: BrandInfo = {
  vehicleType: mockVehicleTypes,
  brandModelInfo: mockBrandModelInfo
};
