import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {BattleStepQuestion} from "../../../shared/models/battleStepQuestion.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ActivatedRoute} from "@angular/router";
import {
  getBattleStepQuestionsSelector
} from "../../../shared/store/battle/getBattleStepQuestions/getBattleStepQuestions.selector";
import {accountAction} from "../../../shared/store/user/account/account.action";
import {
  getBattleStepQuestionsAction
} from "../../../shared/store/battle/getBattleStepQuestions/getBattleStepQuestions.action";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-battle-questions',
  templateUrl: './battle-questions.component.html',
  styleUrls: ['./battle-questions.component.scss']
})
export class BattleQuestionsComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);

  //Injection
  public battleQuestions:BattleStepQuestion[]|null = null;
  public promoCode:string ="";

  constructor() {
    this._store.select(getBattleStepQuestionsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.battleQuestions = item.data;
      }
    });
  }
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.promoCode = params["promo_code"]
    });
    this.getBattleStepQuestions();
  }

  getBattleStepQuestions(){
    if(this.promoCode){
      this._store.dispatch(getBattleStepQuestionsAction({requestData:this.promoCode}))
    }
  }

  checkAnswer(answer: string, user_answer: string | null, is_right: boolean | null): string {
    if (user_answer) {
      if (answer == user_answer && is_right) {
        return 'green'
      } else if (answer == user_answer && !is_right) {
        return 'red'
      } else {
        return ''
      }
    } else {
      return ''
    }
  }

  protected readonly faCheck = faCheck;
  protected readonly RoutesName = RoutesName;
}
