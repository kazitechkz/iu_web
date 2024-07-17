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
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import {environment} from "../../../environments/environment";
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {googleAction} from "../../shared/store/auth/google/google.action";
import {getGoogleState} from "../../shared/store/auth/google/google.selector";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {
    if (this.translate.currentLang) {
      this.localeID = this.translate.currentLang
    }
  }
    ngOnInit(): void {
        this.socialAuthService.authState.subscribe((user) => {
          if (user) {
            this._store.dispatch(googleAction({requestData: user}))
            this._store.select(getGoogleState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
              if(item.errors){
                this.errors = item.errors;
                this._route.navigateByUrl(RoutesName.loginRoute).then(() => null)
              }
            })
          }
        });
    }
    private socialAuthService = inject(SocialAuthService)
    public localeID: string = 'kk';
    private _store = inject(Store);
    private _route = inject(Router);
    destroyRef = inject(DestroyRef);
    public translate = inject(GlobalTranslateService)
    errors:Record<string, string[]> | null = null;
    isSend: boolean = false
    login_form: FormGroup = new FormGroup({
        email: new FormControl("", [
            Validators.required,
            Validators.email,
        ]),
        password: new FormControl("", [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(255),
        ]),
    });

    onSubmit() {
      if (this.login_form.valid) {
        this.isSend = true
        setTimeout(() => this.sendQuery(), 1000)
      } else {
        this.isSend = false
      }
    }

    sendQuery() {
      let requestData = this.login_form.getRawValue() as LoginRequest;
      this._store.dispatch(loginAction({requestData: requestData}));
      this._store.select(getLoginState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if(item.errors){
          this.errors = item.errors;
          this.login_form.reset()
          this.isSend = false
        }
      })
    }

    getKundelikAuth()
    {
      window.location.href = 'https://login.kundelik.kz/oauth2?response_type=token&client_id=4111dfa786614bc29f01d27017a31a13&scope=CommonInfo,ContactInfo,EducationalInfo,FriendsAndRelatives&redirect_uri='+environment.kundelikUrl
    }

    changeLang(lang: string) {
      this.translate.onLangChange(lang)
    }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly faKey = faKey;
  protected readonly faEnvelope = faEnvelope;
}
