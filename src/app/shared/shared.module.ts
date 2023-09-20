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
@NgModule({
  declarations: [
    InputFieldComponent,
    RoundedSocialButtonComponent,
    InputFieldComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    InputFieldComponent,
    RoundedSocialButtonComponent,
    TranslateModule,
    InputFieldComponent,
    SidebarComponent,
    NavbarComponent
  ],
  providers:[TranslateStore ],
})
export class SharedModule { }
