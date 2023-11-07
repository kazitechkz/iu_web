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


@NgModule({
  declarations: [
    IndexComponent,
    LayoutComponent,
    ClassroomsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    CoreModule,
    TwButtonModule
  ],
  providers: [MathJaxPipe]
})
export class TeacherModule { }
