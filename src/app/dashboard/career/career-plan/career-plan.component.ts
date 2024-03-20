import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {NgxSmartModalService} from "ngx-smart-modal";
import {getCareerQuizSelector} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getCareerQuizGroupListSelector
} from "../../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.selector";
import {CareerQuizGroup} from "../../../shared/models/careerQuizGroup.model";
import {getCareerQuizAction} from "../../../shared/store/career/getCareerQuiz/getCareerQuiz.action";
import {
  getCareerQuizGroupListAction
} from "../../../shared/store/career/getCareerQuizGroupList/getCareerQuizGroupList.action";
import {
    faBook,
    faCartShopping,
    faCheck,
    faCheckCircle,
    faChevronRight,
    faCircleCheck, faCode,
    faCoins, faLockOpen, faRocket,
    faXmark
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {OwlOptions} from "ngx-owl-carousel-o";
import {PayCareerRequest} from "../../../shared/store/career/payCareer/payCareer.request";
import {payCareerAction} from "../../../shared/store/career/payCareer/payCareer.action";
import {payCareerSelector} from "../../../shared/store/career/payCareer/payCareer.selector";
import {RoutesName} from "../../../core/constants/routes.constants";
import {PromoRequest} from "../../../shared/store/promo/promo.request";
import {promoGetAction, promoGetClearAction} from "../../../shared/store/promo/promo.action";
import {getPromoStateSelector} from "../../../shared/store/promo/promo.selector";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CareerQuiz} from "../../../shared/models/careerQuiz.model";

@Component({
  selector: 'app-career-plan',
  templateUrl: './career-plan.component.html',
  styleUrls: ['./career-plan.component.scss']
})
export class CareerPlanComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  dialog = inject(NgxSmartModalService);
  //Injection
  //Data
  careerQuizGroups:CareerQuizGroup[]|null = null;
  purchased:number[]|null = [];
  activeQuizGroup:CareerQuizGroup|null = null;
  activeQuizNumber:number|null = null;
  isGroupBlocked:number[] = [];
  isCareerQuizBlocked:number[] = [];
  modalGroup: CareerQuizGroup|null = null
  modalQuiz: CareerQuiz|null = null
  payCareerRequest: PayCareerRequest = {career_group_id:null, career_quiz_id:null, promo:null};
  public title: string = ''
  public promo: number = 0
  public old_price: number = 0
  public price: number = 0
  public promoError: string|null = null
  public promoSuccess: boolean = false
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
    this._store.select(getCareerQuizGroupListSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.purchased = item.data.purchased;
        this.careerQuizGroups = item.data.group;
        this.activeQuizGroup = item.data.group[0];
      }
    })
    this._store.select(payCareerSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        if(item.data.pg_redirect_url){
          window.location.href = item.data.pg_redirect_url;
        }
      }
      else{
        this.isGroupBlocked = [];
        this.isCareerQuizBlocked = [];
      }
    })
  }
  openDialog(id: string, group: CareerQuizGroup|null = null, quiz: CareerQuiz|null = null) {
    this.promoSuccess = false
    this.promoError = null
    this.price = 0
    this.promo_form.reset()
    if (group) {
      this.modalGroup = group
      this.title = this.translate.currentLang == 'kk' ? group.title_kk : group.title_ru
      this.old_price = group.old_price
      this.price = group.price
    }
    if (quiz) {
      this.modalQuiz = quiz
      this.title = this.translate.currentLang == 'kk' ? quiz.title_kk : quiz.title_ru
      this.old_price = quiz.old_price
      this.price = quiz.price
    }
    this.getPrice(this.price)
    this.dialog.getModal(id).open(true)
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

  checkPromo(group: CareerQuizGroup|null = null, quiz: CareerQuiz|null = null) {
    // console.log(this.subjects_form.value['promo'])
    if (this.promo_form.value['promo']) {
      let req = {code: this.promo_form.value['promo']} as PromoRequest
      this._store.dispatch(promoGetClearAction())
      this._store.dispatch(promoGetAction({req: req}))
      if (group) {
        this.old_price = group.old_price
        this.price = group.price
      }
      if (quiz) {
        this.old_price = quiz.old_price
        this.price = quiz.price
      }
    }
  }

  onSubmit() {
    if (this.promo_form.valid) {
      if (this.modalGroup) {
        this.payForCareerGroup(this.modalGroup.id, this.promo_form.value['promo'])
      }
      if (this.modalQuiz) {
        this.payForCareerQuiz(this.modalQuiz.id, this.promo_form.value['promo'])
      }
    }
  }
  ngOnInit(): void {
    this.getCareerQuizGroupList();
  }

  getCareerQuizGroupList(){
    this._store.dispatch(getCareerQuizGroupListAction());
  }

  setActiveQuizGroup(item:number){
    if(this.careerQuizGroups){
      if(this.careerQuizGroups[item]){
        this.activeQuizNumber = item;
       this.activeQuizGroup = this.careerQuizGroups[item];
      }
    }
  }
  payForCareerGroup(groupId:number, promo:string|null){
    if(!this.isGroupBlocked.includes(groupId)){
      this.isGroupBlocked.push(groupId);
      this._store.dispatch(payCareerAction({requestData:{career_group_id:groupId, promo: promo} as PayCareerRequest}))
    }
  }
  payForCareerQuiz(quiz_id:number, promo:string|null){
    if(!this.isCareerQuizBlocked.includes(quiz_id)){
      this.isCareerQuizBlocked.push(quiz_id);
      this._store.dispatch(payCareerAction({requestData:{career_quiz_id:quiz_id, promo: promo} as PayCareerRequest}))
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 5,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: [],
    items: 1,
  }

  protected readonly faChevronRight = faChevronRight;
  protected readonly faCoins = faCoins;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faCheck = faCheck;
  protected readonly Image = Image;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faXmark = faXmark;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faCartShopping = faCartShopping;
  protected readonly faLockOpen = faLockOpen;
    protected readonly RoutesName = RoutesName;
    protected readonly faCode = faCode;
    protected readonly faBook = faBook;
    protected readonly faRocket = faRocket;
}
