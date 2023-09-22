import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StoreModule} from "@ngrx/store";
import {registerReducer} from "./shared/store/auth/register/Register.reducer";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./shared/store/auth/register/Register.effect";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {loginReducer} from "./shared/store/auth/login/login.reducer";
import {LoginEffect} from "./shared/store/auth/login/login.effect";
import {ReducersConstants} from "./core/constants/reducers.constants";
import {EffectsConstants} from "./core/constants/effects.constants";
import {LoadingInterceptor} from "./core/interceptors/loading.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";

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
        NgxSpinnerModule,
        StoreModule.forRoot(ReducersConstants),
        EffectsModule.forRoot(EffectsConstants),
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
