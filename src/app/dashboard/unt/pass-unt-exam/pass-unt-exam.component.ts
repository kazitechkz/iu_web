import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {faClock, faLightbulb, faDice, faStar, faBug, faForwardFast, faBackwardFast, faCheck} from "@fortawesome/free-solid-svg-icons";
import {CountdownConfig} from "ngx-countdown";
import {RoutesName} from "../../../core/constants/routes.constants";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {getAttemptAction} from "../../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {Attempt} from "../../../shared/models/attempt.model";
import {Question} from "../../../shared/models/question.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {createAnswerAction} from "../../../shared/store/attempt/answer/answer.action";
import {AnsweredResult} from "../../../shared/store/attempt/answeredResult/answeredResult";
import {onAnsweredResultAction} from "../../../shared/store/attempt/answeredResult/answerResult.action";
import {AnsweredResultRequest} from "../../../shared/store/attempt/answeredResult/answerResult.request";
import {answeredResultSelector} from "../../../shared/store/attempt/answeredResult/answerResult.selector";
import {initFlowbite} from "flowbite";
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
    private subscription:Subscription = new Subscription();
    private _store = inject(Store);
    private _route = inject(ActivatedRoute)
    public active_slider = 0;
    //@ts-ignore
    public answeredResult:AnsweredResult;

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
    initFlowbite();
  }


  getAttempt(){
    this.loading = true;
    this.subscription =  this._route.params.subscribe(params => {
      this._store.dispatch(getAttemptAction({requestData:params["id"]}));
      this._store.select(getAttemptSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.attempt = item.data;
          this.active_subject_id = (item.data.subject_questions.find(item => true))?.attempt_subject_id ?? 0;
          this.questions = (item.data.subject_questions.find(item => true))?.question ?? [];
          this.timeConfig.leftTime = item.data.time_left/1000
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
  changeSubject(subject_id:any){
    this.loading = true;
      subject_id = subject_id.target.value;
    this.active_subject_id = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.attempt_subject_id ?? 0;
    this.questions = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.question ?? [];
    this.question_pagination = Array.from({ length: this.questions.length }, (value, index) => index);
    this.loading = false;
    this.getAttemptResult(this.active_subject_id);
  }

  timeConfig:CountdownConfig = {
    // @ts-ignore
    leftTime:180000
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
    }
    }

  }

  checkAnswer(questionId:number){
    let request = Object.assign({}, this.answered_questions[questionId]);
    if(request){
      request.answers = request.answers.join(',');
      this._store.dispatch(createAnswerAction({requestData:request}));
      this.getAttemptResult(this.active_subject_id);
      this.next();
    }
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
    "slidesToScroll": 1,
    "dots": false,
    "arrows":false,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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


}
