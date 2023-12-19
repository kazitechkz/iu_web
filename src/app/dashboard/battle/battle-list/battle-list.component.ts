import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {
  faArrowRight,
  faBook, faCheck,
  faForwardFast,
  faGamepad,
  faGift,
  faLanguage,
  faUsers,
  faCoins, faLock, faLockOpen, faClock, faMoneyBill, faEye
} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {Battle} from "../../../shared/models/battle.model";
import {GetActiveBattlesRequest} from "../../../shared/store/battle/getActiveBattles/getActiveBattles.request";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getActiveBattlesAction} from "../../../shared/store/battle/getActiveBattles/getActiveBattles.action";
import {getActiveBattlesSelector} from "../../../shared/store/battle/getActiveBattles/getActiveBattles.selector";
import * as moment from "moment/moment";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {myBalanceAction} from "../../../shared/store/wallet/myBalance/myBalance.action";
import {myBalanceSelector} from "../../../shared/store/wallet/myBalance/myBalance.selector";
import {CreateBattleRequest} from "../../../shared/store/battle/createBattle/createBattle.request";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {createBattleAction} from "../../../shared/store/battle/createBattle/createBattle.action";
import {JoinToBattleRequest} from "../../../shared/store/battle/joinToBattle/joinToBattle.request";
import {joinToBattleAction} from "../../../shared/store/battle/joinToBattle/joinToBattle.action";
import {joinToBattleSelector} from "../../../shared/store/battle/joinToBattle/joinToBattle.selector";
import {Router} from "@angular/router";
import {PusherService} from "../../../shared/services/pusher.service";
import {Channel} from "pusher-js";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";
import {Me} from "../../../shared/models/user.model";
import {SessionService} from "../../../shared/services/session.service";
import {initTE, Tab} from "tw-elements";
import {myActiveBattlesAction} from "../../../shared/store/battle/myActiveBattles/myActiveBattles.action";
import {myActiveBattlesSelector} from "../../../shared/store/battle/myActiveBattles/myActiveBattles.selector";

@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.scss']
})
export class BattleListComponent implements OnInit,OnDestroy{
//Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  dialog = inject(NgxSmartModalService);
  fb = inject(FormBuilder);
  private router = inject(Router);
  //Inject
  //@ts-ignore
  public battleListData:Pagination<Battle[]>;
  public battleList:Battle[] = [];
  public myBattleList:Battle[] = [];
  public myBalance:number = 0;
  public locale_id:number = 1;
  public loading:boolean = false;
  public battleListRequest:GetActiveBattlesRequest = {
    page:1
  }
  errors:Record<string, string[]> | null = null;
  public pusher = inject(PusherService);
  //@ts-ignore
  private pusherChannel: Channel;
  public user?: Me | null;
  private sessionService:SessionService = inject(SessionService);

  ngOnInit(): void {
    initTE({Tab});
    this.getMyBalance();
    this.getActiveBattleList();
    this.getMyActiveBattleList();
    this.getUser();
    this.listenBattleAddedEvent();
    this.listenBattleRemovedEvent();
  }
  ngOnDestroy(): void {
    this.pusherChannel.unsubscribe();
  }

  public getActiveBattleList(){
    let request = Object.assign({},this.battleListRequest);
    this._store.dispatch(getActiveBattlesAction({requestData:request}));
    this._store.select(getActiveBattlesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.battleListData = item.data;
        if(item.data.data){
          this.battleList.push(...item.data.data);
        }
      }
    });
  }

  public getMyActiveBattleList(){
    this._store.dispatch(myActiveBattlesAction());
    this._store.select(myActiveBattlesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
          this.myBattleList.push(...item.data);
      }
    });
  }

  public getMyBalance(){
    this._store.dispatch(myBalanceAction());
    this._store.select(myBalanceSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.myBalance = item.data;
        this.createBattle.controls["price"].addValidators(Validators.max(item.data))
      }
    });
  }

  public onCreateBattle(){
    if(this.createBattle.valid){
      this.loading = true;
      let data = this.createBattle.getRawValue();
      let request = Object.assign({locale_id:this.locale_id},data);
      request = request as CreateBattleRequest;
      this._store.dispatch(createBattleAction({requestData:request}));
      this.loading = false;
    }
  }

  getUser(){
    this.user = this.sessionService.getDataFromLocalStorage(LocalKeysConstants.user) as Me;
  }

  public joinToBattle(promo_code:string){
    let request = {promo_code:promo_code,pass_code:""} as JoinToBattleRequest;
    this._store.dispatch(joinToBattleAction({requestData:request}));
    this._store.select(joinToBattleSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.router.navigate(['/'+RoutesName.battleDetail+'/'+item.data.promo_code.toString()]);
      }
    });
  }

  public changeActiveBattlePage($event:number){
    this.battleListRequest.page = $event;
    this.getActiveBattleList();
  }

  openDialog() {
    this.dialog.getModal('create-game-modal').open();
  }
  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  createBattle:FormGroup = this.fb.group({
    price:new FormControl(10,[
      Validators.required,
      Validators.min(10)
    ]),
    pass_code:new FormControl("",),
  })

  listenBattleAddedEvent(){
    this.pusherChannel = this.pusher.getChannel('battle-list-added');
    this.pusherChannel.bind('BattleAdded', (data: {battle:Battle}) => {
      if(data.hasOwnProperty("battle")){
        if(data.battle){
          if(this.user){
            if(data.battle.owner_id != this.user.id){
              this.battleList.unshift(data.battle);
            }
          }
          else{
            this.battleList.unshift(data.battle);
          }
        }
      }
    });
  }

  listenBattleRemovedEvent(){
    this.pusherChannel = this.pusher.getChannel('battle-list-joined');
    this.pusherChannel.bind('BattleJoined', (data: {promo_code:string}) => {
      if(data.hasOwnProperty("promo_code")){
        if(data.promo_code){
          let index = this.battleList.findIndex(item=>item.promo_code = data.promo_code);
          if(index != -1){
            this.battleList.splice(index,1);
          }
        }
      }
    });
  }

  protected readonly faBook = faBook;
  protected readonly faUsers = faUsers;
  protected readonly faGift = faGift;
  protected readonly faLanguage = faLanguage;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faForwardFast = faForwardFast;
  protected readonly faGamepad = faGamepad;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faCheck = faCheck;
  protected readonly faCoins = faCoins;
  protected readonly faLock = faLock;
  protected readonly faLockOpen = faLockOpen;
  protected readonly faClock = faClock;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faEye = faEye;
}
