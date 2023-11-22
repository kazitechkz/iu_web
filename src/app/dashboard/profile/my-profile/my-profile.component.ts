import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  getTournamentDetailSelector
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
import {Me} from "../../../shared/models/user.model";
import {
  faCalendar,
  faCrown,
  faEnvelope,
  faPencilAlt,
  faPhone,
  faUser,
  faVenusMars
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit{
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);

  //Data
  //@ts-ignore
  me:Me;
  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data){
        this.me = item.data;
      }
    });
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
  protected readonly Date = Date;
}
