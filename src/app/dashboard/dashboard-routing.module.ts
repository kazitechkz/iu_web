import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {IndexComponent} from "./index/index.component";
import {authGuard} from "../core/guards/auth.guard";
import {StepComponent} from "./step/step.component";
import {PassUntComponent} from "./pass-unt/pass-unt.component";
import {PassUntExamComponent} from "./pass-unt-exam/pass-unt-exam.component";
import {StepDetailComponent} from "./step/step-detail/step-detail.component";


const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: 'index',
                component: IndexComponent
            },
          {
            path: 'pass-unt',
            component: PassUntComponent
          },
          {
            path: 'pass-unt-exam',
            component: PassUntExamComponent
          },
            {
                path: 'step',
                component: StepComponent,
            },
            {
                path: 'step/:id',
                component: StepDetailComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
