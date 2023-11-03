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
import {CountdownComponent, CountdownModule} from "ngx-countdown";
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
import {NgxPaginationModule} from "ngx-pagination";
import {NgChartsModule} from "ng2-charts";
import { TournamentListComponent } from './tournament/tournament-list/tournament-list.component';
import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';
import { SubTournamentDetailComponent } from './tournament/sub-tournament-detail/sub-tournament-detail.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { ResultByAttemptIdComponent } from './stat/result-by-attempt-id/result-by-attempt-id.component';
import {MathJaxPipe} from "../core/pipes/mathJax.pipe";


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
        TournamentListComponent,
        TournamentDetailComponent,
        SubTournamentDetailComponent,
        MyProfileComponent,
        ResultByAttemptIdComponent,
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
        NgxPaginationModule,
        NgChartsModule,
        CountdownModule,
    ],
  providers: [MathJaxPipe]
})
export class DashboardModule {
}
