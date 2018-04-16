import { IProxyCallRequest, IProxyCall } from 'power-proxy';
import { ChangeDetectorRef } from '@angular/core';

export class CallWraper {

  public test: (CallWraper) => void;

  private _cliReq: IProxyCallRequest;
  public id: string = Guid.newGuid();

  public get show(): boolean {
    return this._cliReq !== undefined;
  }


  public get host(): string {
    return !this._cliReq ? '' : this._cliReq.host;
  }

  public get method(): string {
    return !this._cliReq ? '' : this._cliReq.method;
  }

  public get path(): string {
    return !this._cliReq ? '' : this._cliReq.path;
  }


  constructor(private _call: IProxyCall, public chRef: ChangeDetectorRef) {
    this._call.on('client-request', this.onClientRequest.bind(this));
  }

  private onClientRequest(req: IProxyCallRequest) {
    this._cliReq = req;
    if (this.test) {
      this.test(this);
    }
    this.chRef.detectChanges();
  }




}

export class GroupedCalls {
  public calls: CallWraper[] = [];
  public newCalls = 0;
  public showing = false;

  constructor(public host) {

  }

  public add(call: CallWraper) {
    this.calls.push(call);
    if (!this.showing) {
      this.newCalls++;
    }
  }

  public show() {
    this.showing = true;
    this.newCalls = 0;
  }

  public hide() {
    this.showing = false;
  }

  public toogle() {
    this.showing = !this.showing;
    this.newCalls = 0;
    this.calls[0].chRef.detectChanges();
  }
}


class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
