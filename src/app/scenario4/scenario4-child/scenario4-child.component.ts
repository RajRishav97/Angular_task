import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-child',
  templateUrl: './scenario4-child.component.html',
  styleUrls: ['./scenario4-child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  public cData="Hello I am child and send request to component 1 to print my statement.";
  @Output() public cEvent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    this.cEvent.emit("Hello I am child of component1.");
  }

}
