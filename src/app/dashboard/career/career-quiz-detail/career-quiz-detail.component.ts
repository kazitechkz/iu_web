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
    faEnvelope, faCode, faRocket
} from "@fortawesome/free-solid-svg-icons";
import {NgxSmartModalService} from "ngx-smart-modal";
import {OwlOptions} from "ngx-owl-carousel-o";
import {faFacebookF, faInstagram, faLinkedin, faVk, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons/faGlobe";
import {payCareerAction} from "../../../shared/store/career/payCareer/payCareer.action";
import {PayCareerRequest} from "../../../shared/store/career/payCareer/payCareer.request";
import {payCareerSelector} from "../../../shared/store/career/payCareer/payCareer.selector";
import {CareerQuizGroup} from "../../../shared/models/careerQuizGroup.model";
import {PromoRequest} from "../../../shared/store/promo/promo.request";
import {promoGetAction, promoGetClearAction} from "../../../shared/store/promo/promo.action";
import {FormControl, FormGroup} from "@angular/forms";
import {getPromoStateSelector} from "../../../shared/store/promo/promo.selector";

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
  isCareerQuizBlocked:number[] = [];
  //Data
  public promo: number = 0
  public old_price: number = 0
  public price: number = 0
  public promoError: string|null = null
  public promoSuccess: boolean = false
  public title: string = ''
  //Data
  promo_form: FormGroup = new FormGroup({
    promo: new FormControl(null)
  });
  constructor() {
    this._store.select(getPromoStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item) {
        if (item.status) {
          this.promoError = null
          this.promoSuccess = true
          this.getPrice(this.price, item.data)
        } else {
          this.getPrice(this.price)
          this.promoSuccess = false
        }
        if (item.errors) {
          this.getPrice(this.price)
          this.promoSuccess = false
          // @ts-ignore
          this.promoError = item.errors['error']['message']
        }
      }
    })
      this._store.select(getCareerQuizSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.careerQuiz = item.data.quiz;
          this.isPurchased = item.data.is_purchased
        }
      })
  }

  onSubmit() {
    if (this.promo_form.valid) {
      if (this.careerQuiz) {
        this.payForCareerQuiz(this.careerQuiz.id, this.promo_form.value['promo'])
      }
    }
  }
  openDialogPromo(id: string) {
    if (this.careerQuiz) {
      this.promoSuccess = false
      this.promoError = null
      this.price = 0
      this.promo_form.reset()
      this.title = this.translate.currentLang == 'kk' ? this.careerQuiz.title_kk : this.careerQuiz.title_ru
      this.old_price = this.careerQuiz.old_price
      this.price = this.careerQuiz.price
      this.getPrice(this.price)
      this.dialog.getModal(id).open(true)
    }
  }

  getPrice(price: number, percentage: number|null = null) {
    if (percentage) {
      this.promo = Math.round((price * percentage)/100)
      price -= Math.round((price * percentage)/100)
    } else {
      this.promo = 0
    }
    this.price = price
  }

  checkPromo() {
    // console.log(this.subjects_form.value['promo'])
    if (this.promo_form.value['promo']) {
      let req = {code: this.promo_form.value['promo'], type: 2} as PromoRequest
      this._store.dispatch(promoGetClearAction())
      this._store.dispatch(promoGetAction({req: req}))
      if (this.careerQuiz) {
        this.old_price = this.careerQuiz.old_price
        this.price = this.careerQuiz.price
      }
    }
  }
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.quizId = params["id"];
    })
    if(this.quizId){
      this.getCareerQuiz();
    }
  }

  payForCareerQuiz(quiz_id:number, promo:string|null){
    if(!this.isCareerQuizBlocked.includes(quiz_id)){
      this.isCareerQuizBlocked.push(quiz_id);
      this._store.dispatch(payCareerAction({requestData:{career_quiz_id:quiz_id, promo: promo} as PayCareerRequest}))
      this._store.select(payCareerSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          if(item.data.pg_redirect_url){
            window.location.href = item.data.pg_redirect_url;
          }
        }
      })
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
    protected readonly faCode = faCode;
    protected readonly faRocket = faRocket;
}
