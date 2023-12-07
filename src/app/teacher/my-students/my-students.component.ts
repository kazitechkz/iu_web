import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {TeacherOwnStudent} from "../../shared/models/user.model";
import {MyStudentsAction} from "../../shared/store/teacher/my-students/my-students.action";
import {myStudentsStateSelector} from "../../shared/store/teacher/my-students/my-students.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {StrHelper} from "../../core/helpers/str.helper";
import {RoutesName} from "../../core/constants/routes.constants";
import {ImageHelper} from "../../core/helpers/image.helper";

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.scss']
})
export class MyStudentsComponent implements OnInit {
  public users: TeacherOwnStudent[] = []
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.getStudents()
  }

  getStudents() {
    this._store.dispatch(MyStudentsAction())
    this._store.select(myStudentsStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.users = item.data
      }
    })
  }

  protected readonly parseInt = parseInt;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
}
