import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();


  increment(){
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement(){
    if(this.count > 0){
      this.count--;
      this.countChange.emit(this.count);
    }
  }

  onChange(value: number){
    this.count = value;
    this.countChange.emit(this.count);
  }

}
