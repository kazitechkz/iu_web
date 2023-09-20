import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";
import {RoutesName} from "../core/constants/routes.constants";

const routes: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
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
