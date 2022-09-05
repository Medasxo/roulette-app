import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  rouletteData = '';
  apiKeyValue = 'https://dev-games-backend.advbet.com/v1/ab-roulette/1/';
  Stats = [];
  Colors = [];
  positionID = [];
  fakeStartDelta = 0;
  startDelta = 0;
  gameId = 0;
  result = null;
  newResultValue = -1;

  constructor() {}

  ngOnInit(): void {
    this.getStats(this.apiKeyValue);
    this.getConfiguration(this.apiKeyValue);
    this.getNextGame(this.apiKeyValue);
  }
  ngOnChanges() {
    console.log(this.result);
  }

  setAPI(apiValue: string) {
    this.apiKeyValue = apiValue;
    this.getStats(this.apiKeyValue);
    this.getConfiguration(this.apiKeyValue);
    this.getNextGame(this.apiKeyValue);
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
  getStats(apiKEY: string) {
    //text = "GET .../stats?limit=200"
    this.getRequest(apiKEY + '/stats?limit=200')
      .then((data) => {
        this.Stats = data;
      })
      .catch((error) => {
        console.log("Couldn't get configuration");
      });
  }

  getConfiguration(apiKEY: string) {
    //text = "GET .../configuration"
    this.getRequest(apiKEY + '/configuration')
      .then((data) => {
        this.Colors = data['colors'];
        this.positionID = data['positionToId'];
      })
      .catch((error) => {
        console.log("Couldn't get Configuration");
        const timer = setInterval(() => {
          this.getConfiguration(this.apiKeyValue);
          if (this.Colors.length > 0) {
            clearInterval(timer);
          }
        }, 2000);
      });
  }

  getNextGame(apiKEY: string) {
    //text = "GET .../nextGame"
    this.getRequest(apiKEY + '/nextGame')
      .then((data) => {
        this.fakeStartDelta = data['fakeStartDelta'];
        this.startDelta = data['startDelta'];
        this.gameId = data['id'];
        this.result = null;
      })
      .catch((error) => {
        console.log("Couldn't get nextGame");
      });
  }
  getResult(apiKEY: string) {
    //text = "GET .../game/this.gameId"
    this.getRequest(apiKEY + '/game/' + this.gameId)
      .then((data) => {
        this.result = data['result'];
      })
      .catch((error) => {
        console.log("Couldn't get result");
      });
  }
  newResult(newResult: number){
    this.newResultValue = newResult;
  }
}
