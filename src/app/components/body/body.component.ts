import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { SectionButtonsComponent } from '../section-buttons/section-buttons.component';




@Component({
  selector: 'app-body',
  standalone: true,
  imports: [SectionComponent, SectionButtonsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
