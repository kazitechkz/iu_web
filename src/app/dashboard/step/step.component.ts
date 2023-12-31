import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {stepAction} from "../../shared/store/step/step.action";
import {getStepState} from "../../shared/store/step/step.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {StepModel} from "../../shared/models/step.model";
import {ImageHelper} from "../../core/helpers/image.helper";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {StrHelper} from "../../core/helpers/str.helper";

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  protected readonly ColorConstants = ColorConstants
  private _store = inject(Store)
  private _route = inject(Router)
  destroyRef = inject(DestroyRef);
  public steps: StepModel[] | null = []
  ngOnInit(): void {
    this.getSteps()
  }

  getSteps() {
    this._store.dispatch(stepAction({localeId: 1}))
    this._store.select(getStepState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.steps = item.data
    })
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly GlobalTranslateService = GlobalTranslateService;
}
