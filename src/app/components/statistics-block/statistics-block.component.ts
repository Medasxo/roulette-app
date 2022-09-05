import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css'],
})
export class StatisticsBlockComponent implements OnInit {
  @Input() Stats!: any[];
  @Input() Colors!: any[];

  constructor() {}

  ngOnInit(): void {}

  convertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }
}
