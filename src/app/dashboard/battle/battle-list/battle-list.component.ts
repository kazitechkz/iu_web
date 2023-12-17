import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {
  faArrowRight,
  faBook, faCheck,
  faForwardFast,
  faGamepad,
  faGift,
  faLanguage,
  faUsers,
  faCoins
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

@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.scss']
})
export class BattleListComponent implements OnInit{
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
  public myBalance:number = 0;
  public locale_id:number = 1;
  public loading:boolean = false;
  public battleListRequest:GetActiveBattlesRequest = {
    page:1
  }
  errors:Record<string, string[]> | null = null;

  ngOnInit(): void {
    this.getMyBalance();
    this.getActiveBattleList();
  }

  public getActiveBattleList(){
    let request = Object.assign({},this.battleListRequest);
    this._store.dispatch(getActiveBattlesAction({requestData:request}));
    this._store.select(getActiveBattlesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.battleListData = item.data;
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
}
