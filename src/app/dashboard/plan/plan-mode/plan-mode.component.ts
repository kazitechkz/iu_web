import {Component, DestroyRef, inject} from '@angular/core';
import {ImageHelper} from "../../../core/helpers/image.helper";
import {
  faBook,
  faChartLine,
  faCircleQuestion,
  faGraduationCap,
  faLanguage,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {RoomsRequest} from "../../../shared/store/room/rooms.request";
import {joinRoomsAction} from "../../../shared/store/room/rooms.action";
import {joinRoomsState} from "../../../shared/store/room/rooms.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subjectsWithoutRequiredGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsWithoutRequiredStateSelector} from "../../../shared/store/subject/subject.selector";
import {Store} from "@ngrx/store";
import {Subject} from "../../../shared/models/subject.model";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {TranslatePipe} from "@ngx-translate/core";
import {NgxSmartModalService} from "ngx-smart-modal";
import {PayRequest} from "../../../shared/store/paybox/pay_create/pay.request";
import {payCreateAction} from "../../../shared/store/paybox/pay_create/payCreate.action";
import {payCreateSelector} from "../../../shared/store/paybox/pay_create/payCreate.selector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plan-mode',
  templateUrl: './plan-mode.component.html',
  styleUrls: ['./plan-mode.component.scss']
})
export class PlanModeComponent {
  errors: Record<string, string[]> | null = null;
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslatePipe)
  dialog = inject(NgxSmartModalService)
  destroyRef = inject(DestroyRef);
  private _store = inject(Store)
  private _route = inject(Router)
  public subjects: Subject[] = []
  subjects_form: FormGroup = new FormGroup({
    time: new FormControl(1),
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
  onSubmit() {
    if (this.subjects_form.valid) {
      let req = this.subjects_form.getRawValue() as PayRequest
      this._store.dispatch(payCreateAction({req: req}))
      this._store.select(payCreateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
         window.location.href = item.data.pg_redirect_url
        }
      })
    }
    this.subjects_form.reset()
  }

  openDialog(id: string, time: number) {
    this.getSubjectsWithoutRequired()
    this.subjects_form.reset()
    this.subjects_form.patchValue({
      time: time
    })
    this.dialog.getModal(id).open(true)
  }
  getSubjectsWithoutRequired() {
    this._store.dispatch(subjectsWithoutRequiredGetAction())
    this._store.select(getSubjectsWithoutRequiredStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.subjects = item.data
      }
    })
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly faBook = faBook;
  protected readonly faStar = faStar;
  protected readonly faLanguage = faLanguage;
  protected readonly faCircleQuestion = faCircleQuestion;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly RoutesName = RoutesName;
  protected readonly faChartLine = faChartLine;
}
