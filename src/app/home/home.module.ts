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
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import {NgxSmartModalModule} from "ngx-smart-modal";
import { LifehacksHomeComponent } from './lifehacks/lifehacks-home/lifehacks-home.component';
import { HowToPrepareToUntComponent } from './lifehacks/how-to-prepare-to-unt/how-to-prepare-to-unt.component';
import { LifehacksToUntComponent } from './lifehacks/lifehacks-to-unt/lifehacks-to-unt.component';
import { PsychoPrepareToUntComponent } from './lifehacks/psycho-prepare-to-unt/psycho-prepare-to-unt.component';
import { TopTenFailuresComponent } from './lifehacks/top-ten-failures/top-ten-failures.component';
import { HistoryDateForUntComponent } from './lifehacks/history-date-for-unt/history-date-for-unt.component';
import { LastStepPreparationToUntComponent } from './lifehacks/last-step-preparation-to-unt/last-step-preparation-to-unt.component';
import { StrategyForUntComponent } from './lifehacks/strategy-for-unt/strategy-for-unt.component';
import { HotToChooseUniversityComponent } from './lifehacks/hot-to-choose-university/hot-to-choose-university.component';
import { ResponseForChoosingProfessionComponent } from './lifehacks/response-for-choosing-profession/response-for-choosing-profession.component';
import { ReceiptOfHappinessComponent } from './lifehacks/receipt-of-happiness/receipt-of-happiness.component';
import { InformationAllComponent } from './information/information-all/information-all.component';
import { InformationComponent } from './information/information/information.component';
import { InformationCategoryComponent } from './information/information-category/information-category.component';
@NgModule({
    declarations: [
        HomeLayoutComponent,
        IndexComponent,
        NotFoundComponent,
        PrivacyPolicyComponent,
        ContractOfferComponent,
        MoneyBackComponent,
        PayOfferComponent,
        TermsOfUseComponent,
        LifehacksHomeComponent,
        HowToPrepareToUntComponent,
        LifehacksToUntComponent,
        PsychoPrepareToUntComponent,
        TopTenFailuresComponent,
        HistoryDateForUntComponent,
        LastStepPreparationToUntComponent,
        StrategyForUntComponent,
        HotToChooseUniversityComponent,
        ResponseForChoosingProfessionComponent,
        ReceiptOfHappinessComponent,
        InformationAllComponent,
        InformationComponent,
        InformationCategoryComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        CoreModule,
        FontAwesomeModule,
        CarouselModule,
        SlickCarouselModule,
        NgxSmartModalModule,
    ]
})
export class HomeModule {
}
