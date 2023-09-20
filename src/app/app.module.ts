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
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    StoreModule.forRoot({register:registerReducer}),
    EffectsModule.forRoot([RegisterEffect]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
