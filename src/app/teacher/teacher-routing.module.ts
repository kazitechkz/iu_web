import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "../core/guards/auth.guard";
import {IndexComponent} from "./index/index.component";
import {LayoutComponent} from "./layout/layout.component";
import {teacherGuard} from "../core/guards/teacher.guard";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard, teacherGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
