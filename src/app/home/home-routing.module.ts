import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {IndexComponent} from "./index/index.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ContractOfferComponent} from "./contract-offer/contract-offer.component";
import {MoneyBackComponent} from "./money-back/money-back.component";
import {PayOfferComponent} from "./pay-offer/pay-offer.component";
import {TermsOfUseComponent} from "./terms-of-use/terms-of-use.component";
import {SeoConstants} from "../core/constants/seo.constants";
import {LifehacksHomeComponent} from "./lifehacks/lifehacks-home/lifehacks-home.component";
import {HowToPrepareToUntComponent} from "./lifehacks/how-to-prepare-to-unt/how-to-prepare-to-unt.component";
import {LifehacksToUntComponent} from "./lifehacks/lifehacks-to-unt/lifehacks-to-unt.component";
import {PsychoPrepareToUntComponent} from "./lifehacks/psycho-prepare-to-unt/psycho-prepare-to-unt.component";
import {TopTenFailuresComponent} from "./lifehacks/top-ten-failures/top-ten-failures.component";
import {HistoryDateForUntComponent} from "./lifehacks/history-date-for-unt/history-date-for-unt.component";
import {
  LastStepPreparationToUntComponent
} from "./lifehacks/last-step-preparation-to-unt/last-step-preparation-to-unt.component";
import {StrategyForUntComponent} from "./lifehacks/strategy-for-unt/strategy-for-unt.component";
import {HotToChooseUniversityComponent} from "./lifehacks/hot-to-choose-university/hot-to-choose-university.component";
import {
  ResponseForChoosingProfessionComponent
} from "./lifehacks/response-for-choosing-profession/response-for-choosing-profession.component";
import {ReceiptOfHappinessComponent} from "./lifehacks/receipt-of-happiness/receipt-of-happiness.component";
import {InformationAllComponent} from "./information/information-all/information-all.component";
import {InformationComponent} from "./information/information/information.component";
import {InformationCategoryComponent} from "./information/information-category/information-category.component";

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "lifehacks",
        component: LifehacksHomeComponent
      },
      {
        path: "lifehack-show/how_to_prepare_to_unt",
        component: HowToPrepareToUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["how_to_prepare_to_unt"]}
      },
      {
        path: "lifehack-show/lifehacks_to_unt",
        component: LifehacksToUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["lifehacks_to_unt"]}
      },
      {
        path: "lifehack-show/psycho_prepare_to_unt",
        component: PsychoPrepareToUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["psycho_prepare_to_unt"]}
      },
      {
        path: "lifehack-show/top_ten_failures",
        component: TopTenFailuresComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["top_ten_failures"]}
      },
      {
        path: "lifehack-show/history_date_for_unt",
        component: HistoryDateForUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["history_date_for_unt"]}
      },
      {
        path: "lifehack-show/last_step_preparation_to_unt",
        component: LastStepPreparationToUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["last_step_preparation_to_unt"]}
      },
      {
        path: "lifehack-show/strategy_for_unt",
        component: StrategyForUntComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["strategy_for_unt"]}
      },
      {
        path: "lifehack-show/hot_to_choose_university",
        component: HotToChooseUniversityComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["hot_to_choose_university"]}
      },
      {
        path: "lifehack-show/response_for_choosing_profession",
        component: ResponseForChoosingProfessionComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["response_for_choosing_profession"]}
      },
      {
        path: "lifehack-show/receipt_of_happiness",
        component: ReceiptOfHappinessComponent,
        data:{seo:SeoConstants.LIFEHACKS_STATIC_PAGES["receipt_of_happiness"]}
      },
      {
        path: "private-policy",
        component: PrivacyPolicyComponent,
        data:{seo:SeoConstants.PrivacyPolicySeo}
      },
      {
        path: "contract-offer",
        component: ContractOfferComponent,
        data:{seo:SeoConstants.ContractOfferSeo}
      },
      {
        path: "money-back",
        component: MoneyBackComponent,
        data:{seo:SeoConstants.MoneyBackSeo}
      },
      {
        path: "pay-offer",
        component: PayOfferComponent,
        data:{seo:SeoConstants.PayOfferSeo}
      },
      {
        path: "terms-of-use",
        component: TermsOfUseComponent,
        data:{seo:SeoConstants.TermsOfUseSeo}
      },
      {
        path: "informations",
        component: InformationAllComponent,
        data:{seo:SeoConstants.InformationsSeo}
      },
      {
        path: "information/:alias",
        component: InformationComponent,
      },
      {
        path: "informations-category/:alias",
        component: InformationCategoryComponent,
      },
      {
        path: "not-found",
        component: NotFoundComponent,
        data:{seo:SeoConstants.NotFoundSeo}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
