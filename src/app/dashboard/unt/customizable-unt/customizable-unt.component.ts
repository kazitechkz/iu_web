import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  faBook,
  faBoxesPacking,
  faCheck,
  faCircleCheck,
  faClock,
  faLanguage, faLock,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
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
import {AttemptSettingsData, Basket} from "../../../shared/models/attemptSetting.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StrHelper} from "../../../core/helpers/str.helper";
import {GetSubCategoriesAction} from "../../../shared/store/category/subCategory/subCategory.action";
import {getSubCategoriesState} from "../../../shared/store/category/subCategory/subCategory.selector";
import {QuestionTypesWithCount} from "../../../shared/models/question.model";
import {NgxSmartModalService} from "ngx-smart-modal";
import {SubCategoryModel} from "../../../shared/models/subCategory.model";
import {Me} from "../../../shared/models/user.model";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
import {
  getAttemptByPromoCodeAction
} from "../../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.action";
import {
  getAttemptByPromoCodeSelector
} from "../../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.selector";
import {
  CreateAttemptSettingsRequest
} from "../../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.request";
import {
  createAttemptSettingsAction
} from "../../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.action";
import {
  createAttemptSettingsSelector
} from "../../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ModalUntTrainerComponent} from "../../../shared/components/modal-unt-trainer/modal-unt-trainer.component";
import {ModalContentOfferComponent} from "../../../shared/components/modal-content-offer/modal-content-offer.component";

@Component({
  selector: 'app-customizable-unt',
  templateUrl: './customizable-unt.component.html',
  styleUrls: ['./customizable-unt.component.scss']
})
export class CustomizableUntComponent implements OnInit,OnDestroy{
  //@ts-ignore
  @ViewChild('modalBuyUNTContent', { static: false }) modalBuyUNTContent: ModalContentOfferComponent;

  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  dialog = inject(NgxSmartModalService);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  //@ts-ignore
  me:Me;
  subjects:Subject[] = [];
  allSubjects:Subject[] = [];
  public categories: CategoryModel[] = []
  protected readonly ImageHelper = ImageHelper;
  chosenSubject:number = 0;
  locale_id:number = 1;
  subCategoryContentID: number = 0
  isSelectedSubCategory: number = 0
  isSelectAllCategoryID: number = 0
  public subCategories: SubCategoryModel[] = []
  public basket: Basket = {
    singleQ: 0,
    contextQ: 0,
    multiQ: 0,
    data: []
  };
  attempt_settings_form: FormGroup = new FormGroup({
    users: new FormControl(null, [Validators.required]),
    time: new FormControl(60, [Validators.required]),
    settings: new FormControl(null, [Validators.required]),
    locale_id: new FormControl(null, [Validators.required]),
    subject_id: new FormControl(null, [Validators.required]),
    hidden_fields: new FormControl(null),
  })
  category_form: FormGroup = new FormGroup({
    s_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    c_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    m_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)])
  })
  sub_category_form: FormGroup = new FormGroup({
    s_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    c_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    m_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)])
  })
  isShowCategoryContent: boolean = false
  initialData: AttemptSettingsData = []
  //Data

  ngOnInit(): void {
    this.getUserInfo();
    this.getMySubjects();
  }
  ngOnDestroy(): void {
  }

  openBuyDialog(subject:Subject){
    this.modalBuyUNTContent.openDialog(subject)
  }
  chooseSubject(id:number){
    this.chosenSubject = id;
    this.getCategories();
  }
  getUserInfo(){
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data){
        this.me = item.data;
      }
    });
  }
  getMySubjects(){
    this._store.dispatch(getMySubjectsAction());
    this._store.select(getMySubjectsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
        this.getAllSubjects();
      }
    })
  }

  sendQuery() {
    if (this.attempt_settings_form.get('hidden_fields')?.value) {
      this.attempt_settings_form.patchValue({
        hidden_fields: null
      })
    } else {
      this.attempt_settings_form.patchValue({
        hidden_fields: 'prompt'
      })
    }
    if (this.attempt_settings_form.valid) {
      let formData = this.attempt_settings_form.getRawValue() as CreateAttemptSettingsRequest
      this._store.dispatch(createAttemptSettingsAction({requestData: formData}));
      this._store.select(createAttemptSettingsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.onPassByPromo(item.data.promo_code);
        }
      })
    }
  }

  getAllSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        let mySubjects:number[] = [];
        this.subjects.forEach(item=>mySubjects.push(item.id));
        this.allSubjects = item.data.filter(item=>!mySubjects.includes(item.id))
      }
    })
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
    this.getCategories();
  }


  getCategories() {
    if (this.chosenSubject == 0) {
      this.isShowCategoryContent = false
    } else {
      this.attempt_settings_form.patchValue({
        locale_id: this.locale_id,
        subject_id: this.chosenSubject,
        users: [this.me.id]
      })
      this.isShowCategoryContent = true
      this._store.dispatch(GetCategoriesAction({subjectID: this.chosenSubject, localeID: this.locale_id}));
      this._store.select(getCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        // @ts-ignore
        this.categories = item.data
      })
    }
    this.initialData = []
    this.updateBasket()
  }

  getSubCategories(categoryID: number) {
    if (this.subCategoryContentID == categoryID) {
      this.subCategoryContentID = 0
    } else {
      this.subCategoryContentID = categoryID
    }
    this._store.dispatch(GetSubCategoriesAction({categoryID: categoryID, localeID: this.locale_id}));
    this._store.select(getSubCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      // @ts-ignore
      this.subCategories = item.data
    })
  }
  selectAllCategoryByID(categoryID: number) {
    if (this.isSelectAllCategoryID == categoryID) {
      this.isSelectAllCategoryID = 0
      if (this.initialData.hasOwnProperty(categoryID)) {
        delete this.initialData[categoryID]
        this.isSelectedSubCategory = 0
        this.updateBasket()
      }
      this.category_form.reset()
    } else {
      this.isSelectAllCategoryID = categoryID
    }
  }
  updateBasket() {
    this.basket.singleQ = 0
    this.basket.contextQ = 0
    this.basket.multiQ = 0
    Object.entries(this.initialData).forEach(([key, value], index) => {
      this.basket.singleQ += value.s_questions ? parseInt(String(value.s_questions)) : 0
      this.basket.contextQ += value.c_questions ? parseInt(String(value.c_questions)) : 0
      this.basket.multiQ += value.m_questions ? parseInt(String(value.m_questions)) : 0
      if (value.sub_category_ids) {
        Object.entries(value.sub_category_ids).forEach(([sub_key, sub_value], index) => {
          // @ts-ignore
          this.basket.singleQ += sub_value.s_questions ? parseInt(String(sub_value.s_questions)) : 0
          // @ts-ignore
          this.basket.contextQ += sub_value.c_questions ? parseInt(String(sub_value.c_questions)) : 0
          // @ts-ignore
          this.basket.multiQ += sub_value.m_questions ? parseInt(String(sub_value.m_questions)) : 0
        })
      }
    });
    this.attempt_settings_form.patchValue({
      settings: JSON.stringify(this.initialData)
    })
  }

  onPassByPromo(promo:string) {
      this._store.dispatch(getAttemptByPromoCodeAction({requestData: promo}))
      this._store.select(getAttemptByPromoCodeSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.dialog.closeLatestModal()
      })

  }

  categoryFormSubmit(category: CategoryModel) {
    const categoryID: number = category.id
    let formData = this.category_form.getRawValue() as QuestionTypesWithCount
    if (formData.s_questions_count > category.s_questions_count) {
      formData.s_questions_count = category.s_questions_count
    }
    if (formData.c_questions_count > category.c_questions_count) {
      formData.c_questions_count = category.c_questions_count
    }
    if (formData.m_questions_count > category.m_questions_count) {
      formData.m_questions_count = category.m_questions_count
    }
    if (formData.s_questions_count < 0) {
      formData.s_questions_count = 0
    }
    if (formData.c_questions_count < 0) {
      formData.c_questions_count = 0
    }
    if (formData.m_questions_count < 0) {
      formData.m_questions_count = 0
    }
    let newData = {
      [categoryID]: {
        c_questions: formData.c_questions_count,
        s_questions: formData.s_questions_count,
        m_questions: formData.m_questions_count
      }
    }
    this.initialData = {...this.initialData, ...newData}
    this.category_form.reset()
    this.subCategoryContentID = 0
    this.updateBasket()
  }
  checkExistSubCategoryFromSelectedList(categoryID: number, subCategoryID: number): boolean {
    if (this.initialData.hasOwnProperty(categoryID)) {
      if (this.initialData[categoryID].sub_category_ids) {
        //@ts-ignore
        return this.initialData[categoryID].sub_category_ids.hasOwnProperty(subCategoryID);
      } else {
        return false
      }
    } else {
      return false
    }
  }
  subCategoryFormSubmit(subCategory: SubCategoryModel, category: CategoryModel) {
    const subCategoryID: number = subCategory.id
    const categoryID: number = category.id
    let formData = this.sub_category_form.getRawValue() as QuestionTypesWithCount
    if (formData.s_questions_count > subCategory.s_questions_count) {
      formData.s_questions_count = subCategory.s_questions_count
    }
    if (formData.c_questions_count > subCategory.c_questions_count) {
      formData.c_questions_count = subCategory.c_questions_count
    }
    if (formData.m_questions_count > subCategory.m_questions_count) {
      formData.m_questions_count = subCategory.m_questions_count
    }
    if (formData.s_questions_count < 0) {
      formData.s_questions_count = 0
    }
    if (formData.c_questions_count < 0) {
      formData.c_questions_count = 0
    }
    if (formData.m_questions_count < 0) {
      formData.m_questions_count = 0
    }

    if (this.initialData[categoryID] !== undefined) {
      this.initialData[categoryID].s_questions = 0
      this.initialData[categoryID].c_questions = 0
      this.initialData[categoryID].m_questions = 0
      this.initialData[categoryID].sub_category_ids = {
        ...this.initialData[categoryID].sub_category_ids, ...{
          [subCategoryID]: {
            c_questions: formData.c_questions_count,
            s_questions: formData.s_questions_count,
            m_questions: formData.m_questions_count
          }
        }
      }
    } else {
      let newData = {
        [categoryID]: {
          s_questions: 0,
          c_questions: 0,
          m_questions: 0,
          sub_category_ids: {
            [subCategoryID]: {
              c_questions: formData.c_questions_count,
              s_questions: formData.s_questions_count,
              m_questions: formData.m_questions_count
            }
          }
        }
      }
      this.initialData = {...this.initialData, ...newData}
    }
    this.dialog.closeLatestModal()
    this.sub_category_form.reset()
    this.updateBasket()
  }

  customOptions: OwlOptions = {
    loop: true,
    items:5,
    margin:15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoHeight:true,
    autoWidth:true,
    nav:false,
    navText: ["<",">"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }

  protected readonly faClock = faClock;
  protected readonly faBook = faBook;
  protected readonly faLanguage = faLanguage;
  protected readonly faBoxesPacking = faBoxesPacking;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly StrHelper = StrHelper;
  protected readonly String = String;
  protected readonly faCheck = faCheck;
  protected readonly faXmark = faXmark;
  protected readonly faLock = faLock;
    protected readonly Object = Object;
}
