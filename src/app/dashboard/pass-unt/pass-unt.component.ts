import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {faClock,faBook,faLanguage,faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {loginAction} from "../../shared/store/auth/login/login.action";
import {subjectGetAction} from "../../shared/store/subject/subject.action";
import {getLoginState} from "../../shared/store/auth/login/login.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {getSubjectsState} from "../../shared/store/subject/subject.selector";
// @ts-ignore
import {Subject} from "../../models/subject.model";
import {ImageHelper} from "../../core/helpers/image.helper";
import {SlickCarouselComponent} from "ngx-slick-carousel";
@Component({
  selector: 'app-pass-unt',
  templateUrl: './pass-unt.component.html',
  styleUrls: ['./pass-unt.component.scss']
})
export class PassUntComponent implements OnInit{
  faClock = faClock;
  faBook = faBook;
  faLanguage = faLanguage;
  protected readonly ColorConstants = ColorConstants;
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  complusory_subjects:Subject[] = [];
  subjects:Subject[] = [];
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number[] = [];


  ngOnInit(): void {
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.complusory_subjects = item.data.filter(item=>item.is_compulsory);
        this.subjects = item.data.filter(item=>!item.is_compulsory);
      }
    })


  }
  //@ts-ignore
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          dots: false
        }
      }
    ]
  };


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

  protected readonly faCircleCheck = faCircleCheck;
}
