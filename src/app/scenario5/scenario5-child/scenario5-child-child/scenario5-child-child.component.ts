import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scenario5-child-child',
  templateUrl: './scenario5-child-child.component.html',
  styleUrls: ['./scenario5-child-child.component.css']
})
export class Scenario5ChildChildComponent implements OnInit {

  @Output() c3Event=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  click3Event(){
    this.c3Event.emit("Hello component3 sending this data by event emmiter.")
  }
}
