import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../shared/shared.module";
import {IndexComponent} from './index/index.component';
import { StepComponent } from './step/step.component';
import { PassUntComponent } from './pass-unt/pass-unt.component';


@NgModule({
    declarations: [
        LayoutComponent,
        IndexComponent,
        PassUntComponent,
        IndexComponent,
        StepComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule
    ]
})
export class DashboardModule {
}
