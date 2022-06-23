import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClientCreateFormModule} from "./modules/client-form/client-create-form.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientCreateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
