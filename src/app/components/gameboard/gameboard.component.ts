import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  positionID = [];
  Colors = [];
  result = null;
  gameID = 0;
  startDelta = 0;


  @Input() apiKey!: String;

  constructor() { }

  ngOnInit(): void {
    this.getData(this.apiKey + "/configuration");
    this.getTimer(this.apiKey + "/nextGame");
    this.setTimer();
  }

  ngOnChanges() {
    this.getData(this.apiKey + "/configuration");
    this.getTimer(this.apiKey + "/nextGame");
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
      this.positionID = data['positionToId'];
      this.Colors = data['colors'];

    });
  }

  getTimer(apiURL: string) {
    this.getRequest(apiURL).then((data) => {
      this.gameID = data['id'];
      this.startDelta = data['startDelta'];
    });
  }

  setTimer() {
    setInterval( () => {
      if(this.startDelta > 0){
        this.startDelta --;
      }
      else if(this.startDelta <= 0){
        this.getResult(this.apiKey + "/game/" + this.gameID);
        clearInterval();
      }
    }, 1000);
  }
  getResult(apiURL: string) {
    this.getRequest(apiURL).then((data) => {
      this.result = data['result'];
      this.getTimer(this.apiKey + "/nextGame");
    });
  }
}
