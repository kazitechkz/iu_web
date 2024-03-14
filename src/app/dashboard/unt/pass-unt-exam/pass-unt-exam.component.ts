import {ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  faClock,
  faLightbulb,
  faDice,
  faStar,
  faBug,
  faForwardFast,
  faBackwardFast,
  faCheck,
  faHandshake, faFaceFrownOpen, faClover, faPersonRunning, faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {CountdownConfig, CountdownEvent} from "ngx-countdown";
import {RoutesName} from "../../../core/constants/routes.constants";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {getAttemptAction} from "../../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {Attempt, SubjectQuestion} from "../../../shared/models/attempt.model";
import {Question} from "../../../shared/models/question.model";
import {ActivatedRoute, Router} from "@angular/router";
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
import {finishAttemptAction} from "../../../shared/store/attempt/finishAttempt/finishAttempt.action";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {TwNotification} from "ng-tw";
import {Me} from "../../../shared/models/user.model";

@Component({
  selector: 'app-pass-unt-exam',
  templateUrl: './pass-unt-exam.component.html',
  styleUrls: ['./pass-unt-exam.component.scss']
})
export class PassUntExamComponent implements OnInit,OnDestroy{
    protected readonly faClock = faClock;
    protected readonly faLightbulb = faLightbulb;
    protected readonly faDice = faDice;
    protected readonly faStar = faStar;
    protected readonly faBug = faBug;
    protected readonly faBackwardFast = faBackwardFast;
    protected readonly faForwardFast = faForwardFast;
    protected readonly RoutesName = RoutesName;
    protected readonly faCheck = faCheck;
    public translate = inject(GlobalTranslateService);
    private subscription:Subscription = new Subscription();
    private _store = inject(Store);
    private _route = inject(ActivatedRoute)
    private _router = inject(Router)
    public active_slider = 0;
    dialog = inject(NgxSmartModalService)
    public answeredResult:AnsweredResult = {};
    public fiftyFiftyResult:GetFiftyFiftyModel = {};
    public appealTypes:AppealType[] = [];
    public prevSubject:SubjectQuestion|null = null;
    public activeSubject:SubjectQuestion|null = null;
    public nextSubject:SubjectQuestion|null = null;
    public appealRequest = {type_id:0,question_id:0,message:""};
    //@ts-ignore
    public actual_question:Question;
    public loadingAnswer = false;
    private _notification = inject(TwNotification)
    public answered_questions:{[key: number]: any}= {};
    public unAnsweredQuestion:number = 0;
    //@ts-ignore
    @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  destroyRef = inject(DestroyRef);
    me: Me | null = null
    questions:Question[] = [];
     //@ts-ignore
    active_subject_id:number;
    loading = false;
    //@ts-ignore
    public attempt:Attempt;
  //@ts-ignore
    question_pagination:any;
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};

  ngOnInit(): void {
    this.getAttempt();
    this.getAppealTypes();
    initFlowbite();
    this.checkSubscription()
  }
  constructor() {
    let meLocal = localStorage.getItem('userinfo')
    //Answer Selector
    this._store.select(answerSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        if(item.data.is_finished == true){
          this._notification.show({ type: 'info', title: 'Ураа!', text: 'Вы заработали ' + item.data.points + 'iU Coins'})
          this._router.navigate([RoutesName.resultAttempt + "/" + this.attempt.attempt_id]).then(r => true);
        }
        else{
          this.getAttemptResult(this.active_subject_id);
        }
        this.next();
        setTimeout(() => this.loadingAnswer = false, 1000)
      }
    });
    //Attempt Result
    this._store.select(answeredResultSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.answeredResult = Object.assign(this.answeredResult,item.data);
        this.getAnsweredQuestionQTY();
      }
    });
    //Appeal Types
    this._store.select(appealTypeSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.appealTypes = item.data;
        this.appealRequest.type_id = item.data.find(item=>true)?.id ??0;
      }
    });
    if (meLocal) {
      this.me = JSON.parse(meLocal)
    }
  }
  checkSubscription():boolean {
    if (this.me) {
      return Object.entries(this.me.subscription).length > 0;
    } else {
      return false
    }
  }
  getAttempt(){
    this.loading = true;
    this.subscription =  this._route.params.subscribe(params => {
      this._store.dispatch(getAttemptAction({requestData:params["id"]}));
      this._store.select(getAttemptSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.attempt = item.data;
          this.active_subject_id = (item.data.subject_questions.find(item => true))?.attempt_subject_id ?? 0;
          this.activeSubject = item.data.subject_questions.find(item => true) ?? null;
          let activeSubjectIndex = item.data.subject_questions.findIndex(item => true);
          if(activeSubjectIndex > 0){
            this.prevSubject = item.data.subject_questions[activeSubjectIndex - 1] ?? null;
          }
          else{
            this.prevSubject = null;
          }
          if(activeSubjectIndex >= 0 && item.data.subject_questions.length > activeSubjectIndex + 1){
            this.nextSubject = item.data.subject_questions[activeSubjectIndex + 1] ?? null;
          }
          else{
            this.nextSubject = null;
          }
          this.questions = (item.data.subject_questions.find(item => true))?.question ?? [];
          //@ts-ignore
          this.actual_question = (item.data.subject_questions.find(item => true))?.question[0];
          this.timeConfig.leftTime = item.data.time_left/1000
          this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
          this.getAttemptResult((item.data.subject_questions.find(item => true))?.attempt_subject_id??0);
        }
      });
    });
    this.loading = false;
  }
  getAttemptResult(active_subject_id:number){
    if(active_subject_id){
      let requestAnswer = {attempt_subject_id:active_subject_id} as AnsweredResultRequest;
      this._store.dispatch(onAnsweredResultAction({requestData:requestAnswer}));
      this.getAnsweredQuestionQTY();
    }

  }
  getAppealTypes(){
    this._store.dispatch(appealTypesAction());

  }
  changeSubject(subject_id:any,activeSubjectId:number|null = null){
    this.active_slider = 0;
    this.slickModal.slickGoTo(0);
    this.loading = true;
    subject_id = activeSubjectId != null ? activeSubjectId : subject_id.target.value;
    this.active_subject_id = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.attempt_subject_id ?? 0;
    this.activeSubject = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))??null;
    let activeSubjectIndex = this.attempt.subject_questions.findIndex(item => item.attempt_subject_id == subject_id);
    if(activeSubjectIndex > 0){
      this.prevSubject = this.attempt.subject_questions[activeSubjectIndex - 1] ?? null;
    }
    else{
      this.prevSubject = null;
    }
    if(activeSubjectIndex >= 0 && this.attempt.subject_questions.length > activeSubjectIndex + 1) {
      this.nextSubject = this.attempt.subject_questions[activeSubjectIndex + 1] ?? null;
    }
    else{
      this.nextSubject = null;
    }
    this.questions = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.question ?? [];
    this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
    this.loading = false;
    this.getAttemptResult(this.active_subject_id);
  }
  timeConfig:CountdownConfig = {
    // @ts-ignore
    leftTime:180,
    notify:[1],
  }
  handleCountDownEvent(e: CountdownEvent) {
    if (e.action === 'notify') {
      this._store.dispatch(finishAttemptAction({requestData:this.attempt.attempt_id}));
    }
  }
  answerQuestion(questionId:number,answer:string){
    if(!this.answeredResult[questionId]){
    if(!this.answered_questions[questionId]){
      this.answered_questions[questionId] = {
          attempt_id:this.attempt.attempt_id,
          attempt_subject_id:this.active_subject_id,
          question_id:questionId,
          attempt_type_id:this.attempt.type_id,
          answers:[answer]
        };
    }
    else{
        if(this.questions[this.active_slider].type_id == 3){
          let index = this.answered_questions[questionId].answers.indexOf(answer);
          if(index == -1){
            this.answered_questions[questionId].answers.push(answer);
          }
          else{
            this.answered_questions[questionId].answers.splice(index, 1);
            if(this.answered_questions[questionId].answers.length == 0){
              delete this.answered_questions[questionId];
            }
          }
          if(this.answered_questions[questionId].answers.length > 3){
            this.answered_questions[questionId].answers.splice(0, 1);
          }
        }
        else{
          this.answered_questions[questionId].answers = [];
          this.answered_questions[questionId].answers.push(answer);
        }
      }
    }
  }
  saveQuestion(){
    let request = {questionId:this.questions[this.active_slider].id} as SaveQuestionRequest;
    this._store.dispatch(onSaveQuestionAction({requestData:request}));
  }
  getFiftyFifty(){
    let request = {questionId:this.questions[this.active_slider].id} as GetFiftyFiftyRequest;
    this._store.dispatch(onGetFiftyFiftyAction({requestData:request}));
    this._store.select(getFiftyFiftySelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        // @ts-ignore
        this.fiftyFiftyResult[Object.keys(item.data)[0]] = item.data[Object.keys(item.data)[0]];
      }
    });
    delete this.answered_questions[this.questions[this.active_slider].id];
  }
  checkIsFiftyFifty(answer:string):boolean{
    if(this.fiftyFiftyResult){
      if(this.fiftyFiftyResult.hasOwnProperty(this.questions[this.active_slider].id)){
        return this.fiftyFiftyResult[this.questions[this.active_slider].id].includes(answer);
      }
    }
    return true;
  }
  createAppeal(){
    this.appealRequest.question_id = this.questions[this.active_slider].id;
    let request = Object.assign({},this.appealRequest)
    this._store.dispatch(onCreateAppealAction({requestData:request}));
    this.appealRequest.message = "";
    this.closeModal('appealModal');
  }
  checkAnswer(questionId:number){
    if((!this.answeredResult[questionId])){
      this.loadingAnswer = true;
      let request = Object.assign({}, this.answered_questions[questionId]);
      if(request){
        request.answers = request.answers.join(',');
        this._store.dispatch(createAnswerAction({requestData:request}));
      }
      this.loadingAnswer = false;
    }
    else{
      if(this.active_subject_id){
        this.getAttemptResult(this.active_subject_id);
      }
    }
  }
  finishAttempt(){
    this._store.dispatch(finishAttemptAction({requestData:this.attempt.attempt_id}));
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
  setActualQuestion(){
    this.actual_question = this.questions[this.active_slider];
  }
  //Sliders
  goToSlider(slideNo:number){
    this.slickModal.slickGoTo(slideNo);
  }
  changeSlider($event:any){
    this.active_slider = $event.currentSlide;
    this.setActualQuestion();
  }
  next() {
    this.slickModal.slickNext();
  }
  prev() {
    this.slickModal.slickPrev();
  }
  getAnsweredQuestionQTY(){
    if(this.active_subject_id && this.answeredResult && this.questions){
      this.unAnsweredQuestion = this.questions.filter(item=>!Object.keys(this.answeredResult).includes(item.id.toString())).length;
    }
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
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    protected readonly faPersonRunning = faPersonRunning;
    protected readonly JSON = JSON;
    protected readonly Object = Object;
    protected readonly faChevronLeft = faChevronLeft;
    protected readonly faChevronRight = faChevronRight;
}
