import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import * as moment from "moment/moment";
import {faBook, faClock, faEye, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {initTE, Tab} from "tw-elements";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getMySavedQuestionsAction} from "../../../shared/store/question/getMySavedQuestions/getMySavedQuestions.action";
import {
  GetMySavedQuestionsRequest
} from "../../../shared/store/question/getMySavedQuestions/getMySavedQuestions.request";
import {
  getMySavedQuestionsSelector
} from "../../../shared/store/question/getMySavedQuestions/getMySavedQuestions.selector";
import {Pagination} from "../../../shared/store/pagination";
import {Question} from "../../../shared/models/question.model";
import {
  GetMyAppealQuestionsRequest
} from "../../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.request";
import {
  getMyAppealQuestionsAction
} from "../../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.action";
import {
  getMyAppealQuestionsSelector
} from "../../../shared/store/appeal/getMyAppealQuestions/getMyAppealQuestions.selector";

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss']
})
export class MyQuestionsComponent implements OnInit{
  public translate = inject(GlobalTranslateService);
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Data
  //@ts-ignore
  public questionsPagination:Pagination<Question[]>;
  //@ts-ignore
  public appealPagination:Pagination<Appeal[]>;
  public requestSavedQuestion:GetMySavedQuestionsRequest = {
    page:1
  };
  public requestAppealQuestion:GetMyAppealQuestionsRequest = {
    page:1
  }
  ngOnInit(): void {
    initTE({Tab});
    this.getMySavedQuestions();
    this.getMyAppealQuestions();
  }

  changeSavedQuestion(page:number){
    this.requestSavedQuestion.page = page;
  }

  changeAppealQuestion(page:number){
    this.requestAppealQuestion.page = page;
  }

  getMySavedQuestions(){
    let request = Object.assign({},this.requestSavedQuestion);
    this._store.dispatch(getMySavedQuestionsAction({requestData:request}));
    this._store.select(getMySavedQuestionsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.questionsPagination = item.data;
      }
    });
  }
  getMyAppealQuestions(){
    let request = Object.assign({},this.requestAppealQuestion);
    this._store.dispatch(getMyAppealQuestionsAction({requestData:request}));
    this._store.select(getMyAppealQuestionsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.appealPagination = item.data;
      }
    });
  }

  protected readonly moment = moment;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faBook = faBook;
  protected readonly faClock = faClock;
  protected readonly RoutesName = RoutesName;
  protected readonly faEye = faEye;
}
