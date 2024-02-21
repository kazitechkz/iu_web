import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {verifyEmailAction} from "../../shared/store/auth/verifyEmail/verifyEmail.action";
import {VerifyEmailRequest} from "../../shared/store/auth/verifyEmail/verifyEmail.request";
import {getVerifyState} from "../../shared/store/auth/verifyEmail/verifyEmail.selector";
import {TwNotification} from "ng-tw";
import {StrHelper} from "../../core/helpers/str.helper";
import {RoutesName} from "../../core/constants/routes.constants";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  ngOnInit(): void {
      this.activeRoute.queryParams.pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.verify_form.patchValue({
          user_id: item['user']
        })
      })
  }
  private _notification = inject(TwNotification)
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  public activeRoute = inject(ActivatedRoute)
  public user_id: string = ''
  public route = inject(Router)
  errors:Record<string, string[]> | null = null;
  isSend: boolean = false
  verify_form: FormGroup = new FormGroup({
    code: new FormControl("", [
      Validators.required
    ]),
    user_id: new FormControl("")
  });

  onSubmit() {
    if (this.verify_form.valid) {
      let req = this.verify_form.getRawValue() as VerifyEmailRequest
      this.isSend = true
      this._store.dispatch(verifyEmailAction({requestData: req}))
      this._store.select(getVerifyState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item) {
          if (item.data) {
            this._notification.show({type: 'success', title: 'Успешно', text: 'Адрес электронной почты подтвержден!'});
            this.route.navigateByUrl(RoutesName.loginRoute).then(r => null)
          }
          if (item.errors) {
            this.verify_form.reset()
            this.isSend = false
          }
        }
      })
    } else {
      this.isSend = false
    }
  }


  changeLang(lang: string) {
    this.translate.onLangChange(lang)
  }

  protected readonly faEnvelope = faEnvelope;
}
