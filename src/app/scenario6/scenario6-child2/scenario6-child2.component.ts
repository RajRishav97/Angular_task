import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-child2',
  templateUrl: './scenario6-child2.component.html',
  styleUrls: ['./scenario6-child2.component.css']
})
export class Scenario6Child2Component implements OnInit {

  @Input() public pData;
  constructor() { }

  ngOnInit() {
  }

}
