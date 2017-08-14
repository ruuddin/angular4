import { Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() eventFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit() {}

  start(){
    this.interval = setInterval(() => {
      this.eventFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  stop(){
    clearInterval(this.interval);
  }

}
