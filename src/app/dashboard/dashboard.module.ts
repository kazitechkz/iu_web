import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../shared/shared.module";
import {IndexComponent} from './index/index.component';
import { StepComponent } from './step/step.component';
import { PassUntComponent } from './pass-unt/pass-unt.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {Select2Module} from "ng-select2-component";
import {UiSwitchModule} from "ngx-ui-switch";
import { PassUntExamComponent } from './pass-unt-exam/pass-unt-exam.component';
import {CountdownComponent} from "ngx-countdown";
import { StepDetailComponent } from './step/step-detail/step-detail.component';
import {MarkdownModule} from "ngx-markdown";


@NgModule({
    declarations: [
        LayoutComponent,
        IndexComponent,
        PassUntComponent,
        IndexComponent,
        StepComponent,
        PassUntExamComponent,
        StepComponent,
        StepDetailComponent,
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FontAwesomeModule,
    SlickCarouselModule,
    Select2Module,
    UiSwitchModule,
    CountdownComponent,
    MarkdownModule
  ]
})
export class DashboardModule {
}
