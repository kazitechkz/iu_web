import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Subject} from "../../shared/models/subject.model";
import {
  faArrowRight,
  faBook,
  faBullseye,
  faCheck, faCheckCircle, faChevronRight, faCircleCheck,
  faHeart,
  faLanguage,
  faShieldAlt,
  faUserDoctor,
   faWandMagicSparkles, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../core/helpers/image.helper";
import {
  Tab,
  initTE,
} from "tw-elements";
import {Store} from "@ngrx/store";
import {OwlOptions} from "ngx-owl-carousel-o";
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
//Injection Start
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End

  //Data
  subjects:Subject[] = [];
  activePlanId:number = 1;

  plans:{[key: number]: { title: string,price:number,months_value:number,months:string,image:string,description:string[] }} = {
    1:{title:"1_MONTH",price:990,months_value:1,months:"1 месяц",image:"assets/images/basic_bear.png",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
    2:{title:"3_MONTH",price:2490,months_value:3,months:"3 месяца",image:"assets/images/standard_bear.png",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
    3:{title:"6_MONTH",price:4990,months_value:6,months:"6 месяцев",image:"assets/images/premium_bear.png",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
  }
  //Data


  ngOnInit(): void {
    initTE({ Tab });
  }

  selectActivePlan(planId:number){
    this.activePlanId = planId;
  }

  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    items:1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav:false,
    navText: [],
  }
  //@ts-ignore
  protected readonly faArrowRight = faArrowRight;
  protected readonly faLanguage = faLanguage;
  protected readonly faBook = faBook;
  protected readonly faShieldAlt = faShieldAlt;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faXmark = faXmark;
  protected readonly faCheck = faCheck;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faChevronRight = faChevronRight;
  protected readonly faWandMagicSparkles = faWandMagicSparkles;
  protected readonly faBullseye = faBullseye;
  protected readonly faUserDoctor = faUserDoctor;
  protected readonly faHeart = faHeart;
}
