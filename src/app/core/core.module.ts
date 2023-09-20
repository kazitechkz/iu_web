import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateStore} from "@ngx-translate/core";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forChild({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers:[TranslateStore ],
  exports:[
    TranslateModule
  ]
})
export class CoreModule { }
