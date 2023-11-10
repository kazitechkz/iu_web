import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "../core/guards/auth.guard";
import {IndexComponent} from "./index/index.component";
import {LayoutComponent} from "./layout/layout.component";
import {teacherGuard} from "../core/guards/teacher.guard";
import {RoutesName} from "../core/constants/routes.constants";
import {ClassroomsComponent} from "./classrooms/classrooms.component";
import {DetailClassroomComponent} from "./classrooms/detail-classroom/detail-classroom.component";

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
