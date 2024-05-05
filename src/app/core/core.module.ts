import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateStore} from "@ngx-translate/core";
import {ToastrModule} from "ngx-toastr";
import { TruncatePipe } from './pipes/truncate.pipe';
import {GlobalTranslatePipe} from "./pipes/globalTranslate.pipe";
import {MathJaxPipe} from "./pipes/mathJax.pipe";
import { GetYoutubeIDPipe } from './pipes/get-youtube-id.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { ShowErrorDirective } from './directives/show-error.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
    declarations: [
    GlobalTranslatePipe,
    TruncatePipe,
      MathJaxPipe,
      GetYoutubeIDPipe,
      KeysPipe,
      ShowErrorDirective,
      SafeHtmlPipe,
  ],
    imports: [
        CommonModule,
        ToastrModule.forRoot(), // ToastrModule added
    ],
    providers: [TranslateStore, GlobalTranslatePipe, TruncatePipe,],
    exports: [
        TranslateModule,
        GlobalTranslatePipe,
        MathJaxPipe,
        GetYoutubeIDPipe,
        KeysPipe,
        TruncatePipe,
        ShowErrorDirective,
        SafeHtmlPipe,
    ]
})
export class CoreModule {
}
