import { Component } from '@angular/core';

@Component({
  selector: 'app-section-buttons',
  standalone: true,
  imports: [],
  templateUrl: './section-buttons.component.html',
  styleUrl: './section-buttons.component.css'
})
export class SectionButtonsComponent {
  imageRowCol: string = 'grid grid-cols-4';
  imageSize: string = 'w-36 h-20 hover:scale-150 transition duration-500 cursor-pointer';


  changeRowCol(grid: string) {
    if (grid === 'row') {
      this.imageRowCol = 'flex snap-mandatory snap-x w-full overflow-x-scroll overflow-hidden';
      this.imageSize = 'w-fit h-fit';
      
    }else {
      this.imageRowCol = 'grid grid-cols-4';
      this.imageSize = 'w-36 h-20 hover:scale-150 transition duration-500 cursor-pointer';
      
    }
  }
}

