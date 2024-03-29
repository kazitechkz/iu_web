import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  faClock,
  faLightbulb,
  faDice,
  faStar,
  faBug,
  faForwardFast,
  faBackwardFast,
  faCheck,
  faHandshake,
  faFaceFrownOpen,
  faClover,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {Attempt} from "../../../shared/models/attempt.model";
import {Question} from "../../../shared/models/question.model";
import {ActivatedRoute} from "@angular/router";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {AnsweredResult} from "../../../shared/store/attempt/answeredResult/answeredResult";
import {onAnsweredResultAction} from "../../../shared/store/attempt/answeredResult/answerResult.action";
import {AnsweredResultRequest} from "../../../shared/store/attempt/answeredResult/answerResult.request";
import {answeredResultSelector} from "../../../shared/store/attempt/answeredResult/answerResult.selector";
import {initFlowbite} from "flowbite";
import {StrHelper} from "../../../core/helpers/str.helper";
import {ColorConstants} from "../../../core/constants/color.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {SaveQuestionRequest} from "../../../shared/store/attempt/saveQuestion/saveQuestion.request";
import {onSaveQuestionAction} from "../../../shared/store/attempt/saveQuestion/saveQuestion.action";
import {AppealType} from "../../../shared/models/appealType.model";
import {appealTypesAction} from "../../../shared/store/appeal/appealTypes/appealTypes.action";
import {appealTypeSelector} from "../../../shared/store/appeal/appealTypes/appealTypes.selector";
import {onCreateAppealAction} from "../../../shared/store/appeal/createAppeal/createAppeal.action";
import {getStatAction} from "../../../shared/store/attempt/getStat/getStat.action";
import {getStatSelector} from "../../../shared/store/attempt/getStat/getStat.selector";
import {AttemptQuestion} from "../../../shared/models/attemptQuestion.model";
import {Subscription} from "rxjs";
import {AttemptModel} from "../../../shared/models/attempt";
import {CountdownConfig} from "ngx-countdown";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {
  getAIAnswerOnQuestionSelector
} from "../../../shared/store/openAI/getAIAnswerOnQuestion/getAIAnswerOnQuestion.selector";
import {
  GetAIAnswerOnQuestionRequest
} from "../../../shared/store/openAI/getAIAnswerOnQuestion/getAIAnswerOnQuestion.request";
import {
  getAIAnswerOnQuestionAction
} from "../../../shared/store/openAI/getAIAnswerOnQuestion/getAIAnswerOnQuestion.action";

@Component({
  selector: 'app-unt-result',
  templateUrl: './unt-result.component.html',
  styleUrls: ['./unt-result.component.scss']
})
export class UntResultComponent implements  OnInit, OnDestroy{
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  public active_slider = 0;
  dialog = inject(NgxSmartModalService)
  public answeredResult:AnsweredResult = {};
  public appealTypes:AppealType[] = [];
  public appealRequest = {type_id:0,question_id:0,message:""};
  public answered_questions:{[key: number]: any}= {};
  //@ts-ignore
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  destroyRef = inject(DestroyRef);
  questions:Question[] = [];
  //@ts-ignore
  active_subject_id:number;
  loading = false;
  //@ts-ignore
  public attempt:Attempt;
  //@ts-ignore
  public result:AttemptModel;
  public attempt_question:AttemptQuestion[] = [];
  //@ts-ignore
  question_pagination:any;
  timeConfig:CountdownConfig = {
    // @ts-ignore
    leftTime:180,
    demand:true
  }
  //AI
  aiAnswer:string|null = null;
  aiAnswers:{[key: number]:string} = {};
  //

  constructor() {
    this._store.select(getAIAnswerOnQuestionSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.aiAnswer = item.data;
        this.aiAnswers[this.questions[this.active_slider].id] = item.data
      }
    })
  }

  ngOnInit(): void {
    this.getAttempt();
    this.getAppealTypes();
    initFlowbite();
  }


  getAttempt(){
    this.loading = true;
    this.subscription =  this._route.params.subscribe(params => {
      this._store.dispatch(getStatAction({requestData:params["id"]}));
      this._store.select(getStatSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.attempt = item.data.attempt;
          this.result = item.data.result;
          this.attempt_question = item.data.attempt_questions;
          this.timeConfig.leftTime = (item.data.result.time - item.data.result.time_left)/1000;
          this.timeConfig.stopTime;
          this.active_subject_id = (item.data.attempt.subject_questions.find(item => true))?.attempt_subject_id ?? 0;
          this.questions = (item.data.attempt.subject_questions.find(item => true))?.question ?? [];
          this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
          this.getAttemptResult((item.data.attempt.subject_questions.find(item => true))?.attempt_subject_id??0);
        }
      });
    });
    this.loading = false;
  }



  getAttemptResult(active_subject_id:number){
    let requestAnswer = {attempt_subject_id:active_subject_id} as AnsweredResultRequest;
    this._store.dispatch(onAnsweredResultAction({requestData:requestAnswer}));
    this._store.select(answeredResultSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.answeredResult = item.data;
      }
    });
  }

  getAppealTypes(){
    this._store.dispatch(appealTypesAction());
    this._store.select(appealTypeSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.appealTypes = item.data;
        this.appealRequest.type_id = item.data.find(item=>true)?.id ??0;
      }
    });
  }

  changeSubject(subject_id:any){
    this.loading = true;
    subject_id = subject_id.target.value;
    this.active_subject_id = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.attempt_subject_id ?? 0;
    this.questions = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.question ?? [];
    this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
    this.loading = false;
    this.getAttemptResult(this.active_subject_id);
  }





  saveQuestion(){
    let request = {questionId:this.questions[this.active_slider].id} as SaveQuestionRequest;
    this._store.dispatch(onSaveQuestionAction({requestData:request}));
  }




  createAppeal(){
    this.appealRequest.question_id = this.questions[this.active_slider].id;
    let request = Object.assign({},this.appealRequest)
    this._store.dispatch(onCreateAppealAction({requestData:request}));
    this.appealRequest.message = "";
    this.closeModal('appealModal');
  }



  is_answered(answer:string){
    this.is_correct(answer);
    let index = this.questions[this.active_slider].id;
    if(this.answered_questions[index]){
      return this.answered_questions[index].answers.includes(answer);
    }
    if(this.answeredResult[index]){
      return this.answeredResult[index].includes(answer);
    }
    return false;
  }


  is_correct(answer:string){
    let correct_answers = this.questions[this.active_slider].correct_answers?.split(",");
    if(correct_answers){
      return correct_answers.includes(answer);
    }
    return false;
  }

  is_answered_correct(answer:string){
    let correct_answers = this.questions[this.active_slider].correct_answers?.split(",");
    if(correct_answers){
      return correct_answers.includes(answer);
    }
    return false;

  }

  get_answer_style(answer:string){
    let right_but_not_answered = {'border-green-400':true,'border-2':true};
    let right_answered = {'text-white':true,'main-green-bg':true,'border-green-500':true};
    let not_right_answered = {'text-white':true,'bg-red-500':true,'border-red-500':true};

    //Проверяем ответил ли пользователь на данный вопрос
    if (this.is_answered(answer)){
      //Проверяем верно ли или нет
        return  this.is_answered_correct(answer) ? right_answered : not_right_answered;
    }
    else{
      return  this.is_answered_correct(answer) ? right_but_not_answered : {'main-violet-first-rounded':true};
    }
  }

  get_question_result(activeSlider:number|null = null):number{
    let customActiveSlider = activeSlider ?? this.active_slider;
    return this.attempt_question.find(item=>item.question_id == this.questions[customActiveSlider].id)?.point ??0;
  }

  get_question_result_style(activeSlider:number|null = null){
      let customActiveSlider = activeSlider ?? this.active_slider;
      let point = this.get_question_result(customActiveSlider);
      let not_right = {'text-white':true,'bg-red-500':true,'border-red-500':true};
      let already_answered = {'text-white':true,'bg-yellow-500':true,'border-yellow-500':true};
      let right_answered = {'text-white':true,'bg-green-500':true,'border-green-500':true};
      let type_id = this.questions[customActiveSlider].type_id;
      if(type_id != 3){
        return point > 0 ? right_answered : not_right;
      }
      else{
          if(point == 2){
            return  right_answered;
          }
          if(point == 1){
            return already_answered;
          }
          return not_right;
      }
  }

  getAiAnswer(renew:boolean = false){
    let questionId = this.questions[this.active_slider].id;
    let status = renew ? "new" : "old";
    if(questionId){
      if(this.aiAnswers[questionId] && !renew){
        this.aiAnswer = this.aiAnswers[questionId]
      }
      else{
        let request = Object.assign({},{question_id:questionId,status:status}) as GetAIAnswerOnQuestionRequest
        this._store.dispatch(getAIAnswerOnQuestionAction({requestData:request}));
      }
      this.openModal("aiPromptModal");
    }


  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  //Open Modal
  openModal(modalIdentifier:string){
    this.dialog.getModal(modalIdentifier).open()
  }


  closeModal(modalIdentifier:string){
    this.dialog.getModal(modalIdentifier).close()
  }

  //Open Modal



  //Sliders
  goToSlider(slideNo:number){
    this.slickModal.slickGoTo(slideNo);
  }
  changeSlider($event:any){
    this.active_slider = $event.currentSlide;
  }
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }

  //@ts-ignore
  slidePaginationConfig = {
    "slidesToShow": 15,
    "slidesToScroll": 15,
    "dots": false,
    'speed':100,
    "arrows":false,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          dots: false
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      }
    ]
  };
  questionSlider = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "arrows":false,
    "infinite": false,
    adaptiveHeight: true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
//Sliders


  protected readonly StrHelper = StrHelper;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faFaceFrownOpen = faFaceFrownOpen;
  protected readonly faLightbulb = faLightbulb;
  protected readonly faStar = faStar;
  protected readonly faBug = faBug;
  protected readonly faBackwardFast = faBackwardFast;
  protected readonly faForwardFast = faForwardFast;
  protected readonly RoutesName = RoutesName;
  protected readonly faClock = faClock;
  protected readonly faRobot = faRobot;
}
