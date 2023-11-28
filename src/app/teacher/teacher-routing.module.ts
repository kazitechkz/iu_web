import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "../core/guards/auth.guard";
import {IndexComponent} from "./index/index.component";
import {LayoutComponent} from "./layout/layout.component";
import {teacherGuard} from "../core/guards/teacher.guard";
import {RoutesName} from "../core/constants/routes.constants";
import {ClassroomsComponent} from "./classrooms/classrooms.component";
import {DetailClassroomComponent} from "./classrooms/detail-classroom/detail-classroom.component";
import {ExamsComponent} from "./exams/exams.component";
import {DetailExamComponent} from "./exams/detail-exam/detail-exam.component";
import {AttemptStatsComponent} from "./stats/attempt-stats/attempt-stats.component";
import {DetailUntExamComponent} from "./exams/detail-unt-exam/detail-unt-exam.component";
import {SingleTestsComponent} from "./exams/single-tests/single-tests.component";
import {UntTestsComponent} from "./exams/unt-tests/unt-tests.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard, teacherGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: RoutesName.teacherClassrooms,
        component: ClassroomsComponent
      },
      {
        path: 'detail-classroom/:id',
        component: DetailClassroomComponent
      },
      {
        path: 'single-tests',
        component: SingleTestsComponent
      },
      {
        path: 'unt-tests',
        component: UntTestsComponent
      },
      {
        path: 'detail-test/:id',
        component: DetailExamComponent
      },
      {
        path: 'detail-unt-test/:id',
        component: DetailUntExamComponent
      },
      {
        path: 'stats-attempt/:attempt_id/:user_id',
        component: AttemptStatsComponent
      },
      {
        path: 'my-profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
