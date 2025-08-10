import { AfterViewChecked, Component, computed, DoCheck, effect, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VehicleService } from './services/vehicle.service';
import { Brand } from './models';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollingModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public brands: Signal<Brand[]> = signal([]);
  public filteredBrands: Brand[] = [];
  public searchBrand = signal('');

  constructor(private readonly vehicleService: VehicleService) {
    effect(() => {
      this.filteredBrands = this.brands()
    });
  }

  ngOnInit(): void {
    if(this.brands()?.length === 0){
      this.vehicleService.getBrandsList();
      this.brands = this.vehicleService.brands
      this.filteredBrands = this.brands();
    }
  }

  public goToBrandInfo(brand: Brand): void {
    console.log('Navigating to brand info for:', brand);
    // this.vehicleService.goToBrandInfo(brand);
  }

  public updateSearch(value: string): void {
    this.searchBrand.set(value);
    const brandToSearch = value.toLowerCase();
    this.filteredBrands = this.brands().filter(b => b.name.toLowerCase().includes(brandToSearch));
  }

}
