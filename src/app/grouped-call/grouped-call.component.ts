import { Component, OnInit, Input } from '@angular/core';
import { GroupedCalls, CallWraper } from '../models/call-wraper';

@Component({
  selector: 'app-grouped-call',
  templateUrl: './grouped-call.component.html',
  styleUrls: ['./grouped-call.component.css']
})
export class GroupedCallComponent implements OnInit {

  @Input() value: GroupedCalls[];

  constructor() { }

  ngOnInit() {
  }

  public show(item: CallWraper) {
    return item.show;
  }

}
