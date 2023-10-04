import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subStepDetailAction} from "../../../shared/store/step/subStep/subStep.action";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {getSubStepDetailState} from "../../../shared/store/step/subStep/subStep.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-sub-step',
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss']
})
export class SubStepComponent implements OnInit {
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  //@ts-ignore
  public subStep: SubStepModel | null

  ngOnInit(): void {
    this.getSubStep()
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getSubStep() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepDetailAction({requestData: params['id']}))
      this._store.select(getSubStepDetailState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        this.subStep =  item.data
        console.log(item.data)
      })
    })
  }
}
