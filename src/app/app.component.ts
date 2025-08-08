import { Component, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleService } from './services/vehicle.service';
import { Brand } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public brands: Signal<Brand[]> = signal([]);

  constructor(private readonly vehicleService: VehicleService) {

  }

  ngOnInit(): void {
    this.vehicleService.getBrandsList();
    this.brands = this.vehicleService.brands
  }
}
