import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getMySavedQuestionByIdAction
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.action";

import {
  GetMySavedQuestionByIdRequest
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.request";
import {
  getMySavedQuestionByIdSelector
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.selector";
import {Question} from "../../../shared/models/question.model";

@Component({
  selector: 'app-saved-question',
  templateUrl: './saved-question.component.html',
  styleUrls: ['./saved-question.component.scss']
})
export class SavedQuestionComponent implements OnInit{
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //Data
  //@ts-ignore
  public question:Question;
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.getQuestion(params["id"]);
    });
  }

  is_answered_correct(answer:string){
    let correct_answers = this.question.correct_answers?.split(",");
    if(correct_answers){
      return correct_answers.includes(answer);
    }
    return false;
  }

  getQuestion(id:number){
    let request = {id:id};
    request = request as GetMySavedQuestionByIdRequest;
    this._store.dispatch(getMySavedQuestionByIdAction({requestData:request}));
    this._store.select(getMySavedQuestionByIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.question = item.data;
      }
    });
  }

}
