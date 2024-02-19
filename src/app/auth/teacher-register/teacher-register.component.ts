import {Component, DestroyRef, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../shared/store/auth/login/loginRequest";
import {loginAction} from "../../shared/store/auth/login/login.action";
import {getLoginState} from "../../shared/store/auth/login/login.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {faEnvelope, faKey, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {StrHelper} from "../../core/helpers/str.helper";
import {RoutesName} from "../../core/constants/routes.constants";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons/faUserAlt";
import {createMask} from "@ngneat/input-mask";
import {RegisterRequest} from "../../shared/store/auth/register/RegisterRequest";
import {registerAction} from "../../shared/store/auth/register/Register.action";
import {getRegisterState} from "../../shared/store/auth/register/Register.selector";
import {RegisterState} from "../../shared/store/auth/register/Register.state";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent {
  private _store = inject(Store);
  private _service = inject(AuthService)

  public translate = inject(GlobalTranslateService)
  errors:Record<string, string[]> | null = null;
  isSend: boolean = false
  phone_mask = createMask('+7 999 999 9999');
  register_form : FormGroup = new FormGroup({
    // cb: new FormControl("", [
    //   Validators.requiredTrue
    // ]),
    role: new FormControl('teacher', [
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
    phone: new FormControl("", [
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
    if (this.register_form.valid) {
      this.isSend = true
      this.errors = this._service.registerSubmit(this.errors, requestData)
    } else {
      this.isSend = false
    }
  }

  changeLang(lang: string) {
    this.translate.onLangChange(lang)
  }

  protected readonly faEnvelope = faEnvelope;
  protected readonly faKey = faKey;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
  protected readonly faUser = faUser;
  protected readonly faPhone = faPhone;
  protected readonly faUserAlt = faUserAlt;
}
