import { Component, OnInit, Input } from '@angular/core';
import { CallWraper } from '../models/call-wraper';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.css']
})
export class RequestItemComponent implements OnInit {


  @Input() value: CallWraper;
  constructor() { }

  ngOnInit() {
  }

}
