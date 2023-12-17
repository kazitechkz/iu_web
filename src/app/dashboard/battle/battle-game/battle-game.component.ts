import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {NgxSmartModalService} from "ngx-smart-modal";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getBattleSubjectsAction} from "../../../shared/store/battle/getBattleSubjects/getBattleSubjects.action";
import {Subject} from "../../../shared/models/subject.model";
import {getBattleSubjectsSelector} from "../../../shared/store/battle/getBattleSubjects/getBattleSubjects.selector";
import {GivenBattleQuestionModel} from "../../../shared/models/givenBattleQuestion.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import {faCheckCircle, faGamepad} from "@fortawesome/free-solid-svg-icons";
import {CountdownConfig, CountdownEvent} from "ngx-countdown";
import {CreateBattleRequest} from "../../../shared/store/battle/createBattle/createBattle.request";
import {CreateBattleStepRequest} from "../../../shared/store/battle/createBattleStep/createBattleStep.request";
import {BattleStepQuestion} from "../../../shared/models/battleStepQuestion.model";
import {getBattleStepAction} from "../../../shared/store/battle/getBattleStep/getBattleStep.action";
import {getBattleStepSelector} from "../../../shared/store/battle/getBattleStep/getBattleStep.selector";
import {createBattleAction} from "../../../shared/store/battle/createBattle/createBattle.action";
import {createBattleStepAction} from "../../../shared/store/battle/createBattleStep/createBattleStep.action";
import {createBattleStepSelector} from "../../../shared/store/battle/createBattleStep/createBattleStep.selector";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {BattleStepResult} from "../../../shared/models/battleStepResult.model";
import {
  AnswerBattleQuestionRequest
} from "../../../shared/store/battle/answerBattleQuestion/answerBattleQuestion.request";
import {
  answerBattleQuestionAction
} from "../../../shared/store/battle/answerBattleQuestion/answerBattleQuestion.action";
import {
  answerBattleQuestionSelector
} from "../../../shared/store/battle/answerBattleQuestion/answerBattleQuestion.selector";
import {items} from "fusioncharts";

@Component({
  selector: 'app-battle-game',
  templateUrl: './battle-game.component.html',
  styleUrls: ['./battle-game.component.scss']
})
export class BattleGameComponent implements OnInit{
//Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  dialog = inject(NgxSmartModalService);
  private _route = inject(ActivatedRoute);
  private router = inject(Router);
  //Injection
  public proposedSubjects:Subject[]|null = null;
  public battleQuestion:GivenBattleQuestionModel|null = null;
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};
  public timeAll:number = 15000;
  public percentage = 100;
  public battleStepId = 0;
  public isHover:number|null = null;
  public createBattleStepRequest:CreateBattleStepRequest = {
    battle_step_id:0,
    subject_id:null
  }
  //@ts-ignore
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  //@ts-ignore
  public battleStepQuestionResult:BattleStepQuestion[];
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.getChosenSubjects(params["step_id"]);
      this.battleStepId = params["step_id"];
    })
  }

  handleCountDownEvent(e: CountdownEvent) {
    if (e.action === 'notify') {
      this.calculatePercentage(e.left);
    }
    if(e.action == "done"){
      this.percentage = 0;
      this.createAttemptStep();
    }
  }

  questionAnswerTimeEnds(e: CountdownEvent) {
    if (e.action === 'notify') {
      if(this.battleQuestion){
        let answered = this.battleQuestion.answered_questions;
        let question = this.battleQuestion.questions.find(items=>!answered.includes(items.id));
        if(question){
          this.answerQuestion(question.id,"");
        }
        else {
          this.router.navigate(['/'+RoutesName.battleDetail+'/'+this.battleQuestion.battle_promo_code.toString()]);
        }
      }
    }
  }

  public getChosenSubjects(step_id:number){
    this._store.dispatch(getBattleSubjectsAction({requestData:step_id}));
    this._store.select(getBattleSubjectsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.createBattleStepRequest.battle_step_id = step_id;
        if(item.data.chosen_subject == null){
          this.battleQuestion = null;
          this.proposedSubjects = item.data.subjects;
        }
        else{
          this.proposedSubjects = null;
          this.getBattleStepQuestions(step_id);
        }
      }
    });
  }

  public calculatePercentage(timeLeft:number){
    this.percentage =  Math.ceil((timeLeft/this.timeAll) * 100);
  }

  public createAttemptStep(){
      if(!this.createBattleStepRequest.subject_id){
        // @ts-ignore
        var randomIndex = Math.floor(Math.random() * this.proposedSubjects.length);
        // @ts-ignore
        this.createBattleStepRequest.subject_id = this.proposedSubjects[randomIndex].id;
      }
      let request = Object.assign({},this.createBattleStepRequest);
      request = request as CreateBattleStepRequest;
      this._store.dispatch(createBattleStepAction({requestData:request}));
      this._store.select(createBattleStepSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.proposedSubjects = null;
          this.battleQuestion = item.data;
          this.battleStepQuestionResult = item.data.result;
          this.battleQuestionTime.leftTime = item.data.time_left_seconds;
          this.changeSlider();
        }
      });
  }

  public getStyles(subjectId:number){
    if(this.isHover == subjectId){
      return  {'background-color':this.colors[subjectId],'color':'white'}
    }
    else{
     return  {'border-color':this.colors[subjectId],'color':this.colors[subjectId]}
    }
  }

  public changeHover($event:number|null){
    this.isHover = $event;
  }

  public chooseSubject(subject_id:number){
    this.createBattleStepRequest.subject_id = subject_id;
    this.createAttemptStep();
  }

  public getBattleStepQuestions(step_id:number){
    this._store.dispatch(getBattleStepAction({requestData:step_id}));
    this._store.select(getBattleStepSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.battleQuestion = item.data;
        this.battleStepQuestionResult = item.data.result;
        this.battleQuestionTime.leftTime = item.data.time_left_seconds;
        this.changeSlider();
      }
    });
  }


  changeSlider(){
    if(this.slickModal){
      if(this.battleStepQuestionResult){
        let index = this.battleStepQuestionResult.findIndex(items=>items.is_answered == false);
        if(index != -1){
          this.slickModal.slickGoTo(index);
        }
        else{
          this.slickModal.slickNext();
        }
      }
      else{
        this.slickModal.slickGoTo(0);
      }
    }
  }


  toSlide(page:number){
    if(this.slickModal){
      this.slickModal.slickGoTo(page);
    }
  }


  answerQuestion(questionId:number,answer:string){
    if(this.battleStepQuestionResult){
      if(this.battleStepQuestionResult.find(item => item.question_id == questionId && item.is_answered == false)){
        let request = {question_id:questionId,answer:answer,battle_step_id:this.battleStepId} as AnswerBattleQuestionRequest;
        this._store.dispatch(answerBattleQuestionAction({requestData:request}));
        this._store.select(answerBattleQuestionSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
          if(item.data){
            this.battleStepQuestionResult = item.data.result;
            if(item.data.is_finished){
              if(item.data.next_step_id){
                this.router.navigate(['/'+RoutesName.battleGame+'/'+item.data.next_step_id.toString()]);
              }
              else{
                this.router.navigate(['/'+RoutesName.battleDetail+'/'+item.data.battle_promo_code.toString()]);
              }
            }
            else{
              this.changeSlider();
            }
          }
        });
      }
    }
  }

  getAnsweredClass(question_id:number,answer:string){
    if(this.battleStepQuestionResult){
      let result = this.battleStepQuestionResult.find(item => item.question_id == question_id && item.is_answered == true);
      if(result){
        if(result.answer == answer){
          return result.is_right ? {'bg-green-400':true, 'text-white':true,'border-green-400':true} : {'bg-red-400':true, 'text-white':true,'border-red-400':true}
        }
        if(result.right_answer == answer){
          return {'bg-green-400':true, 'text-white':true,'border-green-400':true}
        }
      }
    }
    return {};
  }

  timeConfig:CountdownConfig = {
    // @ts-ignore
    leftTime:15,
    notify:Array.from({ length: 15 }, (_, index) => index + 1),
  }

  battleQuestionTime:CountdownConfig = {
    // @ts-ignore
    leftTime:60,
    notify:[1],
  }
  questionSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows:false,
    infinite: false,
    adaptiveHeight: true,
  };
  protected readonly ImageHelper = ImageHelper;
  protected readonly JSON = JSON;
  protected readonly RoutesName = RoutesName;
  protected readonly faGamepad = faGamepad;
  protected readonly faCheckCircle = faCheckCircle;
}
