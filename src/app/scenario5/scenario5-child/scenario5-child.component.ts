import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-scenario5-child',
  templateUrl: './scenario5-child.component.html',
  styleUrls: ['./scenario5-child.component.css']
})
export class Scenario5ChildComponent implements OnInit {

  @Output() c2Event=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  send2App(value){
    this.c2Event.emit(value);
  }

}
