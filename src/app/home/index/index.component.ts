import {AfterViewInit, Component, DestroyRef, ElementRef, HostListener, inject, OnInit, ViewChild} from '@angular/core';
import {
  faArrowRight,
  faBook, faBoxesPacking,
  faBullseye,
  faCheck, faCheckCircle, faChevronRight, faChevronUp, faCircleCheck, faDumbbell,
  faHeart,
  faLanguage, faRocket,
  faShieldAlt,
  faUserDoctor, faVideo,
  faWandMagicSparkles, faXmark,faFilePen
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../core/helpers/image.helper";
import {
  Tab,
  initTE,
} from "tw-elements";
import {Store} from "@ngrx/store";
import {OwlOptions} from "ngx-owl-carousel-o";
import { initFlowbite } from 'flowbite';
import {LocalKeysConstants} from "../../core/constants/local-keys.constants";
import {Me} from "../../shared/models/user.model";
import {SessionService} from "../../shared/services/session.service";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {
  getAttemptByPromoCodeAction
} from "../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.action";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {ModalUntTrainerComponent} from "../../shared/components/modal-unt-trainer/modal-unt-trainer.component";
import {
  ModalTournamentBannerComponent
} from "../../shared/components/modal-tournament-banner/modal-tournament-banner.component";
import {NgxSmartModalService} from "ngx-smart-modal";
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,AfterViewInit{
//Injection Start
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute)
  public translate = inject(GlobalTranslateService);
  private _router = inject(Router);
  private ngxSmartModalService = inject(NgxSmartModalService);
  //Injection End
  //@ts-ignore
  @ViewChild('serviceEl') serviceEl: ElementRef<HTMLDivElement>;
  //@ts-ignore
  @ViewChild('priceEl') priceEl: ElementRef<HTMLDivElement>;
  //@ts-ignore
  @ViewChild('advantageEl') advantageEl: ElementRef<HTMLDivElement>;
  //@ts-ignore
  @ViewChild('partnersEl') partnerEl: ElementRef<HTMLDivElement>;
  //@ts-ignore
  @ViewChild('contactEl') contactEl: ElementRef<HTMLDivElement>;
  //Data
  activePlanId:number = 1;

  plans:{[key: number]: { title: string,price:number,old_price:number,months_value:number,months:string,image:string,description:string[] }} = {
    1:{title:"1_MONTH_SUBSCRIPTION",price:1590,old_price:1990,months_value:1,months:"1_MONTH",image:"assets/images/basic.webp",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","ALL_ACCESS_TO_VIDEO_AND_MATERIALS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
    2:{title:"3_MONTHS_SUBSCRIPTION",price:3990,old_price:4990,months_value:3,months:"3_MONTHS",image:"assets/images/standard.webp",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","ALL_ACCESS_TO_VIDEO_AND_MATERIALS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
    3:{title:"6_MONTHS_SUBSCRIPTION",price:6990,old_price:8990,months_value:6,months:"6_MONTHS",image:"assets/images/premium.webp",description:["WORK_OVER_FAILURE","SUPPORT_MULTI_LANGUAGE","ANALYZE_WEAK_POSITION","FULL_STATS","ALL_ACCESS_TO_VIDEO_AND_MATERIALS","SUBJECT_MAT_GRAM","SUBJECT_GRAM","SUBJECT_HISTORY","SUBJECT_PROFS"]},
  }

  subjects: { id: number,title_ru:string,title_kk:string,url:string,color:string }[]= [
    {"id":1, "title_kk":"Математикалық сауаттылық", "title_ru":"Математическая грамотность","url":"subjects/20yKe_1701948088.webp",color:"#b6659d"},
    {"id":2, "title_kk":"Қазақстан тарихы","title_ru":"История Казахстана","url":"subjects/A2nNH_1701948107.webp",color:"#ab7fe6"},
    {"id":3,"title_kk":"Оқу сауаттылығы","title_ru":"Грамотность чтения","url":"subjects/4oJCz_1701948122.webp",color:"#c05851"},
    {"id":4,"title_kk":"Математика", "title_ru":"Математика","url":"subjects/uMLSa_1701948136.webp",color:"#709048"},
    {"id":5,"title_kk":"Физика","title_ru":"Физика","url":"subjects/n5rpf_1701948154.webp",color:"#7e4de3"},
    {"id":6,"title_kk":"Химия","title_ru":"Химия","url":"subjects/9XvpP_1701948169.webp",color:"#4e954f"},
    {"id":7,"title_kk":"Биология","title_ru":"Биология","url":"subjects/flPrU_1701948187.webp",color:"#3f83c6"},
    {"id":8,"title_kk":"География","title_ru":"География","url":"subjects/UYv0X_1701948203.webp",color:"#a5a538"},
    {"id":9,"title_kk":"Дүниежүзі тарихы","title_ru":"Всемирная история","url":"subjects/jiXiG_1701948225.webp",color:"#e5892d"},
    {"id":10,"title_kk":"Құқық","title_ru":"Основы права","url":"subjects/T3A5F_1701948242.webp",color:"#be9e1d"},
    {"id":11,"title_kk":"Ағылшын тілі","title_ru":"Английский язык","url":"subjects/8YpMH_1701948256.webp",color:"#5e7bdd"},
    {"id":12,"title_kk":"Қазақ тілі", "title_ru":"Казахский язык","url":"subjects/NzjEP_1701948274.webp",color:"#746def"},
    {"id":13,"title_kk":"Қазақ әдебиеті", "title_ru":"Казахская литература","url":"subjects/oEnPx_1701948300.webp",color:"#7e7c32" },
    {"id":14,"title_kk":"Орыс тілі", "title_ru":"Русский язык","url":"subjects/GsAXe_1701948317.webp",color:"#b5646d"},
    {"id":15,"title_kk":"Орыс әдебиеті","title_ru":"Русская литература","url":"subjects/Kbud5_1701948349.webp",color:"#dc8e24"},
    {"id":16,"title_kk":"Информатика","title_ru":"Информатика","url":"subjects/lXsSP_1701948365.webp",color:"#50b8b9"}];
    partners:string[] = [
      "assets/images/kundelik.png",
      "assets/images/astana_hub.png",
      "assets/images/grant_plus.png",
      "assets/images/teen_win.png",
      "assets/images/skillbox.png",
      "assets/images/lerna.png",
    ]
  //Data
  private sessionService:SessionService = inject(SessionService);
  showToUp:boolean = false;
  //Data
  //@ts-ignore
  me:Me;
  getUserInfo(){
    this.me = this.sessionService.getDataFromLocalStorage(LocalKeysConstants.user) as Me;
  }

  ngOnInit(): void {
    initFlowbite();
    initTE({ Tab });
    this.getUserInfo();
  }





  ngAfterViewInit(): void {
    this._route.fragment.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      if(params != null){
        this.scrollToSection(params);
      }
    });
    this.ngxSmartModalService.getModal('tournamentBanner').open();

  }

  scrollToSection(scrollTo:string): void {
    if(scrollTo == "service"){
      this.serviceEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if(scrollTo == "price"){
      this.priceEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if(scrollTo == "advantage"){
      this.advantageEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if(scrollTo == "partners"){
      this.partnerEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if(scrollTo == "contact"){
      this.contactEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectActivePlan(planId:number){
    this.activePlanId = planId;
  }

  getRouteStart() : string{
    if(this.me){
      if(this.me.role = "student"){
        return "dashboard/my-profile";
      }
      if(this.me.role = "teacher"){
        return "teacher/index";
      }
      return "auth/login";
    }
    else{
      return "auth/login";
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.showToUp = true;
    } else {
      this.showToUp = false;
    }
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
  subjectCarouselConfig = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 8,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnHover:false,
    focusOnSelect: false,
  };
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
  protected readonly faRocket = faRocket;
  protected readonly faBoxesPacking = faBoxesPacking;
  protected readonly faDumbbell = faDumbbell;
  protected readonly faVideo = faVideo;
  protected readonly faChevronUp = faChevronUp;
  protected readonly faFilePen = faFilePen;
}
