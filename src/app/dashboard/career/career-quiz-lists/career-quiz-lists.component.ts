import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Pagination} from "../../../shared/store/pagination";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getCareerQuizzesSelector} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.selector";
import {GetCareerQuizzesRequest} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.request";
import {getCareerQuizzesAction} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.action";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-career-quiz-lists',
  templateUrl: './career-quiz-lists.component.html',
  styleUrls: ['./career-quiz-lists.component.scss']
})
export class CareerQuizListsComponent implements OnInit{
  //Injection Start
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  destroyRef = inject(DestroyRef);
  //Injection End
  //Data
  //@ts-ignore
  public careerQuizList:Pagination<CareerQuiz[]>;
  public careerQuizRequest:GetCareerQuizzesRequest = {
    page:1
  }
  //Data

  constructor() {
    this._store.select(getCareerQuizzesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.careerQuizList = item.data
      }
    });
  }
  ngOnInit(): void {
    this.getCareerQuizzes();
  }

  public getCareerQuizzes(){
    let request = Object.assign({},this.careerQuizRequest);
    this._store.dispatch(getCareerQuizzesAction({requestData:request}));
  }
  public changePage($event:number){
    this.careerQuizRequest.page = $event;
    this.getCareerQuizzes();
  }

  protected readonly faChevronRight = faChevronRight;
  protected readonly ImageHelper = ImageHelper;
  protected readonly RoutesName = RoutesName;
}
