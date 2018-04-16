import { Component, ChangeDetectorRef } from '@angular/core';
import { PowerProxy, IProxyCall, IProxyCallRequest } from 'power-proxy';
import { Observable } from 'rxjs/Observable';
import { CallWraper, GroupedCalls } from './models/call-wraper';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  grouped = false;
  proxy: PowerProxy;
  calls: Array<CallWraper> = [];
  gcalls: { [host: string]: GroupedCalls } = {};

  constructor(private chRef: ChangeDetectorRef) {
    this.proxy = new PowerProxy();
    this.proxy.listen(8888, (call) => {
      this.addCall(call);
    });

  }



  public show(item: CallWraper) {
    return item.show;
  }

  addCall(call: IProxyCall): void {
    const c = new CallWraper(call, this.chRef);
    this.calls.splice(0, 0, c);
    // this.calls.push(c);

    c.test = (cc) => {
      this.gcalls[cc.host] = this.gcalls[cc.host] || new GroupedCalls(cc.host);
      this.gcalls[cc.host].add(cc);
    };

    this.chRef.detectChanges();
  }

  gcallsArr(): GroupedCalls[] {
    const arr: GroupedCalls[] = [];
    // tslint:disable-next-line:forin
    for (const key in this.gcalls) {
      arr.push(this.gcalls[key]);
    }
    return arr;
  }
}



