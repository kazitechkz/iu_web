import {Component, DestroyRef, inject, OnInit} from '@angular/core';
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
import {TimeService} from "../../core/helpers/time.service";
import * as moment from "moment/moment";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  isSend: boolean = false
  isTimer: boolean = false
  seconds: number = 30;
  startTime: number = Date.now();
  interval: any;
  private timerService = inject(TimeService)
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
      Validators.max(4),
      Validators.max(255),
    ]),
  });
  changeLang(lang: string) {
    this.translate.onLangChange(lang)
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
  startTimer() {
      this.isTimer = true
      this.timerService.setStartTime(moment.duration(moment.now()).seconds());
      this.sendResetToken()
      this.interval = this.getInterval()
  }
  private calculateTime() {
    const startTime = this.timerService.getStartTime();
    if (startTime) {
      const elapsedTime = Math.floor((moment.duration(moment.now()).seconds() - moment.duration(startTime).seconds()));
      const remainingTime = this.seconds - elapsedTime;
      if (remainingTime > 0) {
        this.seconds = remainingTime
        this.startTimer();
      } else {
        this.resetTimer()
      }
    }
  }
  sendResetToken() {
    let sendResetToken = this.reset_form.getRawValue() as SendResetTokenRequest;
    this.store.dispatch(sendResetTokenAction({requestData: sendResetToken}));
    this.store.select(getSendResetTokenState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
      if (item) {
        if (item.errors) {
          this.errors = item.errors;
        }
        if (!item.data) {
          this.resetTimer()
        }
      }
    })
  }
  getTime(x: number) {
    if (x < 10) {
      if (x == 0) {
        return 0
      } else {
        return '0'+x;
      }
    } else  {
      return x
    }
  }
  getInterval() {
    return setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        this.resetTimer()
      }
    }, 1000);
  }
  resetTimer() {
    clearInterval(this.interval)
    this.timerService.clearStartTime();
    this.isTimer = false
    this.seconds = 30
  }
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faKey = faKey;
  protected readonly faCreditCard = faCreditCard;

  ngOnInit(): void {
    this.calculateTime()
  }
}
