import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {faClock, faLightbulb, faDice, faStar, faBug, faForwardFast, faBackwardFast, faCheck, faHandshake, faFaceFrownOpen, faClover} from "@fortawesome/free-solid-svg-icons";
import {CountdownConfig, CountdownEvent} from "ngx-countdown";
import {RoutesName} from "../../../core/constants/routes.constants";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {getAttemptAction} from "../../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {Attempt} from "../../../shared/models/attempt.model";
import {Question} from "../../../shared/models/question.model";
import {ActivatedRoute} from "@angular/router";
import {distinctUntilChanged, Subscription} from "rxjs";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {createAnswerAction} from "../../../shared/store/attempt/answer/answer.action";
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
import {GetFiftyFiftyModel} from "../../../shared/store/attempt/getFiftyFifty/getFiftyFifty.model";
import {GetFiftyFiftyRequest} from "../../../shared/store/attempt/getFiftyFifty/getFiftyFifty.request";
import {onGetFiftyFiftyAction} from "../../../shared/store/attempt/getFiftyFifty/getFiftyFifty.action";
import {getFiftyFiftySelector} from "../../../shared/store/attempt/getFiftyFifty/getFiftyFifty.selector";
import {AppealType} from "../../../shared/models/appealType.model";
import {appealTypesAction} from "../../../shared/store/appeal/appealTypes/appealTypes.action";
import {appealTypeSelector} from "../../../shared/store/appeal/appealTypes/appealTypes.selector";
import {onCreateAppealAction} from "../../../shared/store/appeal/createAppeal/createAppeal.action";
import {answerSelector} from "../../../shared/store/attempt/answer/answer.selector";
import {getStatAction} from "../../../shared/store/attempt/getStat/getStat.action";
import {getStatSelector} from "../../../shared/store/attempt/getStat/getStat.selector";

@Component({
  selector: 'app-unt-result',
  templateUrl: './unt-result.component.html',
  styleUrls: ['./unt-result.component.scss']
})
export class UntResultComponent {
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute)
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
  question_pagination:any;

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
          this.attempt = item.data;
          this.active_subject_id = (item.data.subject_questions.find(item => true))?.attempt_subject_id ?? 0;
          this.questions = (item.data.subject_questions.find(item => true))?.question ?? [];
          this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
          this.getAttemptResult((item.data.subject_questions.find(item => true))?.attempt_subject_id??0);
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
    let index = this.questions[this.active_slider].id;
    if(this.answered_questions[index]){
      return this.answered_questions[index].answers.includes(answer);
    }
    if(this.answeredResult[index]){
      return this.answeredResult[index].includes(answer);
    }
    return false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 12,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          dots: false
        }
      },
      {
        breakpoint: 700,
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
  protected readonly ColorConstants = ColorConstants;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faHandshake = faHandshake;
  protected readonly prompt = prompt;
  protected readonly faFaceFrownOpen = faFaceFrownOpen;
  protected readonly faClover = faClover;
  protected readonly faClock = faClock;
  protected readonly faLightbulb = faLightbulb;
  protected readonly faDice = faDice;
  protected readonly faStar = faStar;
  protected readonly faBug = faBug;
  protected readonly faBackwardFast = faBackwardFast;
  protected readonly faForwardFast = faForwardFast;
  protected readonly RoutesName = RoutesName;
  protected readonly faCheck = faCheck;
}
