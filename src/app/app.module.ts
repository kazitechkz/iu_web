import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {StoreModule} from "@ngrx/store";
import {registerReducer} from "./shared/store/auth/register/Register.reducer";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./shared/store/auth/register/Register.effect";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forRoot({register:registerReducer}),
    EffectsModule.forRoot([RegisterEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
