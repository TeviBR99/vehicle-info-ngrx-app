import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, effect, EventEmitter, Output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { Brand } from '../models';
import { VehicleService } from '../services/vehicle.service';
import { Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectVehicles } from '../store/selectors';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [ScrollingModule, FormsModule, MatFormFieldModule, MatInputModule, RouterOutlet, MatCardModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent {

  public brands: Signal<Brand[]> = signal([]);
  public filteredBrands: Brand[] = [];
  public searchBrand = '';
  public showList: boolean = true

  constructor(private readonly vehicleService: VehicleService,
              private readonly store: Store,
              private readonly router: Router) {
    effect(() => {
      this.filteredBrands = this.brands()
    });
  }

  ngOnInit(): void {
    this.vehicleService.brands$.subscribe((brands: Brand[]) => {
      if(brands?.length > 0){
        this.brands = signal(brands);
      }else{
        this.vehicleService.getBrandsList();
        this.brands = this.vehicleService.brands
      }
    });
  }

  public updateSearch(brandToSearch: string): void {
    if(brandToSearch?.length > 0){
      this.filteredBrands = this.brands().filter(b => b.name.toLowerCase().includes(brandToSearch));
    }
  }

  public goToBrandInfo(brand: Brand): void {
    console.log('Navigating to brand info for:', brand);
    this.showList = false;
    this.router.navigate(['brand', brand.id]);
    // this.vehicleService.goToBrandInfo(brand);
  }
}
