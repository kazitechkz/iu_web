import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
import {AttemptSettingsData, Basket} from "../../../shared/models/attemptSetting.model";
import {
  CreateAttemptSettingsRequest
} from "../../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.request";
import {
  createAttemptSettingsAction
} from "../../../shared/store/attemptSettings/createAttemptSettings/createAttemptSettings.action";
import {TwNotification} from "ng-tw";
import {deleteClassroomByIDAction} from "../../../shared/store/teacher/classrooms/classrooms.action";

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss']
})
export class DetailClassroomComponent implements OnInit {
  localeID: number = 1
  subjectLocaleID: number = 0
  isAllChecked: boolean = false
  isSingleTest: boolean = false
  isSelectedSubCategory: number = 0
  subCategoryContentID: number = 0
  isShowCategoryContent: boolean = false
  isSelectAllCategoryID: number = 0
  public checkedList: any[] = []
  public subCategoryIDSList: number[] = []
  public data: DetailClassroomModel[] = []
  public subjects: Subject[] = []
  public categories: CategoryModel[] = []
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
  checkbox_form: FormGroup = new FormGroup({
    users: new FormControl([], [Validators.required])
  });
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
  initialData: AttemptSettingsData = []

  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  public translate = inject(GlobalTranslateService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  dialog = inject(NgxSmartModalService)
  private _notification = inject(TwNotification)

  ngOnInit(): void {
    this.getDetailClassroom()
    this.localeID = StrHelper.getLocaleIdByCurrentLang(this.translate.currentLang)
  }

  getDetailClassroom() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(detailClassroomAction({id: params['id']}))
      this._store.select(getDetailClassroomState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          //@ts-ignore
          this.data = item.data
        }
      )
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

  submit() {
    this.isSingleTest = true
    this.getSubjects()
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
      this._store.dispatch(createAttemptSettingsAction({requestData: formData}))
      this._notification.show({ type: 'success', title: 'Успешно создан' })
      this._router.navigateByUrl(StrHelper.getTeacherRouteName(RoutesName.teacherTests)).then(r => null)
    }
  }

  deleteUserFromClassroom(classroom_id: number) {
    this._store.dispatch(deleteClassroomByIDAction({id: classroom_id}))
    this._notification.show({ type: 'danger', title: 'Удалено', text: '' })
    this.getDetailClassroom()
  }

  getSubjects() {
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      // @ts-ignore
      this.subjects = item.data
    })
  }

  selectLanguage(event: any) {
    this.localeID = parseInt((event.target as HTMLInputElement).value)
    this.getCategories(this.subjectLocaleID, true)
  }

  getCategories(event: any, isLanguageSelect: boolean = false) {
    let subjectID = 0
    if (isLanguageSelect) {
      this.subCategoryContentID = 0
      subjectID = event;
    } else {
      subjectID = parseInt((event.target as HTMLInputElement).value);
    }
    if (subjectID == 0) {
      this.isShowCategoryContent = false
    } else {
      this.attempt_settings_form.patchValue({
        locale_id: this.localeID,
        subject_id: this.subjectLocaleID,
        users: this.checkbox_form.get('users')?.value
      })
      this.subjectLocaleID = subjectID
      this.isShowCategoryContent = true
      this._store.dispatch(GetCategoriesAction({subjectID: subjectID, localeID: this.localeID}));
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
    this._store.dispatch(GetSubCategoriesAction({categoryID: categoryID, localeID: this.localeID}));
    this._store.select(getSubCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      // @ts-ignore
      this.subCategories = item.data
    })
  }

  changeCheckbox(event: any, isAll: boolean) {
    if (isAll) {
      if (event.target.checked) {
        this.isAllChecked = true
        this.data.map(arr => {
          if (this.checkedList.includes(arr.user.id)) {
            this.checkedList = this.checkedList.filter((arrChild) => {
              return arrChild !== arr.user.id
            })
            this.checkedList.push(arr.user.id)
          } else {
            this.checkedList.push(arr.user.id)
          }
        })
      } else {
        this.isAllChecked = false
        this.checkedList = []
      }
    } else {
      if (this.checkedList.includes(event.target.value)) {
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

  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
  protected readonly String = String;
}
