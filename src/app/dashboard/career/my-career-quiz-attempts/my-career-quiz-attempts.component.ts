import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {GetCareerQuizzesRequest} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.request";
import {CareerQuizAttempt} from "../../../shared/models/careerQuizAttempt.model";
import {MyCareerAttemptsRequest} from "../../../shared/store/career/myCareerAttempts/myCareerAttempts.request";
import {getCareerQuizzesSelector} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {myCareerAttemptsSelector} from "../../../shared/store/career/myCareerAttempts/myCareerAttempts.selector";
import {getCareerQuizzesAction} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.action";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from "moment/moment";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {myCareerAttemptsAction} from "../../../shared/store/career/myCareerAttempts/myCareerAttempts.action";

@Component({
  selector: 'app-my-career-quiz-attempts',
  templateUrl: './my-career-quiz-attempts.component.html',
  styleUrls: ['./my-career-quiz-attempts.component.scss']
})
export class MyCareerQuizAttemptsComponent implements OnInit{
  //Injection Start
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  destroyRef = inject(DestroyRef);
  //Injection End
  //Data
  //@ts-ignore
  public careerQuizAttempts:Pagination<CareerQuizAttempt[]>;
  public careerQuizAttemptRequest:MyCareerAttemptsRequest = {
    page:1
  }
  //Data
  constructor() {
    this._store.select(myCareerAttemptsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.careerQuizAttempts = item.data
      }
    });
  }
  ngOnInit(): void {
    this.getCareerQuizAttempts();
  }
  public getCareerQuizAttempts(){
    let request = Object.assign({},this.careerQuizAttemptRequest);
    this._store.dispatch(myCareerAttemptsAction({requestData:request}));
  }
  public changePage($event:number){
    this.careerQuizAttemptRequest.page = $event;
    this.getCareerQuizAttempts();
  }

  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
  protected readonly Image = Image;
  protected readonly ImageHelper = ImageHelper;
  protected readonly Date = Date;
}
