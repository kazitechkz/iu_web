import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {StepModel, Steps} from "../../../shared/models/step.model";
import {stepDetailAction} from "../../../shared/store/step/detail/stepDetail.action";
import {getStepDetailState} from "../../../shared/store/step/detail/stepDetail.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {ColorConstants} from "../../../core/constants/color.constants";

@Component({
  selector: 'app-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})
export class StepDetailComponent implements OnInit {
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  public steps?: Steps[] | null
  ngOnInit(): void {
    this.getStepDetail()
  }

  getStepDetail() {
    this._route.params.subscribe(params => {
      this._store.dispatch(stepDetailAction({requestData: params['id']}))
      this._store.select(getStepDetailState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.steps = item.data
      })
    })
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly Array = Array;
}
