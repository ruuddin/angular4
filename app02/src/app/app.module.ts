import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { WarningalertComponent } from './components/warningalert/warningalert.component';
import { SuccessalertComponent } from './components/successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule, //basic functionality to start app in browser
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
