import {Component, DestroyRef, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {RegisterRequest} from "../../shared/store/auth/register/RegisterRequest";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {createMask} from "@ngneat/input-mask";
import {faEnvelope, faKey, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isSend: boolean = false
  errors:Record<string, string[]> | null = null;
  destroyRef = inject(DestroyRef);
  private _service = inject(AuthService)
  public translate = inject(GlobalTranslateService)
  phone_mask = createMask('+7 999 999 9999');
  register_form : FormGroup = new FormGroup({
    // cb: new FormControl("", [
    //   Validators.requiredTrue
    // ]),
    role: new FormControl("student", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    name: new FormControl("", [
      Validators.required,
      Validators.max(255),
      Validators.minLength(3)
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
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly faUser = faUser;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;
  protected readonly faKey = faKey;
}
