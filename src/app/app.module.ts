import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
