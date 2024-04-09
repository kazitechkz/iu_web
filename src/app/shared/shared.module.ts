import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateStore} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RoundedSocialButtonComponent} from "./components/rounded-social-button/rounded-social-button.component";
import {CoreModule} from "../core/core.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { TeacherSidebarComponent } from './components/teacher-sidebar/teacher-sidebar.component';
import { AnnouncementListComponent } from './components/announcement-list/announcement-list.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgxSmartModalModule} from "ngx-smart-modal";
import { ModalUntTrainerComponent } from './components/modal-unt-trainer/modal-unt-trainer.component';
import { ModalContentOfferComponent } from './components/modal-content-offer/modal-content-offer.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import {InputMaskModule} from "@ngneat/input-mask";
import { IutubeCardVerticalComponent } from './components/iutube-card-vertical/iutube-card-vertical.component';
import { ErrorFormFieldComponent } from './components/error-form-field/error-form-field.component';
import { IutubeCardHorizontalComponent } from './components/iutube-card-horizontal/iutube-card-horizontal.component';
import { IutubeSearchComponent } from './components/iutube-search/iutube-search.component';
import {UiSwitchModule} from "ngx-ui-switch";
import { InformationBearComponent } from './components/information-bear/information-bear.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbItemComponent } from './components/breadcrumb-item/breadcrumb-item.component';
import { ModalTournamentBannerComponent } from './components/modal-tournament-banner/modal-tournament-banner.component';
import { LifehackCardComponent } from './components/lifehack-card/lifehack-card.component';
import { StaticLifeHackComponent } from './components/static-life-hack/static-life-hack.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    RoundedSocialButtonComponent,
    InputFieldComponent,
    SidebarComponent,
    NavbarComponent,
    HomeNavbarComponent,
    TeacherSidebarComponent,
    AnnouncementListComponent,
    ModalUntTrainerComponent,
    ModalContentOfferComponent,
    HomeFooterComponent,
    ErrorFormFieldComponent,
    HomeFooterComponent,
    IutubeCardVerticalComponent,
    IutubeCardHorizontalComponent,
    IutubeSearchComponent,
    InformationBearComponent,
    BreadcrumbsComponent,
    BreadcrumbItemComponent,
    ModalTournamentBannerComponent,
    LifehackCardComponent,
    StaticLifeHackComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    SlickCarouselModule,
    NgxSmartModalModule,
    InputMaskModule,
    UiSwitchModule,
  ],
    exports: [
        InputFieldComponent,
        RoundedSocialButtonComponent,
        TranslateModule,
        InputFieldComponent,
        SidebarComponent,
        NavbarComponent,
        HomeNavbarComponent,
        TeacherSidebarComponent,
        AnnouncementListComponent,
        ModalUntTrainerComponent,
        ModalContentOfferComponent,
        HomeFooterComponent,
        ErrorFormFieldComponent,
        IutubeCardVerticalComponent,
        IutubeCardHorizontalComponent,
        IutubeSearchComponent,
        InformationBearComponent,
        BreadcrumbsComponent,
        BreadcrumbItemComponent,
        ModalTournamentBannerComponent,
        LifehackCardComponent,
        StaticLifeHackComponent,
    ],
  providers:[TranslateStore ],
})
export class SharedModule { }
