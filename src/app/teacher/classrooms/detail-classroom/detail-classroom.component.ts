import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {select, Store} from "@ngrx/store";
import {detailClassroomAction} from "../../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.action";
import {
  getDetailClassroomState
} from "../../../shared/store/teacher/classrooms/detail-classroom/detail-classroom.selector";
import {Observable} from "rxjs";
import {ResponseData} from "../../../shared/store/response_data";
import {DetailClassroomModel} from "../../../shared/models/classroomsGroup.model";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss']
})
export class DetailClassroomComponent implements OnInit {
  isAllChecked: boolean = false
  isSingleTest: boolean = false
  public checkedList: any[] = []
  public data: DetailClassroomModel[] = []
  public subjects: Subject[] = []
  public categories: CategoryModel[] = []
  checkbox_form: FormGroup = new FormGroup({
    users: new FormControl([], [Validators.required]),
  });
  private _route = inject(ActivatedRoute)
  public translate = inject(GlobalTranslateService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  dialog = inject(NgxSmartModalService)
  ngOnInit(): void {
    this.getDetailClassroom()
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

  getDetailClassroom() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(detailClassroomAction({id: params['id']}))
      this._store.select(getDetailClassroomState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item =>
        //@ts-ignore
        this.data = item.data
      )
    })
  }

  submit(){
    this.isSingleTest = true
    this.getSubjects()
  }

  getCategories(subjectID: number) {
    this._store.dispatch(GetCategoriesAction({subjectID: subjectID}));
    this._store.select(getCategoriesState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      // @ts-ignore
      this.categories = item.data
    })
  }

  getSubjects() {
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      // @ts-ignore
      this.subjects = item.data
    })
  }

  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
}
