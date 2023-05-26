import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-current-reading-paddy',
  templateUrl: './current-reading-paddy.component.html',
  styleUrls: ['./current-reading-paddy.component.css']
})
export class CurrentReadingPaddyComponent {

  @Input() name:string="";
  @Input() range: string="";  
  @Input() isDangerText:boolean=false;
  @Input() readingValue:number=0;
  @Input() refNumber:number=0;
  @Output() increment:EventEmitter<any>=new EventEmitter<any>();
  @Output() decrement:EventEmitter<any>=new EventEmitter<any>();

  incrementOnClick(){
    this.increment.emit();
  }

  decrementOnClick(){
    this.decrement.emit();
  }
}
