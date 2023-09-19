import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {
    path:"",
    component:HomeLayoutComponent,
    children:[
      {
        path:"",
        component:IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
