import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute} from "@angular/router";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {getCareerQuizAction} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.action";
import {passCareerQuizAction} from "../../../shared/store/career/passCareerQuiz/passCareerQuiz.action";
import {getCareerQuizSelector} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {passCareerQuizSelector} from "../../../shared/store/career/passCareerQuiz/passCareerQuiz.selector";
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {RoutesName} from "../../../core/constants/routes.constants";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FinishCareerQuizRequest} from "../../../shared/store/career/finishCareerQuiz/finishCareerQuiz.request";
import {finishCareerQuizAction} from "../../../shared/store/career/finishCareerQuiz/finishCareerQuiz.action";

@Component({
  selector: 'app-pass-career-quiz',
  templateUrl: './pass-career-quiz.component.html',
  styleUrls: ['./pass-career-quiz.component.scss']
})
export class PassCareerQuizComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  //Data
  public quizId:number|null = null;
  public careerQuiz:CareerQuiz|null = null;
  public givenAnswer:{ [key: number]: number; } = {};
  public givenSliderKey:number[] = [];
  public slider:number = 0;
  public finishRequestQuiz:FinishCareerQuizRequest ={quiz_id:0,given_answers:""}
  //Data
  @ViewChild('owlCar') owlCar: any;
  constructor() {
    this._store.select(passCareerQuizSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.careerQuiz = item.data;
      }
    })
  }
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.quizId = params["id"];
    })
    if(this.quizId){
      this.getCareerQuiz();
    }
  }
  public getCareerQuiz(){
    this._store.dispatch(passCareerQuizAction({requestData:this.quizId??0}));
  }


  customOptions: OwlOptions = {
    loop: false,
    margin:15,
    autoHeight:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav:false,
    navText: [],
    items:1,
    responsive: {
      0: {
        items: 1
      },
    }
  }

  checkAnswer(question_id:number,point:number,index:number){
    this.givenAnswer[question_id] = point;
    if(!this.givenSliderKey.includes(index)){
      this.givenSliderKey.push(index);
    }
  }

  finishQuiz(){
    if(this.givenSliderKey.length == this.careerQuiz?.career_quiz_questions?.length){
      let request = {quiz_id: this.quizId,given_answers: JSON.stringify(this.givenAnswer)};
      this.finishRequestQuiz = Object.assign(this.finishRequestQuiz,request);
      this._store.dispatch(finishCareerQuizAction({requestData:this.finishRequestQuiz}));
    }
  }

  getData(data: SlidesOutputData) {
    this.slider = data.startPosition??0;
  }

  protected readonly RoutesName = RoutesName;
  protected readonly JSON = JSON;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
}
