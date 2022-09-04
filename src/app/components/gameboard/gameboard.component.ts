import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  positionID = [];
  Colors = [];

  @Input() apiKey!: String;

  constructor() { }

  ngOnInit(): void {
    console.log(this.positionID);
    this.getData(this.apiKey + "/configuration");
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
      console.log(this.Colors);
    });
  }
}
