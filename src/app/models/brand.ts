export interface Brand {
  id: string;
  name: string;
}

export interface BrandModelInfo extends Brand {
  modelId: string;
  modelName: string;
}

export interface VehicleType {
  brandId: string;
  vehicleTypeId: string;
  vehicleTypeName: string;
}

export interface BrandInfo{
  vehicleType: VehicleType[];
  brandModelInfo: BrandModelInfo[];
}
