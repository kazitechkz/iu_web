import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {NgxSmartModalService} from "ngx-smart-modal";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ActivatedRoute} from "@angular/router";
import {Battle} from "../../../shared/models/battle.model";
import {getBattleByPromoAction} from "../../../shared/store/battle/getBattleByPromo/getBattleByPromo.action";
import {getBattleByPromoSelector} from "../../../shared/store/battle/getBattleByPromo/getBattleByPromo.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {BattleStepResult} from "../../../shared/models/battleStepResult.model";
import {BattleStep} from "../../../shared/models/battleStep.model";
import {BattleStepQuestion} from "../../../shared/models/battleStepQuestion.model";
import {accountAction} from "../../../shared/store/user/account/account.action";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
import {Me} from "../../../shared/models/user.model";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-battle-detail',
  templateUrl: './battle-detail.component.html',
  styleUrls: ['./battle-detail.component.scss']
})
export class BattleDetailComponent implements OnInit{
//Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  dialog = inject(NgxSmartModalService);
  private _route = inject(ActivatedRoute)
  //Injection
  //Data
  //@ts-ignore
  public battle:Battle
  //@ts-ignore
  public user?:Me|null;
  //Data
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.getBattle(params["promo_code"])
    })
    this.me();
  }

  getBattle(promo_code:string){
    this._store.dispatch(getBattleByPromoAction({requestData:promo_code}));
    this._store.select(getBattleByPromoSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.battle = item.data;
      }
    });
  }
  me() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if(item.data){
        this.user = item.data;
      }
    })
  }
  getBattleResult(step:BattleStep,user_id:number|null):BattleStepResult|undefined{
      return step.battle_step_results?.find(item=>(item.answered_user == user_id))
  }
  getBattleQuestion(step:BattleStep,user_id:number|null):BattleStepQuestion[]|undefined{
    return step.battle_step_questions?.filter(item=>(item.user_id == user_id))
  }

  getActiveStep(steps:BattleStep[]):BattleStep|undefined{
    return steps.find(item=>(item.is_current == true && item.current_user == (this.user?.id ?? 0)));
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly JSON = JSON;
  protected readonly faGamepad = faGamepad;
}
