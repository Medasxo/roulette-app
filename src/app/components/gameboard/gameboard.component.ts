import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
})
export class GameboardComponent implements OnInit {
  @Input() apiKey!: String;
  @Input() positionID = [];
  @Input() Colors = [];
  @Input() result: any;
  @Input() date!: string;
  @Output() newLogText = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.newLogText.emit(this.date + ' Loading game board,');
  }
}
