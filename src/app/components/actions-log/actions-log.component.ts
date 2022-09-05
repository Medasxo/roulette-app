import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actions-log',
  templateUrl: './actions-log.component.html',
  styleUrls: ['./actions-log.component.css']
})
export class ActionsLogComponent implements OnInit {
 @Input() log!: any[];
  constructor() { }

  ngOnInit(): void {
    console.log("length" + this.log.length);
    console.log(this.log[0]['text']);
  }
  ngOnChanges(){
    console.log(this.log);
  }

}
