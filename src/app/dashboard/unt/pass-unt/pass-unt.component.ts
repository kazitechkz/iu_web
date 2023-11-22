import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {ColorConstants} from "../../../core/constants/color.constants";
import {faClock,faBook,faLanguage,faCircleCheck,faForwardFast} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {loginAction} from "../../../shared/store/auth/login/login.action";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getLoginState} from "../../../shared/store/auth/login/login.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
// @ts-ignore
import {Subject} from "../../models/subject.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {Select2Data} from "ng-select2-component";
import {RoutesName} from "../../../core/constants/routes.constants";
import {CreateAttemptRequest} from "../../../shared/store/attempt/createAttempt/createAttempt.request";
import {createAttemptAction} from "../../../shared/store/attempt/createAttempt/createAttempt.action";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
@Component({
  selector: 'app-pass-unt',
  templateUrl: './pass-unt.component.html',
  styleUrls: ['./pass-unt.component.scss']
})
export class PassUntComponent implements OnInit{
  faClock = faClock;
  faBook = faBook;
  faLanguage = faLanguage;
  faForwardFast = faForwardFast;
  protected readonly ColorConstants = ColorConstants;
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  complusory_subjects:Subject[] = [];
  subjects:Subject[] = [];
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number[] = [];
  locale_id:number = 1;
  public translate = inject(GlobalTranslateService);
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
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":true,
    "infinite": false,
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

  createAttempt(){
    if (this.chosenSubject.length == 2){
      let request = {subjects:this.chosenSubject, locale_id:this.locale_id, attempt_type_id:1,} as CreateAttemptRequest;
      this._store.dispatch(createAttemptAction({requestData:request}));
    }
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

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
}
