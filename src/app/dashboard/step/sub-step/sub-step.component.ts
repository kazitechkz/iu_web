import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {stepAction} from "../../../shared/store/step/step.action";
import {getStepState} from "../../../shared/store/step/step.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subStepAction, subStepDetailAction} from "../../../shared/store/step/subStep/subStep.action";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {getSubStepDetailState, getSubStepState} from "../../../shared/store/step/subStep/subStep.selector";

@Component({
  selector: 'app-sub-step',
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss']
})
export class SubStepComponent implements OnInit {
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  public subStep?: SubStepModel | null

  ngOnInit(): void {
    this.getSubStep()
  }

  getSubStep() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepDetailAction({requestData: params['id']}))
      this._store.select(getSubStepDetailState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.subStep = item.data
      })
    })

  }
}
