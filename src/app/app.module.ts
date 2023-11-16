import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReducersConstants} from "./core/constants/reducers.constants";
import {EffectsConstants} from "./core/constants/effects.constants";
import {LoadingInterceptor} from "./core/interceptors/loading.interceptor";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {UiSwitchModule} from "ngx-ui-switch";
import {CountdownModule} from "ngx-countdown";
import {NgxSmartModalModule} from "ngx-smart-modal";

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MarkdownModule} from "ngx-markdown";
import {NgxPaginationModule} from "ngx-pagination";
import {NgChartsModule} from "ng2-charts";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {TwNotificationModule} from "ng-tw";
import {QRCodeModule} from "angularx-qrcode";
import {DpDatePickerModule} from "ng2-date-picker";
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    SlickCarouselModule,
    CountdownModule,
    UiSwitchModule,
    NgxPaginationModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot(ReducersConstants),
    EffectsModule.forRoot(EffectsConstants),
    NgxSmartModalModule.forRoot(),
    TwNotificationModule.forRoot(),
    NgChartsModule,
    QRCodeModule,
    DpDatePickerModule,
    NgxSpinnerModule.forRoot({type: 'mySpinner'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru'
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
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
