import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef, DoCheck,
  ElementRef,
  inject, OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  subStepDetailAction,
  subStepDetailClearAction,
  subStepResultAction
} from "../../../shared/store/step/subStep/subStep.action";
import {SubResult, SubStepModel} from "../../../shared/models/subStep.model";
import {getSubStepDetailState, getSubStepResultState} from "../../../shared/store/step/subStep/subStep.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
import {Actions} from "@ngrx/effects";
import {distinctUntilChanged, Observable} from "rxjs";
import {ResponseData} from "../../../shared/store/response_data";
import {calculate} from "@rxweb/reactive-form-validators/algorithm/luhn-algorithm";
import {GlobalTranslatePipe} from "../../../core/pipes/globalTranslate.pipe";
import {MathJaxPipe} from "../../../core/pipes/mathJax.pipe";
import {SubStepContentModel} from "../../../shared/models/subStepContent.model";

@Component({
  selector: 'app-sub-step',
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss']
})
export class SubStepComponent implements OnInit {
  //@ts-ignore
  @ViewChild('mobileElement') mobileElement: ElementRef
  //@ts-ignore
  @ViewChild('smElement') smElement: ElementRef
  //@ts-ignore
  @ViewChild('mdElement') mdElement: ElementRef
  //@ts-ignore
  @ViewChild('lgElement') lgElement: ElementRef
  //@ts-ignore
  @ViewChild('xlElement') xlElement: ElementRef
  //@ts-ignore
  @ViewChild('xxlElement') xxlElement: ElementRef
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  private changeDetectorRef = inject(ChangeDetectorRef)
  //@ts-ignore
  public subStep: SubStepModel
  //@ts-ignore
  public responseData: ResponseData<SubStepModel>
  //@ts-ignore
  result$: Observable<ResponseData<boolean>>;
  //@ts-ignore
  subStep$: Observable<ResponseData<SubStepModel>>
  //@ts-ignore
  public content: SubStepContentModel
  videoId: string = ''
  shortVideoId: string = ''
  public localeID: number = 1

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.localeID = params['locale_id']
    })
    this.checkResult()
    this.getSubStep()
    this.onYoutubePlayer()
    this.videoId = 'UZxEkiwEQT0'
    this.shortVideoId = '6xsHB6qbjwM'
  }

  getWidth(width: number) {
    return width * 0.85;
  }

  getSubStep() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepDetailAction({requestData: params['id']}))
      this.subStep$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getSubStepDetailState))
      this.subStep$.pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        //@ts-ignore
        this.content = item.data?.sub_step_content
      })
    })
  }

  checkResult() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepResultAction({requestData: {sub_step_id: params['id'], locale_id: this.localeID}}))
      this.result$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getSubStepResultState))
    })
  }

  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getId(url: string | undefined) {
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    // @ts-ignore
    return regex.exec(url)[3]
  }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
