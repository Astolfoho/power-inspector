import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CallbackPipe } from './callback-pipe';
import { RequestItemComponent } from './request-item/request-item.component';
import { GroupedCallComponent } from './grouped-call/grouped-call.component';


@NgModule({
  declarations: [
    AppComponent,
    CallbackPipe,
    RequestItemComponent,
    GroupedCallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
