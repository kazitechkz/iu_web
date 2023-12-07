import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Question} from "../../../shared/models/question.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  GetMySavedQuestionByIdRequest
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.request";
import {
  getMySavedQuestionByIdAction
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.action";
import {
  getMySavedQuestionByIdSelector
} from "../../../shared/store/question/getMySavedQuestionById/getMySavedQuestionById.selector";
import {
  GetMyAppealQuestionsRequest
} from "../../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.request";
import {
  GetMyAppealQuestionByIdRequest
} from "../../../shared/store/appeal/getMyAppealQuestionById/getMyAppealQuestionById.request";
import {
  getMyAppealQuestionByIdAction
} from "../../../shared/store/appeal/getMyAppealQuestionById/getMyAppealQuestionById.action";
import {
  getMyAppealQuestionByIdSelector
} from "../../../shared/store/appeal/getMyAppealQuestionById/getMyAppealQuestionById.selector";
import {Appeal} from "../../../shared/models/appeal.model";

@Component({
  selector: 'app-appeal-question',
  templateUrl: './appeal-question.component.html',
  styleUrls: ['./appeal-question.component.scss']
})
export class AppealQuestionComponent implements OnInit{
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //Data
  //@ts-ignore
  public appeal:Appeal;
  //@ts-ignore
  public question:Question;
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.getAppealQuestion(params["id"]);
    });
  }


  getAppealQuestion(id:number){
    let request = {id:id};
    request = request as GetMyAppealQuestionByIdRequest;
    this._store.dispatch(getMyAppealQuestionByIdAction({requestData:request}));
    this._store.select(getMyAppealQuestionByIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.appeal = item.data;
        if(item.data.question){
          this.question = item.data.question;
        }
      }
    });
  }

}
