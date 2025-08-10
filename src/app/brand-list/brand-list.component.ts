import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, effect, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Brand } from '../models';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [ScrollingModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.scss'
})
export class BrandListComponent {

  public brands: Signal<Brand[]> = signal([]);
  public filteredBrands: Brand[] = [];
  public searchBrand = '';

  constructor(private readonly vehicleService: VehicleService) {
    effect(() => {
      this.filteredBrands = this.brands()
    });
  }

  ngOnInit(): void {
    if(this.brands()?.length === 0){
      this.vehicleService.getBrandsList();
      this.brands = this.vehicleService.brands
    }
  }

  public updateSearch(brandToSearch: string): void {
    if(brandToSearch?.length > 0){
      this.filteredBrands = this.brands().filter(b => b.name.toLowerCase().includes(brandToSearch));
    }
  }

  public goToBrandInfo(brand: Brand): void {
    console.log('Navigating to brand info for:', brand);
    // this.router.navigate(['brand', brand.id]);
    // this.vehicleService.goToBrandInfo(brand);
  }
}
