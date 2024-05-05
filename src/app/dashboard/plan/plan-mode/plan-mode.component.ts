import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ImageHelper} from "../../../core/helpers/image.helper";
import {
  faBook,
  faChartLine, faCheckCircle,
  faCircleQuestion, faCode, faCrown, faDumbbell,
  faGraduationCap,
  faLanguage, faNewspaper, faRocket,
  faStar, faUser, faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {Store} from "@ngrx/store";
import {Subject} from "../../../shared/models/subject.model";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {TranslatePipe} from "@ngx-translate/core";
import {NgxSmartModalService} from "ngx-smart-modal";
import {PayRequest} from "../../../shared/store/paybox/pay_create/pay.request";
import {payCreateAction} from "../../../shared/store/paybox/pay_create/payCreate.action";
import {payCreateSelector} from "../../../shared/store/paybox/pay_create/payCreate.selector";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment/moment";
import {promoGetAction} from "../../../shared/store/promo/promo.action";
import {PromoRequest} from "../../../shared/store/promo/promo.request";
import {getPromoStateSelector} from "../../../shared/store/promo/promo.selector";
import {TwNotification} from "ng-tw";
import {faStairs} from "@fortawesome/free-solid-svg-icons/faStairs";

@Component({
  selector: 'app-plan-mode',
  templateUrl: './plan-mode.component.html',
  styleUrls: ['./plan-mode.component.scss']
})
export class PlanModeComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    this.getSubjects()
  }
  countdown: string = '';
  errors: Record<string, string[]> | null = null;
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslatePipe)
  dialog = inject(NgxSmartModalService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  private _notification = inject(TwNotification)
  public listSubjects: Subject[] = []
  public subjects: Subject[] = []
  public promo: number = 0
  public old_price: number = 0
  public price: number = 0
  public promoError: string|null = null
  public promoSuccess: boolean = false
  subjects_form: FormGroup = new FormGroup({
    time: new FormControl(1),
    subject_first: new FormControl(0, [Validators.required]),
    subject_second: new FormControl(0, [Validators.required]),
    promo: new FormControl(null),
    type: new FormControl(1)
  }, {validators: this.subjectsNotEqualValidator()});
  plans: {
    title: string,
    time: number,
    subtitle_kk: string,
    subtitle_ru: string,
    old_price: number,
    price: number,
    minus: number
  }[] = [
    {
      title: 'BASIC PLAN',
      time: 1,
      subtitle_kk: '1 айға жазылым',
      subtitle_ru: 'подписка на 1 месяц',
      old_price: 1990,
      price: 1590,
      minus: 400
    },
    {
      title: 'STANDARD PLAN',
      time: 3,
      subtitle_kk: '3 айға жазылым',
      subtitle_ru: 'подписка на 3 месяц',
      old_price: 4990,
      price: 3990,
      minus: 1000
    },
    {
      title: 'PREMIUM PLAN',
      time: 6,
      subtitle_kk: '6 айға жазылым',
      subtitle_ru: 'подписка на 6 месяц',
      old_price: 8990,
      price: 6990,
      minus: 2000
    }
  ]
  subjectsNotEqualValidator(): ValidatorFn {
    // @ts-ignore
    return (formGroup: FormGroup): ValidationErrors | null => {
      const subjectFirst = formGroup.get('subject_first')?.value;
      const subjectSecond = formGroup.get('subject_second')?.value;
      if (subjectFirst === subjectSecond) {
        return { subjectsEqual: true };
      }
      if (subjectFirst == 0) {
        return { subjectsEqual: true };
      }
      if (subjectSecond == 0) {
        return { subjectsEqual: true };
      }
      return null;
    };
  }
  onSubmit() {
    if (this.subjects_form.valid) {
      let req = this.subjects_form.getRawValue() as PayRequest
      this._store.dispatch(payCreateAction({request: req}))
      this._store.select(payCreateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.errors) {
          this.subjects_form.reset()
          this.dialog.closeLatestModal()
        }
        if (item.data) {
          if (item.data.pg_status == 'error') {
            this.subjects_form.reset()
            this.dialog.closeLatestModal()
            this._notification.show({ type: 'danger', title: 'Error', text: item.data.pg_error_description! })
          } else {
            window.location.href = item.data.pg_redirect_url
          }
        }
      })
    }
    this.subjects_form.reset()
  }
  getPrice(time: number, promo: number|null = null) {
    let oldPrice: number,
        price: number
    switch (time) {
      case 1:
        oldPrice = 1590
        break;
      case 3:
        oldPrice = 3990
        break;
      case 6:
        oldPrice = 6990
        break;
      default:
        oldPrice = 1590
        break;
    }
    switch (time) {
      case 1:
        price = 1590
        break;
      case 3:
        price = 3990
        break;
      case 6:
        price = 6990
        break;
      default:
        price = 1590
        break;
    }
    this.old_price = price
    if (promo) {
      this.promo = Math.round((oldPrice * promo)/100)
      price -= Math.round((oldPrice * promo)/100)
    } else {
      this.promo = 0
    }
    this.price = price
  }
  checkPromo() {
    // console.log(this.subjects_form.value['promo'])
    if (this.subjects_form.value['promo']) {
      let req = {code: this.subjects_form.value['promo'], type: 1} as PromoRequest
      this._store.dispatch(promoGetAction({req: req}))
      this._store.select(getPromoStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item) {
          if (item.status) {
            this.promoError = null
            this.promoSuccess = true
            this.getPrice(this.subjects_form.value['time'], item.data)
          } else {
            this.getPrice(this.subjects_form.value['time'])
            this.promoSuccess = false
          }
          if (item.errors) {
            this.getPrice(this.subjects_form.value['time'])
            this.promoSuccess = false
            // @ts-ignore
            this.promoError = item.errors['error']['message']
          }
        }
      })
    }
  }
  openDialog(id: string, time: number) {
    this.promoSuccess = false
    this.promoError = null
    this.subjects_form.reset()
    this.subjects_form.patchValue({
      time: time
    })
    this.getPrice(time)
    this.dialog.getModal(id).open(true)
  }
  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      if(item.data){
        this.listSubjects = item.data
        const elementsToRemove = [1,2,3];
        this.subjects = item.data.filter(element => !elementsToRemove.includes(element.id));
      }
    })
  }
  updateCountdown(endDate: Date) {
    let countDown = ''
    // Получаем текущую дату и время
    const currentDate = moment();
    // Рассчитываем разницу между текущей и целевой датой
    const duration = moment.duration(moment(endDate).diff(currentDate));
    // Получаем оставшееся количество дней, часов, минут и секунд
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    // Форматируем вывод обратного отсчета
    if (seconds) {
      countDown = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    } else {
      countDown = ''
    }
    return countDown
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly faBook = faBook;
  protected readonly faStar = faStar;
  protected readonly faLanguage = faLanguage;
  protected readonly faCircleQuestion = faCircleQuestion;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly RoutesName = RoutesName;
  protected readonly faChartLine = faChartLine;
  protected readonly setInterval = setInterval;
  protected readonly moment = moment;
  protected readonly faVenusMars = faVenusMars;
  protected readonly faRocket = faRocket;
  protected readonly faUser = faUser;
  protected readonly faCode = faCode;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faCrown = faCrown;
  protected readonly faStairs = faStairs;
  protected readonly faDumbbell = faDumbbell;
  protected readonly faNewspaper = faNewspaper;
}
