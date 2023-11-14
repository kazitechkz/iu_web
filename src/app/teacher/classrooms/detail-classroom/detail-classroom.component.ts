import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {detailClassroomAction} from "../../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.action";
import {
  getDetailClassroomState
} from "../../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.selector";
import {DetailClassroomModel} from "../../../shared/models/classroomsGroup.model";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StrHelper} from "../../../core/helpers/str.helper";
import {ColorConstants} from "../../../core/constants/color.constants";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Subject} from "../../../shared/models/subject.model";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {CategoryModel} from "../../../shared/models/category.model";
import {GetCategoriesAction} from "../../../shared/store/category/category.action";
import {getCategoriesState} from "../../../shared/store/category/category.selector";
import {GetSubCategoriesAction} from "../../../shared/store/category/subCategory/subCategory.action";
import {SubCategoryModel} from "../../../shared/models/subCategory.model";
import {getSubCategoriesState} from "../../../shared/store/category/subCategory/subCategory.selector";
import {QuestionTypesWithCount} from "../../../shared/models/question.model";
import {AttemptSettingsData} from "../../../shared/models/attemptSetting.model";

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss']
})
export class DetailClassroomComponent implements OnInit {
  isAllChecked: boolean = false
  isSingleTest: boolean = false
  subCategoryContentID: number = 0
  isShowCategoryContent: boolean = false
  isSelectAllCategoryID: number = 0
  public checkedList: any[] = []
  public data: DetailClassroomModel[] = []
  public subjects: Subject[] = []
  public categories: CategoryModel[] = []
  public subCategories: SubCategoryModel[] = []
  public basket: {
    singleQ: number;
    contextQ: number;
    multiQ: number;
    data: AttemptSettingsData;
  } = {
    singleQ: 0,
    contextQ: 0,
    multiQ: 0,
    data: []
  };

  checkbox_form: FormGroup = new FormGroup({
    users: new FormControl([], [Validators.required])
  });
  category_form: FormGroup = new FormGroup({
    s_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    c_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)]),
    m_questions_count: new FormControl(null, [Validators.pattern(/^[0-9]+$/)])
  })
  initialData: AttemptSettingsData = []

  private _route = inject(ActivatedRoute)
  public translate = inject(GlobalTranslateService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  dialog = inject(NgxSmartModalService)
  ngOnInit(): void {
    this.getDetailClassroom()
  }
  getDetailClassroom() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(detailClassroomAction({id: params['id']}))
      this._store.select(getDetailClassroomState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item =>
        //@ts-ignore
        this.data = item.data
      )
    })
  }

  selectAllCategoryByID(categoryID: number) {
    if (this.isSelectAllCategoryID == categoryID) {
      this.isSelectAllCategoryID = 0
      if (this.initialData.hasOwnProperty(categoryID)) {
        delete this.initialData[categoryID]
      }
      this.category_form.reset()
      console.log(this.initialData)
    } else {
      this.isSelectAllCategoryID = categoryID
    }
  }

  categoryFormSubmit(category: CategoryModel) {
    const categoryID:number = category.id
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
      [categoryID] : {
        c_questions: formData.c_questions_count,
        s_questions: formData.s_questions_count,
        m_questions: formData.m_questions_count
      }
    }
    this.initialData = {...this.initialData,...newData}
    this.category_form.reset()
    this.subCategoryContentID = 0
    this.updateBasket()
  }
  submit(){
    this.isSingleTest = true
    this.getSubjects()
  }
  getSubjects() {
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      // @ts-ignore
      this.subjects = item.data
    })
  }
  getCategories(subjectID: number) {
    if (subjectID == 0) {
      this.isShowCategoryContent = false
    } else {
      this.isShowCategoryContent = true
      this._store.dispatch(GetCategoriesAction({subjectID: subjectID}));
      this._store.select(getCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        // @ts-ignore
        this.categories = item.data
      })
    }
  }
  getSubCategories(categoryID: number) {
    if (this.subCategoryContentID == categoryID) {
      this.subCategoryContentID = 0
    } else {
      this.subCategoryContentID = categoryID
    }
    this._store.dispatch(GetSubCategoriesAction({categoryID: categoryID}));
    this._store.select(getSubCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      // @ts-ignore
      this.subCategories = item.data
    })
  }
  changeCheckbox(event: any, isAll: boolean) {
    if (isAll) {
      if (event.target.checked) {
        this.isAllChecked = true
        this.data.map(arr => {
          if(this.checkedList.includes(arr.user.email)) {
            this.checkedList = this.checkedList.filter((arrChild) => {
              return arrChild !== arr.user.email
            })
            this.checkedList.push(arr.user.email)
          } else {
            this.checkedList.push(arr.user.email)
          }
        })
      } else {
        this.isAllChecked = false
        this.checkedList = []
      }
    } else {
      if(this.checkedList.includes(event.target.value)) {
        this.checkedList = this.checkedList.filter((arr) => {
          return arr !== event.target.value
        })
      } else {
        this.checkedList.push(event.target.value)
      }
    }
    this.checkbox_form.patchValue({
      users: this.checkedList
    })
  }

  updateBasket() {
    Object.entries(this.initialData).forEach(([key, value], index) => {
      this.basket.singleQ += parseInt(String(value.s_questions))
      this.basket.contextQ += parseInt(String(value.c_questions))
      this.basket.multiQ += parseInt(String(value.m_questions))
    });
  }
  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
}
