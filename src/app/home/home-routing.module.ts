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
        component: PrivacyPolicyComponent
      },
      {
        path: "contract-offer",
        component: ContractOfferComponent
      },
      {
        path: "money-back",
        component: MoneyBackComponent
      },
      {
        path: "pay-offer",
        component: PayOfferComponent
      },
      {
        path: "terms-of-use",
        component: TermsOfUseComponent
      },
      {
        path: "not-found",
        component: NotFoundComponent
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
