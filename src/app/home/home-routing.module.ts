import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeLayoutComponent} from "./home-layout/home-layout.component";
import {IndexComponent} from "./index/index.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {ContractOfferComponent} from "./contract-offer/contract-offer.component";

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
