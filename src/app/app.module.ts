import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, MemoryKiller2Component, MemoryKillerComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryKillerComponent,
    MemoryKiller2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
