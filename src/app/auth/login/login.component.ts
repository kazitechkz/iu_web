import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../shared/store/auth/login/loginRequest";
import {Store} from "@ngrx/store";
import {loginAction} from "../../shared/store/auth/login/login.action";
import {getLoginState} from "../../shared/store/auth/login/login.selector";
import {RoutesName} from "../../core/constants/routes.constants";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {StrHelper} from "../../core/helpers/str.helper";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    private _store = inject(Store);
    destroyRef = inject(DestroyRef);
    faGoogle = faGoogle;
    faFacebookF = faFacebookF;
    errors:Record<string, string[]> | null = null;
    login_form: FormGroup = new FormGroup({
        email: new FormControl("", [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.min(4),
            Validators.max(255),
        ]),
    });

    onSubmit() {
        let requestData = this.login_form.getRawValue() as LoginRequest;
        this._store.dispatch(loginAction({requestData: requestData}));
        this._store.select(getLoginState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          if(item.errors){
            this.errors = item.errors;
          }
        })
    }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
