import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-current-reading-mudcrab',
  templateUrl: './current-reading-mudcrab.component.html',
  styleUrls: ['./current-reading-mudcrab.component.css']
})
export class CurrentReadingMudcrabComponent {

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
