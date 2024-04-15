import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ResetComponent} from './reset/reset.component';
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {TwNotification, TwSelectModule} from "ng-tw";
import {InputMaskModule} from "@ngneat/input-mask";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { TeacherRegisterComponent } from './teacher-register/teacher-register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { KundelikComponent } from './kundelik/kundelik.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";


@NgModule({
    declarations: [
        AuthLayoutComponent,
        LoginComponent,
        RegisterComponent,
        ResetComponent,
        TeacherRegisterComponent,
        VerifyEmailComponent,
        KundelikComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        CoreModule,
        SharedModule,
        ReactiveFormsModule,
        RxReactiveFormsModule,
        TwSelectModule,
        InputMaskModule,
        FontAwesomeModule,
        NgxSpinnerModule,
        GoogleSigninButtonModule,
    ],
  providers: [TwNotification]
})
export class AuthModule {
}
