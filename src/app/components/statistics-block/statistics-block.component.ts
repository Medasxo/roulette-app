import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css']
})
export class StatisticsBlockComponent implements OnInit {

  @Input() apiKey!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
