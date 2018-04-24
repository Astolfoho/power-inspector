import { Component, OnInit, Input } from '@angular/core';
import { CallWraper } from '../models/call-wraper';

@Component({
  selector: 'app-call-details',
  templateUrl: './call-details.component.html',
  styleUrls: ['./call-details.component.css']
})
export class CallDetailsComponent implements OnInit {

  constructor() { }

  @Input() value: CallWraper;

  ngOnInit() {
  }

}
