import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, effect, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { VehicleService } from '../services/vehicle.service';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [ScrollingModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent {

  public brands: Signal<Brand[]> = signal([]);
  public filteredBrands: Brand[] = [];
  public searchBrand = '';
  public showList: boolean = true

  constructor(private readonly vehicleService: VehicleService,
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
      this.filteredBrands = this.brands().filter((brand: Brand) => brand.name.toLowerCase().includes(brandToSearch.toLowerCase()));
    }
  }

  public goToBrandInfo(brand: Brand): void {
    this.showList = false;
    this.router.navigate(['brand', brand.id]);
  }
}
