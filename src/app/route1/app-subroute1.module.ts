import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-subrouting.module';
import { Subroute1Component } from './subroute1/subroute1.component';
import { Subroute2Component } from './subroute2/subroute2.component';

@NgModule({
  declarations: [
    Subroute1Component,
    Subroute2Component,
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
})
export class AppSubroute1Module { }
