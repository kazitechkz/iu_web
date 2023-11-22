import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {faBook, faCircleCheck, faClock, faForwardFast, faLanguage} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
// @ts-ignore
import {Subject} from "../../models/subject.model";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {CreateAttemptRequest} from "../../../shared/store/attempt/createAttempt/createAttempt.request";
import {createAttemptAction} from "../../../shared/store/attempt/createAttempt/createAttempt.action";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.scss']
})
export class SingleSubjectComponent implements OnInit{
    private _store = inject(Store);
    destroyRef = inject(DestroyRef);
    protected readonly faClock = faClock;
    protected readonly faBook = faBook;
    protected readonly faLanguage = faLanguage;
    public translate = inject(GlobalTranslateService);
    subjects:Subject[] = [];
    locale_id:number = 1;
    chosenSubject:number[] = [];

  ngOnInit(): void {
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    })
  }


  chooseSubject(id:number){
    const index = this.chosenSubject.indexOf(id); // Check if target exists in the array
    if (index === -1) {
      if(this.chosenSubject.length >=1){
        this.chosenSubject.splice(0, 1);
      }
      this.chosenSubject.push(id);
    } else {
      // If target exists, remove it from the array
      this.chosenSubject.splice(index, 1);
    }
  }


  createAttempt(){
    if (this.chosenSubject.length == 1){
      let request = {subjects:this.chosenSubject, locale_id:this.locale_id, attempt_type_id:2,} as CreateAttemptRequest;
      this._store.dispatch(createAttemptAction({requestData:request}));
    }
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

//@ts-ignore
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":true,
    "infinite": false,
    "center":true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  protected readonly faForwardFast = faForwardFast;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly ImageHelper = ImageHelper;
}
