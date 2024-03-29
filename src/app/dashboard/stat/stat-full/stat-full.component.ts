import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {FullStatModel} from "../../../shared/store/stat/fullStat/fullStat.model";
import {AttemptType} from "../../../shared/models/attemptType.model";
import {statBySubjectIdAction} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.action";
import {statBySubjectIdSelector} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {allAttemptTypesAction} from "../../../shared/store/attempt/allAttemptTypes/allAttemptTypes.action";
import {allAttemptTypesSelector} from "../../../shared/store/attempt/allAttemptTypes/allAttemptTypes.selector";
import {FullStatRequest} from "../../../shared/store/stat/fullStat/fullStat.request";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {Subject} from "../../../shared/models/subject.model";
import {fullStatAction} from "../../../shared/store/stat/fullStat/fullStat.action";
import {fullStatSelector} from "../../../shared/store/stat/fullStat/fullStat.selector";
import {
  Collapse,
  initTE,
} from "tw-elements";
import {
  faHandPeace,
  faQuestionCircle,
  faRectangleList,
  faThumbsDown,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment";
import {RoutesName} from "../../../core/constants/routes.constants";
@Component({
  selector: 'app-stat-full',
  templateUrl: './stat-full.component.html',
  styleUrls: ['./stat-full.component.scss']
})
export class StatFullComponent implements OnInit {
  //Injection
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  public colors:Record<string, string> = {"1":"#b6659d","2":"#ab7fe6","3":"#c05851","4":"#709048","5":"#7e4de3","6":"#4e954f","7":"#3f83c6","8":"#a5a538","9":"#e5892d","10":"#be9e1d","11":"#5e7bdd","12":"#746def","13":"#7e7c32","14":"#b5646d","15":"#dc8e24","16":"#50b8b9"};
  public fullStatModel:FullStatModel|null = null;
    public attemptTypes:AttemptType[]|null = [];
    public subjects:Subject[]|null = [];
    public requestData:FullStatRequest = {
      type_id:null,
      subject_id:null,
      start_at:null,
      end_at:null
    };
  //Data
  ngOnInit(): void {
    this.allAttemptTypes();
    this.getSubjects();
    this.getFullStat();
    initTE({ Collapse });
  }

  allAttemptTypes(){
    this._store.dispatch(allAttemptTypesAction());
    this._store.select(allAttemptTypesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.attemptTypes = item.data;
          this.requestData.type_id = item.data.find(item=>true)?.id ?? null;
        }
      }
    )
  }

  setStart($event:any){
    this.requestData.start_at = $event;
    this.getFullStat();
  }

  getColorPercentage(right:any,not_right:any){
    let total = (right + not_right);
    let result:number = right/total * 100;
    if(result >= 80){
      return 'text-green-500';
    }
    if(result <  80 && result > 50){
      return 'text-blue-500';
    }
    if(result <  50 && result >= 25){
      return 'text-yellow-500';
    }
    else{
      return 'text-red-500';
    }
  }
  getRightPercentage(right:any,not_right:any,zero:number = 0){
    let total = (right + not_right);
    let result:number = right/total * 100;
    if(result == 0){
      result = zero;
    }
    let resultString = Number(result).toFixed(1);
    return ""+resultString + "%";
  }
  setAttemptType($event:number){
    this.requestData.type_id = $event;
    this.getFullStat();
  }

  setSubject($event:number){
    this.requestData.subject_id = $event;
    this.getFullStat();
  }

  getSubjectById(key:string){
    return this.subjects?.find(item=>item.id.toString() == key);
  }

  getFullStat(){
    let request = Object.assign({},this.requestData);
    this._store.dispatch(fullStatAction({requestData:request}));
    this._store.select(fullStatSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.fullStatModel = item.data;
      }
    });
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    });
  }

  protected readonly faRectangleList = faRectangleList;
  protected readonly faHandPeace = faHandPeace;
  protected readonly Number = Number;
  protected readonly faThumbsDown = faThumbsDown;
  protected readonly faThumbsUp = faThumbsUp;
  protected readonly faQuestionCircle = faQuestionCircle;
  protected readonly ImageHelper = ImageHelper;
  protected readonly Object = Object;
  protected readonly moment = moment;
  protected readonly Date = Date;
    protected readonly RoutesName = RoutesName;
}
