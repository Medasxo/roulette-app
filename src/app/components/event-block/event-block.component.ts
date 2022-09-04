import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.css'],
})
export class EventBlockComponent implements OnInit {
  @Input() apiKey!: String;
  Data = [];
  fakeStartDelta = 0;
  startDelta = 0;
  gameId = 0;
  text = '';
  result = null;
  results: Array<{ text: string }> = [];

  constructor() {}

  ngOnInit(): void {
    this.getData(this.apiKey + '/nextGame');
    this.setTimer();
  }
  ngOnChanges(changes: any) {
    this.getData(this.apiKey + '/nextGame');
  }
  getRequest(url: string) {
    return fetch(url).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Bad response');
      }
    });
  }

  getData(apiURL: string) {
    this.getRequest(apiURL).then((data) => {
      this.Data = data;
      this.fakeStartDelta = data['fakeStartDelta'];
      this.startDelta = data['startDelta'];
      this.gameId = data['id'];
      this.result = null;
    });
  }

  getResult(apiURL: string) {
    this.getRequest(apiURL).then((data) => {
      this.result = data['result'];
    });
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
        console.log(this.startDelta);
        this.startDelta--;
        this.text = 'Game ' + this.gameId + ' wheel is spinning...';
      } else if (this.startDelta == 0) {
        this.getResult(this.apiKey + '/game/' + this.gameId);
        if (this.result !== null) {
          this.text =
            'Game ' + this.gameId + ' ended, result is ' + this.result;
          this.results.push({ text: this.text });
          this.result = null;
          this.getData(this.apiKey + '/nextGame');
        }
      }
    }, 1000);
  }
}
