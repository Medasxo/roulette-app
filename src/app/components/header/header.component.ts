import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  apiKey = "https://dev-games-backend.advbet.com/v1/ab-roulette/1";
  @Output() newApiKey = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onKey(event: any) {
    this.apiKey = event.target.value;
    this.newApiKey.emit(this.apiKey);
  }

}
