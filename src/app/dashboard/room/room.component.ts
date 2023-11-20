import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {ClassroomModel} from "../../shared/models/classroom.model";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {deleteRoomsAction, joinRoomsAction, RoomsAction} from "../../shared/store/room/rooms.action";
import {deleteRoomsState, getRoomsState, joinRoomsState} from "../../shared/store/room/rooms.selector";
import {getClassroomsGroupByIDAction} from "../../shared/store/teacher/classrooms/classrooms.action";
import {getClassroomsGroupByIDState} from "../../shared/store/teacher/classrooms/classrooms.selector";
import {TwNotification} from "ng-tw";
import {TranslatePipe} from "@ngx-translate/core";
import {
  getAttemptByPromoCodeAction
} from "../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.action";
import {
  getAttemptByPromoCodeSelector
} from "../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.selector";
import {StrHelper} from "../../core/helpers/str.helper";
import {subjectGetAction, subjectsWithoutRequiredGetAction} from "../../shared/store/subject/subject.action";
import {getSubjectsState, getSubjectsWithoutRequiredStateSelector} from "../../shared/store/subject/subject.selector";
import {Subject} from "../../shared/models/subject.model";
import {RoomsRequest} from "../../shared/store/room/rooms.request";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public classroomID:string = '0'
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslatePipe)
  public _notification = inject(TwNotification)
  private _store = inject(Store)
  public classrooms: ClassroomModel[] = []
  public subjects: Subject[] = []
  errors: Record<string, string[]> | null = null;
  dialog = inject(NgxSmartModalService)
  classroom_form: FormGroup = new FormGroup({
    promo_code: new FormControl("", [
      Validators.required
    ]),
    subject_first: new FormControl(0, [Validators.required]),
    subject_second: new FormControl(0, [Validators.required]),
  }, {validators: this.subjectsNotEqualValidator()});
  subjectsNotEqualValidator(): ValidatorFn {
    // @ts-ignore
    return (formGroup: FormGroup): ValidationErrors | null => {
      const subjectFirst = formGroup.get('subject_first')?.value;
      const subjectSecond = formGroup.get('subject_second')?.value;
      if (subjectFirst === subjectSecond) {
        return { subjectsEqual: true };
      }
      if (subjectFirst == 0) {
        return { subjectsEqual: true };
      }
      if (subjectSecond == 0) {
        return { subjectsEqual: true };
      }
      return null;
    };
  }
  pass_test_form: FormGroup = new FormGroup({
    promo_code: new FormControl("", [
      Validators.required
    ]),
  });

  ngOnInit(): void {
    this.getClassrooms()
  }

  onSubmit() {
    if (this.classroom_form.valid) {
      let promo = this.classroom_form.getRawValue() as RoomsRequest
      this._store.dispatch(joinRoomsAction({req: promo}))
      this._store.select(joinRoomsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          if (item.data) {
            this.getClassrooms()
          }
          this.dialog.closeLatestModal()
      })
    }
    this.classroom_form.reset()
  }
  onPassTest() {
    if (this.pass_test_form.valid) {
      let promo = this.pass_test_form.get('promo_code')?.value as string
      this._store.dispatch(getAttemptByPromoCodeAction({requestData: promo}))
      this._store.select(getAttemptByPromoCodeSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          this.dialog.closeLatestModal()
      })
    }
  }

  onDelete(id: number) {
      this._store.dispatch(deleteRoomsAction({id: id}))
      this._store.select(deleteRoomsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          if (item.data) {
              this.getClassrooms()
              this._notification.show({ type: 'success', title: this._translatePipe.transform('SUCCESS'), text: this._translatePipe.transform('DONE') })
          }
      })
  }

  openDialog(id: string) {
    this.getSubjectsWithoutRequired()
    this.classroom_form.reset()
    this.dialog.getModal(id).open(true)
  }

    getClassrooms() {
    this._store.dispatch(RoomsAction())
    this._store.select(getRoomsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      //@ts-ignore
      this.classrooms = item.data
    })
  }

  getSubjectsWithoutRequired() {
    this._store.dispatch(subjectsWithoutRequiredGetAction())
    this._store.select(getSubjectsWithoutRequiredStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.subjects = item.data
      }
    })
  }

  protected readonly parseInt = parseInt;
    protected readonly StrHelper = StrHelper;
}
