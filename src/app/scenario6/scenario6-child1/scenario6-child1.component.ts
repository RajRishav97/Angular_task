import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scenario6-child1',
  templateUrl: './scenario6-child1.component.html',
  styleUrls: ['./scenario6-child1.component.css']
})
export class Scenario6Child1Component implements OnInit {

  @Output() c2Event=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  clickEvent(){
    this.c2Event.emit("Here is Child 1 sending some data....")
  }

}
