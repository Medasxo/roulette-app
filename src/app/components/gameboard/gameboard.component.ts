import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {


  @Input() apiKey!: String;
  @Input() positionID = [];
  @Input() Colors = [];
  @Input() result: any;

  constructor() { }

  ngOnInit(): void {
  }
}
