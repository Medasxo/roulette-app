import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent implements OnInit {
  actions: Array<{ text: string }> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
