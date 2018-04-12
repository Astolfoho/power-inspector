import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { remote } from 'electron';

import { PowerProxy } from 'power-proxy';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));



const proxy = new PowerProxy();
proxy.listen(8888, (call) => {
  console.log('vai planeta');
});



