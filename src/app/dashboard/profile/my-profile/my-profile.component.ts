import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  getTournamentDetailSelector
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getAccountState, getChangeAccountState} from "../../../shared/store/user/account/account.selector";
import {Me} from "../../../shared/models/user.model";
import {
  faCalendar,
  faCrown,
  faEnvelope, faLock,
  faPencilAlt,
  faPhone,
  faUser,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ColorConstants} from "../../../core/constants/color.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
import {subStepAction} from "../../../shared/store/step/subStep/subStep.action";
import {getSubStepState} from "../../../shared/store/step/subStep/subStep.selector";
import {NgxSmartModalService} from "ngx-smart-modal";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangeProfileRequest} from "../../../shared/store/user/account/account.request";
import {accountAction, accountChangeAction} from "../../../shared/store/user/account/account.action";
import {Plan} from "../../../shared/models/plan.model";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {Subject} from "../../../shared/models/subject.model";
import Swal from "sweetalert2";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public subscriptions: Plan[] = []
  public basicSubscriptions: Plan[] = []
  public standardSubscriptions: Plan[] = []
  public premiumSubscriptions: Plan[] = []
  public listSubjects: Subject[] = []
  public subjects: Subject[] = []
  private _store = inject(Store);
  private destroyRef: DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private dialog = inject(NgxSmartModalService)
  private _activateRoute = inject(ActivatedRoute)
  errors: Record<string, string[]> | null = null;
  profile_form: FormGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required
    ]),
    date: new FormControl(null),
    phone: new FormControl("", [
      Validators.required,
      //Validators.pattern('[- +()0-9]{11,12}')
      //Validators.pattern(/^\+?77(\d{9})+$/gi),
    ]),
    gender: new FormControl(null),
    password: new FormControl(null, [
      Validators.min(4),
      Validators.max(255),
    ]),
  });
  //Data
  //@ts-ignore
  me: Me;

  ngOnInit(): void {
    this.checkURL()
    this.getUserInfo()
    this.getSubscriptions()
    this.getSubjects()
  }
  checkURL() {
    this._activateRoute.queryParams.subscribe(params => {
      if (params['success'] == 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Подписка успешно оформлена!",
          showConfirmButton: false,
          timer: 4000
        });
        this.getSubscriptions()
      }
      if (params['error'] == 1) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Что-то пошло не так!",
          showConfirmButton: false,
          timer: 4000
        });
      }
    })
  }
  getUserInfo() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.me = item.data;
      }
    });
  }
  getSubscriptions() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.subscriptions = Object.values(item.data.subscription) as Plan[]
        this.basicSubscriptions = Object.values(item.data.subscription).filter(x => x.price === 990)
        this.standardSubscriptions = Object.values(item.data.subscription).filter(x => x.price === 2490)
        this.premiumSubscriptions = Object.values(item.data.subscription).filter(x => x.price === 4990)
      }
    })
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
  openDialog(name: string) {
    this.dialog.getModal(name).open()
    this.profile_form.patchValue({
      'name': this.me.name,
      'date': this.me.birth_date ? moment(this.me.birth_date).format("yyyy-MM-DD") : '',
      'phone': this.me.phone,
      'gender': this.me.gender ? this.me.gender.id : 1
    })
  }
  update() {
    if (this.profile_form.valid) {
      let req = this.profile_form.getRawValue() as ChangeProfileRequest
      this._store.dispatch(accountChangeAction({request: req}))
      this._store.select(getChangeAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.getUserInfo()
          this.dialog.closeLatestModal()
        }
      })
    }
  }
  getSubjectName(id: any, locale: string|null) {
    let subject = this.listSubjects.find(x => x.id === parseInt(id))
    if (locale) {
      if (locale == 'kk') {
        return subject?.title_kk
      } else {
        return subject?.title_ru
      }
    } else {
      return subject?.title_ru
    }
  }
  getSubjectIDFromTag(tag: any) {
    let split = tag.split('.')
    return split[0];
  }

  protected readonly faEnvelope = faEnvelope;
  protected readonly faPhone = faPhone;
  protected readonly faCrown = faCrown;
  protected readonly faUser = faUser;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faPencilAlt = faPencilAlt;
  protected readonly faVenusMars = faVenusMars;
  protected readonly faCalendar = faCalendar;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly ColorConstants = ColorConstants;
  protected readonly StrHelper = StrHelper;
  protected readonly Date = Date;
  protected readonly faLock = faLock;
  protected readonly parseInt = parseInt;
}
