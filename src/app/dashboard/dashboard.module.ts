import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../shared/shared.module";
import {IndexComponent} from './index/index.component';
import { StepComponent } from './step/step.component';
import { PassUntComponent } from './unt/pass-unt/pass-unt.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {Select2Module} from "ng-select2-component";
import {UiSwitchModule} from "ngx-ui-switch";
import { PassUntExamComponent } from './unt/pass-unt-exam/pass-unt-exam.component';
import {CountdownComponent} from "ngx-countdown";
import { StepDetailComponent } from './step/step-detail/step-detail.component';
import {MarkdownModule} from "ngx-markdown";
import {NgxSmartModalModule} from "ngx-smart-modal";
import { SubStepComponent } from './step/sub-step/sub-step.component';
import { SingleSubjectComponent } from './unt/single-subject/single-subject.component';
import {CoreModule} from "../core/core.module";
import {YouTubePlayerModule} from "@angular/youtube-player";
import { ExamComponent } from './step/exam/exam.component';
import { UntModeComponent } from './unt/unt-mode/unt-mode.component';
import { UntResultComponent } from './unt/unt-result/unt-result.component';
import { ResultExamComponent } from './step/result-exam/result-exam.component';
import { UntStatComponent } from './unt/unt-stat/unt-stat.component';


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
        SubStepComponent,
        SingleSubjectComponent,
        ExamComponent,
        UntModeComponent,
        UntResultComponent,
        ResultExamComponent,
        UntStatComponent,
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
    MarkdownModule,
    NgxSmartModalModule,
    CoreModule,
    YouTubePlayerModule,
  ]
})
export class DashboardModule {
}
