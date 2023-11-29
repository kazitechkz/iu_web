import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from "../shared/shared.module";
import { ClassroomsComponent } from './classrooms/classrooms.component';
import {CoreModule} from "../core/core.module";
import {MathJaxPipe} from "../core/pipes/mathJax.pipe";
import {TwButtonModule, TwSelectModule} from "ng-tw";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {UiSwitchModule} from "ngx-ui-switch";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailClassroomComponent } from './classrooms/detail-classroom/detail-classroom.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { ExamsComponent } from './exams/exams.component';
import {NgxPaginationModule} from "ngx-pagination";
import { DetailExamComponent } from './exams/detail-exam/detail-exam.component';
import { AttemptStatsComponent } from './stats/attempt-stats/attempt-stats.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DetailUntExamComponent } from './exams/detail-unt-exam/detail-unt-exam.component';
import {NgChartsModule} from "ng2-charts";
import { SingleTestsComponent } from './exams/single-tests/single-tests.component';
import { UntTestsComponent } from './exams/unt-tests/unt-tests.component';
import {TranslatePipe} from "@ngx-translate/core";
import { ProfileComponent } from './profile/profile.component';
import {MathjaxModule} from "mathjax-angular";


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    ClassroomsComponent,
    DetailClassroomComponent,
    ExamsComponent,
    DetailExamComponent,
    AttemptStatsComponent,
    DetailUntExamComponent,
    SingleTestsComponent,
    UntTestsComponent,
    ProfileComponent,
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        SharedModule,
        CoreModule,
        TwButtonModule,
        NgxSmartModalModule.forChild(),
        UiSwitchModule,
        ReactiveFormsModule,
        TwSelectModule,
        SweetAlert2Module.forRoot(),
        NgxPaginationModule,
        FontAwesomeModule,
        NgChartsModule,
        MathjaxModule
    ],
  providers: [MathJaxPipe, TranslatePipe]
})
export class TeacherModule { }
