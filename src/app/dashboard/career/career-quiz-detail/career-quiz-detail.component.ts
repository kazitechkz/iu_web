import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";
import {getForumDiscussSelector} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.selector";
import {getCareerQuizSelector} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.selector";
import {getCareerQuizzesAction} from "../../../shared/store/career/getCareerQuizzes/getCareerQuizzes.action";
import {getCareerQuizAction} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.action";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import {
  faBullhorn, faCheck,
  faChevronRight, faCircleCheck,
  faCoins,
  faExclamation,
  faGamepad,
  faXmark,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {NgxSmartModalService} from "ngx-smart-modal";
import {OwlOptions} from "ngx-owl-carousel-o";
import {faFacebookF, faInstagram, faLinkedin, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";

@Component({
  selector: 'app-career-quiz-detail',
  templateUrl: './career-quiz-detail.component.html',
  styleUrls: ['./career-quiz-detail.component.scss']
})
export class CareerQuizDetailComponent implements OnInit{

  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  dialog = inject(NgxSmartModalService);
  //Injection
  //Data
  public quizId:number|null = null;
  public careerQuiz:CareerQuiz|null = null;
  public isPurchased:boolean = false;
  //Data

  constructor() {
      this._store.select(getCareerQuizSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.careerQuiz = item.data.quiz;
          this.isPurchased = item.data.is_purchased
        }
      })
  }
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.quizId = params["id"];
    })
    if(this.quizId){
      this.getCareerQuiz();
    }
  }

  public getCareerQuiz(){
    this._store.dispatch(getCareerQuizAction({requestData:this.quizId??0}));
  }
  openDialog() {
    this.dialog.getModal('create-career-modal').open();
  }
  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav:false,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly RoutesName = RoutesName;
  protected readonly faChevronRight = faChevronRight;
  protected readonly JSON = JSON;
  protected readonly faCoins = faCoins;
  protected readonly faGamepad = faGamepad;
  protected readonly faBullhorn = faBullhorn;
  protected readonly faExclamation = faExclamation;
  protected readonly faXmark = faXmark;
  protected readonly faCheck = faCheck;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faInstagram = faInstagram;
  protected readonly faVk = faVk;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faPhone = faPhone;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faGlobe = faGlobe;
  protected readonly faWhatsapp = faWhatsapp;
}
