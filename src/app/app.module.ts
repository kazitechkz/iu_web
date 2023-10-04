import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReducersConstants} from "./core/constants/reducers.constants";
import {EffectsConstants} from "./core/constants/effects.constants";
import {LoadingInterceptor} from "./core/interceptors/loading.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {UiSwitchModule} from "ngx-ui-switch";
import {CountdownModule} from "ngx-countdown";
import {NgxSmartModalModule} from "ngx-smart-modal";

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
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
    SlickCarouselModule,
    CountdownModule,
    UiSwitchModule,
    StoreModule.forRoot(ReducersConstants),
    EffectsModule.forRoot(EffectsConstants),
    NgxSmartModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru'
    })
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
