import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Brand, BrandInfo, BrandModelInfo, VehicleType } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {

  private readonly apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'; // Replace with actual API URL

  constructor(private readonly httpClient: HttpClient) { }

  public getBrandsList(docType: string): Observable<Brand[]> {
    const params = {
      format: docType
    }
    return this.httpClient.get<any>(`${this.apiUrl}/GetAllMakes`, { params }).pipe(
      map(response => this.setBrandList( response?.Results ?? [])),
    )
  }

  public getVehicleTypesForMake(id: string, format: string = 'json'): Observable<any> {

    return this.httpClient.get(`${this.apiUrl}/GetVehicleTypesForMakeId/${id}?format=${format}`);
  }

  public getModelsForMake(id: string, format: string = 'json'): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/GetModelsForMakeId/${id}?format=${format}`);
  }

  private setBrandList(results: any[]) {
    return results.map(item => ({
      id: item.Make_ID,
      name: item.Make_Name
    })) as Brand[];
  }

  public getBrandInfo(id: string): Observable<BrandInfo> {
    return forkJoin([
      this.getVehicleTypesForMake(id),
      this.getModelsForMake(id)
    ]).pipe(
      map(([vehicleTypes, models]) => {
        return {
          vehicleType: this.setVehicleTypeInfo(vehicleTypes?.Results ?? [], id),
          brandModelInfo: this.setBrandModelInfo(models?.Results ?? [])
        } as BrandInfo;
      })
    )
  }

  private setVehicleTypeInfo(vehicleTypes: any[], id: string): VehicleType[] {
    return vehicleTypes.map(item => ({
      brandId: id,
      vehicleTypeId: item.VehicleTypeId,
      vehicleTypeName: item.VehicleTypeName
    })) as VehicleType[];
  }

  private setBrandModelInfo(models: any[]): BrandModelInfo[] {
    return models.map(item => ({
      id: item.Make_ID,
      name: item.Make_Name,
      modelId: item.Model_ID,
      modelName: item.Model_Name
    })) as BrandModelInfo[];
  }

}
