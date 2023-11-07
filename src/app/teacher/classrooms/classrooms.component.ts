import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ClassroomsGroupModel} from "../../shared/models/classroomsGroup.model";
import {classroomsGroupAction} from "../../shared/store/teacher/classrooms/classrooms.action";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {ResponseData} from "../../shared/store/response_data";
import {getClassroomsGroupState} from "../../shared/store/teacher/classrooms/classrooms.selector";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.scss']
})
export class ClassroomsComponent implements OnInit {
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  //@ts-ignore
  data$: Observable<ResponseData<ClassroomsGroupModel[]>>
  ngOnInit(): void {
    this.getClassroomsGroup()
  }

  getClassroomsGroup() {
    this._store.dispatch(classroomsGroupAction())
    this.data$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getClassroomsGroupState))
  }

}
