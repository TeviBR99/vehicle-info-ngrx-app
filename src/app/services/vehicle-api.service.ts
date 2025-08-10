import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Brand } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VehicleApiService {

  private readonly apiUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles'; // Replace with actual API URL

  constructor(private readonly httpClient: HttpClient) { }

  getBrandsList(docType: string): Observable<Brand[]> {
    const params = {
      format: docType
    }
    return this.httpClient.get<any>(`${this.apiUrl}/GetAllMakes`, { params }).pipe(
      map(response => this.setBrandList( response?.Results ?? [])),
    )
  }

  getVehicleTypesForMake(make: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/GetVehicleTypesForMake/${make}?format=json`);
  }

  getModelsForMake(make: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/GetModelsForMake/${make}?format=json`);
  }

  private setBrandList(results: any[]) {
    return results.map(item => ({
      id: item.Make_ID,
      name: item.Make_Name
    })) as Brand[];
  }

}
