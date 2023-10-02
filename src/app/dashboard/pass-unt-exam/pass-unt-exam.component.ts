import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {
  faClock,
  faLightbulb,
  faDice,
  faStar,
  faBug,
  faForwardFast,
  faBackwardFast,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../core/helpers/image.helper";
import {CountdownComponent, CountdownConfig} from "ngx-countdown";
import { Select, initTE } from "tw-elements";
import {RoutesName} from "../../core/constants/routes.constants";
import {subjectGetAction} from "../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {getAttemptAction} from "../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../shared/store/attempt/getAttempt/getAttempt.selector";
import {Attempt} from "../../shared/models/attempt.model";
import {Question} from "../../shared/models/question.model";
@Component({
  selector: 'app-pass-unt-exam',
  templateUrl: './pass-unt-exam.component.html',
  styleUrls: ['./pass-unt-exam.component.scss']
})
export class PassUntExamComponent implements OnInit{
    protected readonly faClock = faClock;
    protected readonly faLightbulb = faLightbulb;
    protected readonly faDice = faDice;
    protected readonly faStar = faStar;
    protected readonly faBug = faBug;
    protected readonly faBackwardFast = faBackwardFast;
    protected readonly faForwardFast = faForwardFast;
    protected readonly RoutesName = RoutesName;
    protected readonly faCheck = faCheck;
    private _store = inject(Store);
    destroyRef = inject(DestroyRef);
    questions:Question[] = [];
     //@ts-ignore
    active_subject_id:number;
    //@ts-ignore
    public attempt:Attempt;


  ngOnInit(): void {
    initTE({ Select });
    this._store.dispatch(getAttemptAction());
    this._store.select(getAttemptSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.attempt = item.data;
        this.active_subject_id = (item.data.subject_questions.find(item => true))?.attempt_subject_id ?? 0;
        this.questions = (item.data.subject_questions.find(item => true))?.question ?? [];
      }
    })
  }

  changeSubject(subject_id:any){
      subject_id = subject_id.target.value;
    this.active_subject_id = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.attempt_subject_id ?? 0;
    this.questions = (this.attempt.subject_questions.find(item => item.attempt_subject_id == subject_id))?.question ?? [];
  }

  timeConfig:CountdownConfig = {
    leftTime:18000
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



}
