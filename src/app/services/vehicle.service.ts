import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBrandInfo, loadBrandList } from '../store/actions';
import { selectBrandInfo, selectVehicles } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private readonly store: Store) { }

  public getBrandsList(){
    this.store.dispatch(loadBrandList({ docType: 'JSON' }));
  }

  public get brands(){
    return this.store.selectSignal(selectVehicles);
  }

  public get brands$(){
    return this.store.select(selectVehicles);
  }

  public getBrandInfo(brandId: string) {
    this.store.dispatch(loadBrandInfo({ id: brandId }));
  }

  public get brandInfo$() {
    return this.store.select(selectBrandInfo);
  }

  public get brandInfo() {
    return this.store.selectSignal(selectBrandInfo);
  }


}
