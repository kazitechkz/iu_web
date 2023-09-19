import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SharedModule} from "../shared/shared.module";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import { ResetComponent } from './reset/reset.component';
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "../shared/store/auth/register/Register.effect";
import {StoreModule} from "@ngrx/store";
import {registerReducer} from "../shared/store/auth/register/Register.reducer";


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        CoreModule,
        SharedModule,
        ReactiveFormsModule,

    ]
})
export class AuthModule { }
