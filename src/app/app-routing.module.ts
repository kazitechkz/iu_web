import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesName} from "./core/constants/routes.constants";
import {NotFoundComponent} from "./home/not-found/not-found.component";

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
    },
    {
        path: "",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule)
    },
    {
        path: 'teacher',
        loadChildren: () => import("./teacher/teacher.module").then(m => m.TeacherModule)
    },
    {
      path: "**",
      component: NotFoundComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
