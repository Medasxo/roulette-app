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
  log: Array<{ text: string }> = [];

  currentDate = new Date();
  dateTime =
    'Last Sync: ' +
    this.currentDate.getDate() +
    '/' +
    (this.currentDate.getMonth() + 1) +
    '/' +
    this.currentDate.getFullYear() +
    ' @ ' +
    this.currentDate.getHours() +
    ':' +
    this.currentDate.getMinutes() +
    ':' +
    this.currentDate.getSeconds();

    date = this.currentDate.toISOString();

  constructor() {}

  ngOnInit(): void {
    this.getStats(this.apiKeyValue);
    this.getConfiguration(this.apiKeyValue);
    this.getNextGame(this.apiKeyValue);
  }

  onNewAPI(apiValue: string) {
    this.result = null;
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
    this.getRequest(apiKEY + '/stats?limit=200')
      .then((data) => {
        this.Stats = data;
        this.log.push({
          text: this.date + ' GET .../stats?limit=200,',
        });
      })
      .catch((error) => {
        this.log.push({
          text:
            this.date + ' GET .../stats?limit=200 failed,',
        });
      });
  }

  getConfiguration(apiKEY: string) {
    this.getRequest(apiKEY + '/configuration')
      .then((data) => {
        this.Colors = data['colors'];
        this.positionID = data['positionToId'];
        this.log.push({
          text: this.date + ' GET .../configuration,',
        });
      })
      .catch((error) => {
        this.log.push({
          text:
            this.date + ' GET .../configuration failed,',
        });
      });
  }

  getNextGame(apiKEY: string) {
    this.getRequest(apiKEY + '/nextGame')
      .then((data) => {
        this.fakeStartDelta = data['fakeStartDelta'];
        this.startDelta = data['startDelta'];
        this.gameId = data['id'];
        this.result = null;

        this.log.push({
          text: this.date + ' GET .../nextGame,',
        });

      })

      .catch((error) => {

        this.log.push({
          text: this.date + ' GET .../nextGame failed,',
        });

      });

  }
  getResult(apiKEY: string) {
    this.getRequest(apiKEY + '/game/' + this.gameId)
      .then((data) => {
        this.result = data['result'];
        this.log.push({
          text: this.date + ' GET .../game/' + this.gameId,
        });
      })
      .catch((error) => {

        this.log.push({
          text:
            this.date +
            ' GET .../game/' +
            this.gameId +
            ', failed,',
        });

      });
  }
  newResult(newResult: number) {
    this.newResultValue = newResult;
  }

  pushNewTextLog(logText: string) {
    this.log.push({ text: logText });
  }

  afterSpinRefresh() {
    this.getStats(this.apiKeyValue);
  }
}
