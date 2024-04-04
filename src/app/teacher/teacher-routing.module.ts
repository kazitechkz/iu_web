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
import {MyStudentsComponent} from "./my-students/my-students.component";
import {AllStatsComponent} from "./stats/all-stats/all-stats.component";
import {SeoConstants} from "../core/constants/seo.constants";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard, teacherGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent,
        data:{seo:SeoConstants.DashboardTeacherSeo}
      },
      {
        path: RoutesName.teacherClassrooms,
        component: ClassroomsComponent,
        data:{seo:SeoConstants.MyTeacherClassroomSeo}
      },
      {
        path: RoutesName.teacherMyStudents,
        component: MyStudentsComponent,
        data:{seo:SeoConstants.MyStudentSeo}
      },
      {
        path: RoutesName.teacherStatByUser + '/:user_id',
        component: AllStatsComponent,
        data:{seo: SeoConstants.MyStudentsStatSeo}
      },
      {
        path: 'detail-classroom/:id',
        component: DetailClassroomComponent,
        data:{seo: SeoConstants.MyClassroomDetailSeo}
      },
      {
        path: 'single-tests',
        component: SingleTestsComponent,
        data:{seo: SeoConstants.SendStudentToSingleUntSeo}
      },
      {
        path: 'unt-tests',
        component: UntTestsComponent,
        data:{seo: SeoConstants.SendStudentToFullUntSeo}
      },
      {
        path: 'detail-test/:id',
        component: DetailExamComponent,
        data:{seo: SeoConstants.MyStudentsStatSeo}
      },
      {
        path: 'detail-unt-test/:id',
        component: DetailUntExamComponent,
        data:{seo: SeoConstants.MyStudentsStatSeo}
      },
      {
        path: 'stats-attempt/:attempt_id/:user_id',
        component: AttemptStatsComponent,
        data:{seo: SeoConstants.MyStudentsStatSeo}
      },
      {
        path: 'my-profile',
        component: ProfileComponent,
        data:{seo: SeoConstants.TeacherProfileSeo}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
