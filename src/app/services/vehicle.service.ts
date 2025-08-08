import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBrandList } from '../store/actions';
import { selectVehicles } from '../store/selectors';

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

}
