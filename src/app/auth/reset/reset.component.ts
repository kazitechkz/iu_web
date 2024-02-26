import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {ResetPasswordRequest, SendResetTokenRequest} from "../../shared/store/auth/reset/Reset.request";
import {resetPasswordAction, sendResetTokenAction} from "../../shared/store/auth/reset/Reset.action";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {getResetPasswordState, getSendResetTokenState} from "../../shared/store/auth/reset/Reset.selector";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {faCreditCard, faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment/moment";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit, OnDestroy {
  isSend: boolean = false
  isTimer: boolean = false
  seconds: number = 0;
    remainSeconds:number = 120;
  interVal: any
  errors: Record<string, string[]> | null = null;
  private store = inject(Store)
  private toastr = inject(ToastrService)
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  reset_form: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    code: new FormControl("", [
      Validators.required,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.min(4),
      Validators.max(255),
    ]),
  });
  changeLang(lang: string) {
    this.translate.onLangChange(lang)
  }
  constructor() {
    this.store.select(getSendResetTokenState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
      if (item) {
        if (item.data === true) {
          clearInterval(this.interVal);
          this.checkTimer();
        }
        if (item.errors) {
          this.errors = item.errors;
          clearInterval(this.interVal)
          localStorage.removeItem('timer')
          this.isTimer = false
        }
      }
    })
  }
  onSubmit() {
    if (this.reset_form.valid) {
      let resetPassword = this.reset_form.getRawValue() as ResetPasswordRequest;
      this.store.dispatch(resetPasswordAction({requestData: resetPassword}));
      this.store.select(getResetPasswordState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
        if (item.errors) {
          this.errors = item.errors;
        }
      })
    } else {
      this.toastr.warning("Заполните все поля!");
    }
  }
  sendResetToken() {
    let sendResetToken = this.reset_form.getRawValue() as SendResetTokenRequest;
    this.store.dispatch(sendResetTokenAction({requestData: sendResetToken}));
  }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faKey = faKey;
  protected readonly faCreditCard = faCreditCard;

  startTimer() {
    localStorage.removeItem('timer');
    this.isTimer = true
    localStorage.setItem('timer', String(Math.floor(moment.duration(moment.now()).add(this.remainSeconds,"s").asSeconds())));
    let startTime = localStorage.getItem('timer');
    if(startTime){
      this.seconds = Math.floor(Math.floor(parseInt(startTime,10) - moment.duration(moment.now()).asSeconds()));
      if (this.reset_form.controls['email'].valid) {
        this.sendResetToken()
        this.checkTimer();
      } else {
        clearInterval(this.interVal)
        localStorage.removeItem('timer')
        this.isTimer = false
      }
    }
  }

  checkTimer(){
    this.interVal = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--
      } else {
        clearInterval(this.interVal)
        localStorage.removeItem('timer')
        this.isTimer = false
      }
    },1000)
  }

  ngOnInit(): void {
    let startTime = localStorage.getItem('timer');
    if (startTime) {
      let remainTime = Math.floor(Math.floor(parseInt(startTime,10) - moment.duration(moment.now()).asSeconds()));
      if (remainTime > 0) {
        this.isTimer = true
        this.seconds = remainTime;
        this.checkTimer();
      }
      else
        {
          clearInterval(this.interVal)
          localStorage.removeItem('timer')
          this.isTimer = false
        }
    }
  }

  getTime(x: number) {
    let m = Math.floor(x / 60),
        s = Math.floor(x % 60)
    if (x <= 60) {
      if (x < 10) {
        if (x == 0) {
          return 0
        } else {
          return '0' + s
        }
      } else {
        return s
      }
    } else {
      return m + ':' + s
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.interVal)
    localStorage.removeItem('timer')
    this.isTimer = false
  }
}
