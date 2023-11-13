import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {faBook, faBoxesPacking, faCircleCheck, faClock, faLanguage} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {Subject} from "../../../shared/models/subject.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getMySubjectsAction} from "../../../shared/store/subject/getMySubjects/getMySubjects.action";
import {getMySubjectsSelector} from "../../../shared/store/subject/getMySubjects/getMySubjects.selector";

@Component({
  selector: 'app-customizable-unt',
  templateUrl: './customizable-unt.component.html',
  styleUrls: ['./customizable-unt.component.scss']
})
export class CustomizableUntComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  //Injection
  //Data
  subjects:Subject[] = [];
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number[] = [];
  locale_id:number = 1;
  //Data

  ngOnInit(): void {
    this.getMySubjects();
  }
  ngOnDestroy(): void {
  }

  chooseSubject(id:number){
    const index = this.chosenSubject.indexOf(id); // Check if target exists in the array
    if (index === -1) {
      if(this.chosenSubject.length >=2){
        this.chosenSubject.splice(0, 1);
      }
      this.chosenSubject.push(id);
    } else {
      // If target exists, remove it from the array
      this.chosenSubject.splice(index, 1);
    }
  }

  getMySubjects(){
    this._store.dispatch(getMySubjectsAction());
    this._store.select(getMySubjectsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    })
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":true,
    "infinite": false,
    "center":false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
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

  protected readonly faClock = faClock;
  protected readonly faBook = faBook;
  protected readonly faLanguage = faLanguage;
  protected readonly faBoxesPacking = faBoxesPacking;

  protected readonly faCircleCheck = faCircleCheck;
}
