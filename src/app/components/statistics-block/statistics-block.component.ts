import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css'],
})
export class StatisticsBlockComponent implements OnInit {
  Data = [];
  Colors = [];

  @Input() apiKey!: String;

  constructor() {}

  ngOnInit(): void {
    this.getData(this.apiKey + '/stats?limit=200');
    setInterval(() => {
      this.getData(this.apiKey + '/stats?limit=200');
    }, 100000);
    this.getColor(this.apiKey + '/configuration');
  }
  ngOnChanges(): void {
    this.getData(this.apiKey + '/stats?limit=200');
    this.getColor(this.apiKey + '/configuration');
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
    });
  }
  getColor(apiURL: string) {
    this.getRequest(apiURL).then((data) => {
      this.Colors = data['colors'];
    });
  }
  convertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }
}
