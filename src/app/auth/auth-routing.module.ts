import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";
import {RoutesName} from "../core/constants/routes.constants";
import {authGuard} from "../core/guards/auth.guard";
import {guestGuard} from "../core/guards/guest.guard";
import {TeacherRegisterComponent} from "./teacher-register/teacher-register.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";

const routes: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
        canActivate: [guestGuard],
        children: [
            {
                path: RoutesName.loginRoute,
                component: LoginComponent
            },
            {
                path: RoutesName.registerRoute,
                component: RegisterComponent
            },
            {
                path: RoutesName.teacherRegisterRoute,
                component: TeacherRegisterComponent
            },
            {
                path: RoutesName.verifyEmailRoute,
                component: VerifyEmailComponent
            },
            {
                path: RoutesName.resetRoute,
                component: ResetComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
