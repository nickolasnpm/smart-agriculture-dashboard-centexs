import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-reading-mudcrab',
  templateUrl: './average-reading-mudcrab.component.html',
  styleUrls: ['./average-reading-mudcrab.component.css']
})
export class AverageReadingMudcrabComponent {
  @Input() value:number=0;
  @Input() name:string='';
  @Input() symbol:string='';
}
