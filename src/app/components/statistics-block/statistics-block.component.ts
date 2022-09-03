import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css'],
})
export class StatisticsBlockComponent implements OnInit {
  data = [];

  @Input() apiKey!: String;

  constructor() {}

  ngOnInit(): void {
    this.getData(this.apiKey + '/stats');
  }
  ngOnChanges(): void{
    this.getData(this.apiKey + '/stats');
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
      this.data = data;
    });
  }
}
