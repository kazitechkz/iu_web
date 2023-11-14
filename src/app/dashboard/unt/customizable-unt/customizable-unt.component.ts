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
import {GetCategoriesAction} from "../../../shared/store/category/category.action";
import {getCategoriesState} from "../../../shared/store/category/category.selector";
import {CategoryModel} from "../../../shared/models/category.model";

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
  public categories: CategoryModel[] = []
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number = 0;
  locale_id:number = 1;
  //Data

  ngOnInit(): void {
    this.getMySubjects();
  }
  ngOnDestroy(): void {
  }

  chooseSubject(id:number){
    this.chosenSubject = id;
    this.getCategories();
  }

  getMySubjects(){
    this._store.dispatch(getMySubjectsAction());
    this._store.select(getMySubjectsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    })
  }

  getCategories() {
    this._store.dispatch(GetCategoriesAction({subjectID: this.chosenSubject}));
    this._store.select(getCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      // @ts-ignore
      this.categories = item.data
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
