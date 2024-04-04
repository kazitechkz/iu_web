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
