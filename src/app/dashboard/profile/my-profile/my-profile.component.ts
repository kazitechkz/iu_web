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

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit{
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private dialog = inject(NgxSmartModalService)
  errors:Record<string, string[]> | null = null;
  profile_form : FormGroup = new FormGroup({
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
  me:Me;
  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data){
        this.me = item.data;
      }
    });
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
}
