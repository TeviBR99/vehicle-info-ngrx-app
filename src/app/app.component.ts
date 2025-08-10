import { Component, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VehicleService } from './services/vehicle.service';
import { Brand } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public brands: Signal<Brand[]> = signal([]);

  constructor(private readonly vehicleService: VehicleService) {

  }

  ngOnInit(): void {
    console.log('AppComponent initialized');
    if(this.brands()?.length === 0){
      console.log('Fetching brands list');
      this.vehicleService.getBrandsList();
      this.brands = this.vehicleService.brands
    }
  }

  public goToBrandInfo(brand: Brand): void {
    console.log('Navigating to brand info for:', brand);
    // this.vehicleService.goToBrandInfo(brand);
  }
}
