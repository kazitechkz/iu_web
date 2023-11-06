import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Subject} from "../../shared/models/subject.model";

import {TranslateService} from "@ngx-translate/core";
import {
  faArrowCircleRight,
  faArrowRight,
  faBook,
  faBookAtlas,
  faBookOpen,
  faCalendar,
  faHandsHelping,
  faInfinity,
  faLanguage,
  faMessage,
  faMoneyBill,
  faMoneyBillWaveAlt,
  faShieldAlt,
  faStar,
  faTasksAlt,
  faTrophy,
  faUserCheck, faUsers,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons/faDumbbell";
import {ImageHelper} from "../../core/helpers/image.helper";
import {
  Tab,
  initTE,
} from "tw-elements";
import {Store} from "@ngrx/store";
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
//Injection Start
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End

  //Data
  subjects:Subject[] = [];
  //Data

  protected readonly faArrowCircleRight = faArrowCircleRight;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faBookOpen = faBookOpen;
  protected readonly faBookAtlas = faBookAtlas;
  protected readonly faLanguage = faLanguage;
  protected readonly faCalendar = faCalendar;
  protected readonly faDumbbell = faDumbbell;
  protected readonly faInfinity = faInfinity;
  protected readonly faStar = faStar;
  protected readonly faVideo = faVideo;
  protected readonly faBook = faBook;
  protected readonly faHandsHelping = faHandsHelping;
  protected readonly faTasksAlt = faTasksAlt;
  protected readonly faUserCheck = faUserCheck;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faMessage = faMessage;
  protected readonly faTrophy = faTrophy;
  protected readonly faShieldAlt = faShieldAlt;
  protected readonly faMoneyBillWaveAlt = faMoneyBillWaveAlt;
  protected readonly faUsers = faUsers;
  protected readonly ImageHelper = ImageHelper;

  ngOnInit(): void {
    initTE({ Tab });
  }
}
