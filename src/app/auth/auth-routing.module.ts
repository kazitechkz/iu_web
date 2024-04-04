import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";
import {RoutesName} from "../core/constants/routes.constants";
import {guestGuard} from "../core/guards/guest.guard";
import {TeacherRegisterComponent} from "./teacher-register/teacher-register.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {KundelikComponent} from "./kundelik/kundelik.component";
import {SeoConstants} from "../core/constants/seo.constants";


const routes: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
        canActivate: [guestGuard],
        children: [
            {
                path: RoutesName.loginRoute,
                component: LoginComponent,
                data:{seo:SeoConstants.SignInSEO}
            },
            {
                path: RoutesName.registerRoute,
                component: RegisterComponent,
                data:{seo:SeoConstants.SignUpSEO}
            },
            {
                path: RoutesName.teacherRegisterRoute,
                component: TeacherRegisterComponent,
                data:{seo:SeoConstants.SignUpSEO}
            },
            {
                path: RoutesName.verifyEmailRoute,
                component: VerifyEmailComponent,
                data:{seo:SeoConstants.VerifySEO}
            },
            {
                path: RoutesName.resetRoute,
                component: ResetComponent,
                data:{seo:SeoConstants.ResetSEO}
            },
            {
                path: RoutesName.kundelikRoute,
                component: KundelikComponent,
                data:{seo:SeoConstants.KundelikSEO}
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
