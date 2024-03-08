import { Component } from '@angular/core';
import { products } from '../../interfaces/products';


@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  cameras: products[] = [
    {
    name: "FujiFilm X100VI",
    price: 1800,
    url: "./assets/images/x100vi.jpg"
  },
  {
    name: "FujuFilm X-T5",
    price: 1899,
    url: "./assets/images/x-t5.jpg"
  },
  {
    name: "FujuFilm X-Pro3",
    price: 1600,
    url: " ./assets/images/x-pro3.jpg"
  
  },
  {
    name: "FujuFilm X-T30II",
    price: 999,
    url: "./assets/images/x-t30ii.jpg"
  },
  {
    name: "FujuFilm X-H2S",
    price: 2449,
    url: "./assets/images/x-h2s.jpg"
  },
  {
    name: "FujuFilm X-S20",
    price: 1399,
    url: "./assets/images/s-20.jpg"
  }];

}
