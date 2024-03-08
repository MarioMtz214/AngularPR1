import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  headerBackground: string = '';
  textColorWhite: string = 'text-yellow-400 ';
  textColorBlack: string = 'text-white';
  // buttonBW: string = 'bg-white border-2 border-black text-black';
  // buttonSepia: string = 'bg-amber-600/50 border-2 border-black text-black';
  // buttonColor: string = 'bg-gradient-to-r from-red-500/50 from-20% via-green-500/50 via-50% to-blue-500/50 to-80%';

  changeColor(color: string) {
    if (color === 'color') {
      this.headerBackground = 'sepia-0';
      this.textColorWhite = 'text-yellow-400 bg-gradient-to-r from-red-500/50 from-20% via-green-500/50 via-50% to-blue-500/50 to-80%';
      this.textColorBlack = 'text-white';
      
    }else if (color === 'white') {
      this.headerBackground = 'grayscale -z-10';
      this.textColorWhite = 'text-yellow-400 text-white bg-gradient-to-r from-red-500/50 from-20% via-green-500/50 via-50% to-blue-500/50 to-80% grayscale-0';
      this.textColorBlack = 'text-white';
      // this.buttonBW = 'grayscale-0'
      // this.buttonColor = 'grayscale-0'
      // this.buttonSepia = 'grayscale-0';
    }
     else {
      // this.buttonBW = 'sepia-0'
      // this.buttonColor = 'sepia-0'
      // this.buttonSepia = 'sepia-0';
      this.headerBackground = 'sepia';
      this.textColorWhite = 'text-yellow-400 text-white bg-gradient-to-r from-red-500/50 from-20% via-green-500/50 via-50% to-blue-500/50 to-80% sepia-0';
      
    }
  }

}
