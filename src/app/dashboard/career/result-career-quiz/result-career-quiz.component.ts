import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute} from "@angular/router";
import {NgxSmartModalService} from "ngx-smart-modal";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {getCareerQuizSelector} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {resultCareerQuizSelector} from "../../../shared/store/career/resultCareerQuiz/resultCareerQuiz.selector";
import {CareerQuizAttempt} from "../../../shared/models/careerQuizAttempt.model";
import {getCareerQuizAction} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.action";
import {resultCareerQuizAction} from "../../../shared/store/career/resultCareerQuiz/resultCareerQuiz.action";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment/moment";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-result-career-quiz',
  templateUrl: './result-career-quiz.component.html',
  styleUrls: ['./result-career-quiz.component.scss']
})
export class ResultCareerQuizComponent implements OnInit{

  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  dialog = inject(NgxSmartModalService);
  //Injection
  //Data
  public attemptId:number|null = null;
  public careerQuizAttempt:CareerQuizAttempt|null = null;
  //Data
  constructor() {
    this._store.select(resultCareerQuizSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.careerQuizAttempt = item.data;
      }
    })
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.attemptId = params["id"];
    })
    if(this.attemptId){
      this.getCareerQuizAttempt();
    }
  }

  public getCareerQuizAttempt(){
    this._store.dispatch(resultCareerQuizAction({requestData:this.attemptId??0}));
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
