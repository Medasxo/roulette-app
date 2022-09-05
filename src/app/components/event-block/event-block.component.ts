import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.css'],
})
export class EventBlockComponent implements OnInit {
  @Input() apiKey!: String;
  @Input() getNextGame!: (args: any) => void;
  @Input() getResult!: (args: any) => void;
  @Input() getRequest!: (args: any) => void;
  @Input() fakeStartDelta!: number;
  @Input() startDelta!: number;
  @Input() gameId!: number;
  @Input() result!: any;
  @Output() newResult = new EventEmitter<number>();
  text = '';
  results: Array<{ text: string }> = [];

  constructor() {}

  ngOnInit(): void {
    if(this.fakeStartDelta !== undefined){
      this.setTimer();
    }
  }
  setTimer() {
    setInterval(() => {
      if (this.fakeStartDelta > 0 && this.startDelta > 0) {
        this.fakeStartDelta--;
        this.startDelta--;
        this.text =
          'Game ' +
          this.gameId +
          ' will start in ' +
          this.fakeStartDelta +
          ' sec';
      } else if (this.fakeStartDelta <= 0 && this.startDelta > 0) {
        this.startDelta--;
        this.text = 'Game ' + this.gameId + ' wheel is spinning...';
      } else if (this.startDelta == 0) {
        this.getResult(this.apiKey);
        if (this.result !== null) {
          this.newResult.emit(this.result)
          this.text =
            'Game ' + this.gameId + ' ended, result is ' + this.result;
          this.results.push({ text: this.text });
          this.result = null;
          this.getNextGame(this.apiKey);
        }
      }
    }, 1000);
  }
}
