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
    ModalContentOfferComponent
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

  ],
  providers:[TranslateStore ],
})
export class SharedModule { }
