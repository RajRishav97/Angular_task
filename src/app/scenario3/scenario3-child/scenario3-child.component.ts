import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-child',
  templateUrl: './scenario3-child.component.html',
  styleUrls: ['./scenario3-child.component.css']
})
export class Scenario3ChildComponent implements OnInit {

  @Input() public pData;
  constructor() { }

  ngOnInit() {
  }

}
