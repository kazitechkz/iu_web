import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { IndexComponent } from './index/index.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from "../shared/shared.module";
import { ClassroomsComponent } from './classrooms/classrooms.component';
import {CoreModule} from "../core/core.module";
import {MathJaxPipe} from "../core/pipes/mathJax.pipe";
import {TwButtonModule} from "ng-tw";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {UiSwitchModule} from "ngx-ui-switch";
import {ReactiveFormsModule} from "@angular/forms";
import { DetailClassroomComponent } from './classrooms/detail-classroom/detail-classroom.component';


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    ClassroomsComponent,
    DetailClassroomComponent,
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        SharedModule,
        CoreModule,
        TwButtonModule,
        NgxSmartModalModule.forChild(),
        UiSwitchModule,
        ReactiveFormsModule
    ],
  providers: [MathJaxPipe]
})
export class TeacherModule { }
