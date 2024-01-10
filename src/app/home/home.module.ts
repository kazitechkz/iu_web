import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeLayoutComponent} from './home-layout/home-layout.component';
import {IndexComponent} from './index/index.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContractOfferComponent } from './contract-offer/contract-offer.component';


@NgModule({
    declarations: [
        HomeLayoutComponent,
        IndexComponent,
        NotFoundComponent,
        PrivacyPolicyComponent,
        ContractOfferComponent
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
