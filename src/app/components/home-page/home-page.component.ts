import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  rouletteData = '';
  apiKeyValue = 'https://dev-games-backend.advbet.com/v1/ab-roulette/1/';
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {}

  setAPI(apiValue: string) {
    this.apiKeyValue = apiValue;
  }
}
