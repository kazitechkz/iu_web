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
import {CarouselModule} from "ngx-owl-carousel-o";
import {SlickCarouselModule} from "ngx-slick-carousel";
import { MoneyBackComponent } from './money-back/money-back.component';
import { PayOfferComponent } from './pay-offer/pay-offer.component';
@NgModule({
    declarations: [
        HomeLayoutComponent,
        IndexComponent,
        NotFoundComponent,
        PrivacyPolicyComponent,
        ContractOfferComponent,
        MoneyBackComponent,
        PayOfferComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    FontAwesomeModule,
    CarouselModule,
    SlickCarouselModule,
  ]
})
export class HomeModule {
}
