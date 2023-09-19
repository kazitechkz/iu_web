import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeLayoutComponent,
    IndexComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
    ]
})
export class HomeModule { }
