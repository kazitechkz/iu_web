import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute} from "@angular/router";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {passCareerQuizAction} from "../../../shared/store/career/passCareerQuiz/passCareerQuiz.action";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {passCareerQuizSelector} from "../../../shared/store/career/passCareerQuiz/passCareerQuiz.selector";
import {OwlOptions, SlidesOutputData} from "ngx-owl-carousel-o";
import {RoutesName} from "../../../core/constants/routes.constants";
import {faChevronLeft, faChevronRight, faPlus, faWindowClose, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FinishCareerQuizRequest} from "../../../shared/store/career/finishCareerQuiz/finishCareerQuiz.request";
import {finishCareerQuizAction} from "../../../shared/store/career/finishCareerQuiz/finishCareerQuiz.action";
import {CareerQuizQuestionWithAnswerModel} from "../../../shared/models/careerQuizQuestionWithAnswer.model";
import {CareerQuizAnswer} from "../../../shared/models/careerQuizAnswer.model";
import {DndDropEvent} from "ngx-drag-drop";

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
  //@ts-ignore
  public careerQuestionsWithAnswers:CareerQuizQuestionWithAnswerModel[] = [];
  public sortAnswer: {
    [key: number]: { [innerKey: number]: number };
  } = {};
  public checkedAnswerIDS:number[] = [];
  public activeAnswerId : number|null = null;
  public slider:number = 0;
  public finishRequestQuiz:FinishCareerQuizRequest ={quiz_id:0,given_answers:""}
  public ratingTitle:{[key: number]: { title_ru: string,title_kk:string,className:string}} = {
    8:{title_ru:'Совершенно согласен',title_kk:'Мүлдем келісемін',className:'text-green-700 font-bold'},
    7:{title_ru:'Согласен',title_kk:'Келісемін',className:'text-green-600 font-bold'},
    6:{title_ru:'Скорее согласен',title_kk:'Керісінше келісемін',className:'text-green-500 font-bold'},
    5:{title_ru:'Склонен соглашаться',title_kk:'Келісуге бейім',className:'text-green-400 font-bold'},
    4:{title_ru:'Нейтрально',title_kk:'Бейтарап', className:'text-yellow-300 font-bold'},
    3:{title_ru:'Склонен не соглашаться',title_kk:'Келіспеуге бейім',className:'text-rose-400 font-bold'},
    2:{title_ru:'Скорее не согласен',title_kk:'Керісінше келіспеймін',className:'text-rose-500 font-bold'},
    1:{title_ru:'Не согласен',title_kk:'Келіспеймін',className:'text-rose-600 font-bold'},
  }
  //Data
  @ViewChild('owlCar') owlCar: any;
  constructor() {
    this._store.select(passCareerQuizSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.careerQuiz = item.data;
        if(item.data.code == "DRAG_DROP"){
          item.data.career_quiz_questions?.forEach(question=>{
            this.careerQuestionsWithAnswers.push({question:question,answers:item.data?.career_quiz_answers ? item.data?.career_quiz_answers?.filter(item=>item.question_id == question.id) : null})
          })
        }
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
  finishQuizDragAndDrop(){
    if(this.checkedAnswerIDS.length == this.careerQuiz?.career_quiz_answers?.length){
      let request = {quiz_id: this.quizId,given_answers: JSON.stringify(this.sortAnswer)};
      this.finishRequestQuiz = Object.assign(this.finishRequestQuiz,request);
      console.log(this.finishRequestQuiz);
      this._store.dispatch(finishCareerQuizAction({requestData:this.finishRequestQuiz}));
    }
  }

  getData(data: SlidesOutputData) {
    this.slider = data.startPosition??0;
  }
  onDragStart(event: DragEvent,answerId:number) {
    this.activeAnswerId = answerId;
  }
  onDraggableMoved(event: DragEvent,answerId:number) {
    this.activeAnswerId = answerId;
  }
  onDrop(event:DndDropEvent,questionId:number,rating:number) {
    if(this.activeAnswerId){
      if(this.sortAnswer[questionId]){
        this.sortAnswer[questionId][rating] = this.activeAnswerId;
      }
      else{
        this.sortAnswer[questionId] = [];
        this.sortAnswer[questionId] = {[rating]:this.activeAnswerId};
      }
      this.checkedAnswerIDS.push(this.activeAnswerId);
    }
  }
  deleteByInnerKey(questionId: number, rating: number): void {
    // Check if the outer key exists
    if (this.sortAnswer.hasOwnProperty(questionId)) {
      // Check if the inner key exists
      if (this.sortAnswer[questionId].hasOwnProperty(rating)) {
        // Delete the inner key
        let index = this.checkedAnswerIDS.findIndex(element => element ===  this.sortAnswer[questionId][rating]);
        if (index !== -1) {
          this.checkedAnswerIDS.splice(index, 1);
        }
        delete this.sortAnswer[questionId][rating];
      }
    }
  }
  getAnswer(answerId:number|null):CareerQuizAnswer|null{
    if(answerId){
      return this.careerQuiz?.career_quiz_answers?.find(item=>item.id == answerId) ?? null;
    }
    return null;
  }

  dropzoneIsClosed(questionId:number,rating:number):boolean{
    return  this.sortAnswer.hasOwnProperty(questionId) ? (this.sortAnswer[questionId].hasOwnProperty(rating) ? true : false) : false
  }


  protected readonly RoutesName = RoutesName;
  protected readonly JSON = JSON;
  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
  protected readonly Object = Object;
  protected readonly faWindowClose = faWindowClose;
  protected readonly faXmark = faXmark;
  protected readonly faPlus = faPlus;
}
