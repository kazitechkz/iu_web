import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import { faGoogle,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../shared/store/auth/register/Register.action";
import {RegisterRequest} from "../../shared/store/auth/register/RegisterRequest";
import {getRegisterState} from "../../shared/store/auth/register/Register.selector";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {RegisterState} from "../../shared/store/auth/register/Register.state";
import {Subscription} from "rxjs";
import {RoutesName} from "../../core/constants/routes.constants";
import {NgxSpinnerService} from "ngx-spinner";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {StrHelper} from "../../core/helpers/str.helper";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {createMask} from "@ngneat/input-mask";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  errors:Record<string, string[]> | null = null;
  destroyRef = inject(DestroyRef);
  private store = inject(Store<RegisterComponent>)
  public translate = inject(GlobalTranslateService)
  register_form : FormGroup = new FormGroup({
    cb: new FormControl("", [
      Validators.requiredTrue
    ]),
    role: new FormControl("", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    name: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),
    parent_name: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),

    phone: new FormControl("", [
      Validators.required,
      // Validators.pattern('[- +()0-9]{11,12}')
      //Validators.pattern(/^\+?77(\d{9})+$/gi),
    ]),
    parent_phone: new FormControl("", [
      Validators.required,
      // Validators.pattern('[- +()0-9]{11,12}')
      //Validators.pattern(/^\+?77(\d{9})+$/gi),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.min(4),
      Validators.max(255),
    ]),
  });

  onSubmit() {
    let requestData = this.register_form.getRawValue() as RegisterRequest;
    // console.log(requestData)
    this.store.dispatch(registerAction({requestData: requestData}));
    this.store.select(getRegisterState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item: RegisterState) => {
      if (item.errors) {
        this.errors = item.errors;
      }
    })
  }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
