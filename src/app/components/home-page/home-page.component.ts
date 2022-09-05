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
  Configuration = {};
  Colors = [];
  constructor() {}

  ngOnInit(): void {
    this.getStats(this.apiKeyValue);
    this.getConfiguration(this.apiKeyValue);
  }
  ngOnChanges() {
  }

  setAPI(apiValue: string) {
    this.apiKeyValue = apiValue;
    this.getStats(this.apiKeyValue);
    this.getConfiguration(this.apiKeyValue);
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
  getStats(apiURL: string) {
    //text = "GET .../stats?limit=200"
    this.getRequest(apiURL + "/stats?limit=200").then((data) => {
      this.Stats = data;
    })
    .catch(error => {
      console.log("Couldn't get configuration");
    });
  }

  getConfiguration(apiURL: string) {
    //text = "GET .../configuration"
    this.getRequest(apiURL + "/configuration").then((data) => {
      this.Configuration = data;
      this.Colors = data['colors'];
      console.log(data);
    })
    .catch(error => {
      console.log("Couldn't get Configuration");
      const timer = setInterval( () =>{
        this.getConfiguration(this.apiKeyValue);
        if(this.Colors.length > 0){
          clearInterval(timer);
        }
      }, 2000);
    });
  }
}
