import { Component, OnInit, Signal, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { VehicleService } from '../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { BrandInfo } from '../models/brand';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: 'app-brand-info',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatCardModule],
  templateUrl: './brand-info.component.html',
  styleUrl: './brand-info.component.scss'
})
export class BrandInfoComponent implements OnInit {

  public brandInfo: Signal<BrandInfo> = signal({} as BrandInfo);

  constructor(private readonly vehicleService: VehicleService,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const brandId = params['makeID'];
      if(brandId) {
        this.vehicleService.getBrandInfo(brandId);
        this.brandInfo = this.vehicleService.brandInfo;
      }
    })
  }

  public goBack(): void {
    window.history.back();
  }
}
