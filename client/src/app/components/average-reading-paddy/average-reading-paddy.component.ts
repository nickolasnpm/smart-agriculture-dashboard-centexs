import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-reading-paddy',
  templateUrl: './average-reading-paddy.component.html',
  styleUrls: ['./average-reading-paddy.component.css']
})
export class AverageReadingPaddyComponent {
@Input() value:number=0;
@Input() name:string='';
@Input() symbol:string='';
}
