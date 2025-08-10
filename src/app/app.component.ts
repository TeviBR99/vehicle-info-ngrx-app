import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrandListComponent } from "./brand-list/brand-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrandListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
