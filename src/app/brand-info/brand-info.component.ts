import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-brand-info',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './brand-info.component.html',
  styleUrl: './brand-info.component.scss'
})
export class BrandInfoComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
      console.log('BrandInfoComponent initialized');
  }


  public goBack(): void {
    window.history.back();
  }
}
