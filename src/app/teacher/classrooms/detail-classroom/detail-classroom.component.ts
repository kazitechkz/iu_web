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

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.scss']
})
export class DetailClassroomComponent implements OnInit {
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  //@ts-ignore
  detailClassroom$: Observable<ResponseData<DetailClassroomModel[]>>
  ngOnInit(): void {
    this.getDetailClassroom()
  }

  getDetailClassroom() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(detailClassroomAction({id: params['id']}))
      this.detailClassroom$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getDetailClassroomState))
    })
  }

  protected readonly parseInt = parseInt;
}
