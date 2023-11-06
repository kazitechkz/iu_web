import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {IndexComponent} from './index/index.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        HomeLayoutComponent,
        IndexComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        CoreModule,
        FontAwesomeModule
    ]
})
export class HomeModule {
}
