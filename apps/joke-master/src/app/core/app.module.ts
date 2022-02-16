import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContaineModule } from '../pages/container/container.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContaineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
