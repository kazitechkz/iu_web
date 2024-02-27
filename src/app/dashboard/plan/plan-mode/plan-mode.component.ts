import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ImageHelper} from "../../../core/helpers/image.helper";
import {
  faBook,
  faChartLine,
  faCircleQuestion, faCode,
  faGraduationCap,
  faLanguage, faRocket,
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
import {Plan} from "../../../shared/models/plan.model";
import * as moment from "moment/moment";
import {accountAction} from "../../../shared/store/user/account/account.action";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
import Swal from "sweetalert2";

@Component({
  selector: 'app-plan-mode',
  templateUrl: './plan-mode.component.html',
  styleUrls: ['./plan-mode.component.scss']
})
export class PlanModeComponent implements OnInit {
  ngOnInit(): void {
    this.getSubjects()
  }
  countdown: string = '';
  endDate: moment.Moment = moment();
  errors: Record<string, string[]> | null = null;
  public subscriptions: Plan[] = []
  public basicSubscriptions: Plan[] = []
  public standardSubscriptions: Plan[] = []
  public premiumSubscriptions: Plan[] = []
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslatePipe)
  dialog = inject(NgxSmartModalService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  private _route = inject(Router)
  private _activateRoute = inject(ActivatedRoute)
  public listSubjects: Subject[] = []
  public subjects: Subject[] = []
  subjects_form: FormGroup = new FormGroup({
    time: new FormControl(1),
    subject_first: new FormControl(0, [Validators.required]),
    subject_second: new FormControl(0, [Validators.required]),
  }, {validators: this.subjectsNotEqualValidator()});

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
        if (item.data) {
         window.location.href = item.data.pg_redirect_url
        }
      })
    }
    this.subjects_form.reset()
  }
  openDialog(id: string, time: number) {
    this.subjects_form.reset()
    this.subjects_form.patchValue({
      time: time
    })
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
}
