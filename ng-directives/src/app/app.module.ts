import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicDirective } from './directives/basic.directive';
import { BetterDirective } from './directives/better.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
