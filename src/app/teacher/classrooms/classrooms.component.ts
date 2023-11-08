import {Component, DestroyRef, DoCheck, inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ClassroomsGroupModel} from "../../shared/models/classroomsGroup.model";
import {
  classroomsGroupAction, createClassroomsGroupAction, deleteClassroomsGroupAction,
  getClassroomsGroupByIDAction, updateClassroomsGroupAction
} from "../../shared/store/teacher/classrooms/classrooms.action";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {ResponseData} from "../../shared/store/response_data";
import {
  createClassroomsGroupState,
  getClassroomsGroupByIDState,
  getClassroomsGroupState
} from "../../shared/store/teacher/classrooms/classrooms.selector";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgxSmartModalService} from "ngx-smart-modal";
import {ClassroomsRequest} from "../../shared/store/teacher/classrooms/classrooms.request";
import {updateClassroomsGroupState} from "../../shared/store/teacher/classrooms/classrooms.selector";
import {deleteClassroomsGroupState} from "../../shared/store/teacher/classrooms/classrooms.selector";

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {
  public classroomGroupID:string = '0'
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  //@ts-ignore
  data$: Observable<ResponseData<ClassroomsGroupModel[]>>
  public classroomsGroups: ClassroomsGroupModel[] = []
  errors: Record<string, string[]> | null = null;
  dialog = inject(NgxSmartModalService)
  classroom_form: FormGroup = new FormGroup({
    title_kk: new FormControl("", [
      Validators.required
    ]),
    title_ru: new FormControl("", [
      Validators.required
    ]),
  });
  ngOnInit(): void {
    this.getClassroomsGroup()
    // console.log(this.classroomsGroups)
  }
  onCreateSubmit() {
    if (this.classroom_form.valid) {
      let req = this.classroom_form.getRawValue() as ClassroomsRequest
      this._store.dispatch(createClassroomsGroupAction({request: req}))
      this._store.select(createClassroomsGroupState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.getClassroomsGroup()
          this.dialog.closeLatestModal()
        }
      })
    }
  }

  onUpdateSubmit(id: number) {
    if (this.classroom_form.valid) {
      let req = this.classroom_form.getRawValue() as ClassroomsRequest
      this._store.dispatch(updateClassroomsGroupAction({request: req, id: id}))
      this._store.select(updateClassroomsGroupState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.getClassroomsGroup()
        }
      })
    }
  }

  onDeleteSubmit(id: number) {
    this._store.dispatch(deleteClassroomsGroupAction({id: id}))
    this._store.select(deleteClassroomsGroupState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.getClassroomsGroup()
      }
    })
  }
  openDialog(id: string) {
    if (id == '0') {
      this.classroom_form.reset()
    } else {
      this._store.dispatch(getClassroomsGroupByIDAction({id: id}))
      this._store.select(getClassroomsGroupByIDState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.classroom_form.patchValue({
          'title_kk': item.data?.title_kk,
          'title_ru': item.data?.title_ru
        })
      })
    }
    this.dialog.getModal(id).open(true)
  }
  getClassroomsGroup() {
    this._store.dispatch(classroomsGroupAction())
    this._store.select(getClassroomsGroupState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      //@ts-ignore
      this.classroomsGroups = item.data
    })
  }

  protected readonly String = String;
  protected readonly parseInt = parseInt;
}
