import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Me} from "../../../shared/models/user.model";
import {accountAction} from "../../../shared/store/user/account/account.action";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {
  faCameraAlt, faCoins,
  faFaceMeh,
  faFaceSadCry, faFaceSadTear, faInfo, faLock, faLockOpen,
  faSadCry,
  faShieldAlt,
  faSmileWink
} from "@fortawesome/free-solid-svg-icons";
import {getBattleStatsAction} from "../../../shared/store/battle/getBattleStats/getBattleStats.action";
import {getBattleStatsSelector} from "../../../shared/store/battle/getBattleStats/getBattleStats.selector";
import {GetBattleStatsModel} from "../../../shared/store/battle/getBattleStats/getBattleStats.model";
import {GetBattleHistoryRequest} from "../../../shared/store/battle/getBattleHistory/getBattleHistory.request";
import {getBattleHistoryAction} from "../../../shared/store/battle/getBattleHistory/getBattleHistory.action";
import {Pagination} from "../../../shared/store/pagination";
import {Battle} from "../../../shared/models/battle.model";
import {getBattleHistorySelector} from "../../../shared/store/battle/getBattleHistory/getBattleHistory.selector";
import * as moment from "moment";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-battle-stats',
  templateUrl: './battle-stats.component.html',
  styleUrls: ['./battle-stats.component.scss']
})
export class BattleStatsComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  //@ts-ignore
  me: Me;
  stats:GetBattleStatsModel|null = null;
  battlesPagination:Pagination<Battle[]>|null = null;
  pageRequest = {page:1}
  //Injection
  constructor() {
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.me = item.data;
      }
    });
    this._store.select(getBattleStatsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.stats = item.data;
      }
    });
    this._store.select(getBattleHistorySelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.battlesPagination = item.data;
      }
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getBattleStat();
    this.getBattleHistory();
  }

  getUserInfo() {
    this._store.dispatch(accountAction())
  }

  getBattleStat() {
    this._store.dispatch(getBattleStatsAction())
  }
  public changeBattlePage($event:number){
    this.pageRequest.page = $event;
    this.getBattleHistory();
  }
  getBattleHistory() {
    let request = Object.assign({},this.pageRequest) as GetBattleHistoryRequest;
    this._store.dispatch(getBattleHistoryAction({requestData:request}))
  }

  //@ts-ignore
  protected readonly Image = Image;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faCameraAlt = faCameraAlt;
  protected readonly faShieldAlt = faShieldAlt;
  protected readonly faSmileWink = faSmileWink;
  protected readonly faSadCry = faSadCry;
  protected readonly faFaceMeh = faFaceMeh;
  protected readonly faFaceSadCry = faFaceSadCry;
  protected readonly faFaceSadTear = faFaceSadTear;
  protected readonly faCoins = faCoins;
  protected readonly faLockOpen = faLockOpen;
  protected readonly faLock = faLock;
  protected readonly moment = moment;
  protected readonly Date = Date;
  protected readonly faInfo = faInfo;
  protected readonly RoutesName = RoutesName;
}
