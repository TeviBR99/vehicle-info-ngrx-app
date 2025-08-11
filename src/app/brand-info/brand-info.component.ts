import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-brand-info',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './brand-info.component.html',
  styleUrl: './brand-info.component.scss'
})
export class BrandInfoComponent {

  public goBack(): void {
    window.history.back();
  }
}
