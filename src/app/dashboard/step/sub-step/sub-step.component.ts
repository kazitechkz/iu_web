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
import {subStepDetailAction, subStepResultAction} from "../../../shared/store/step/subStep/subStep.action";
import {SubResult, SubStepModel} from "../../../shared/models/subStep.model";
import {getSubStepDetailState, getSubStepResultState} from "../../../shared/store/step/subStep/subStep.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
import {Actions} from "@ngrx/effects";
import {distinctUntilChanged, Observable} from "rxjs";
import {ResponseData} from "../../../shared/store/response_data";

@Component({
  selector: 'app-sub-step',
  templateUrl: './sub-step.component.html',
  styleUrls: ['./sub-step.component.scss']
})
export class SubStepComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }
  @ViewChild('youTubePlayer') youTubePlayer: ElementRef<HTMLDivElement> | undefined;
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

  videoHeight: number | undefined;
  videoWidth: number | undefined;
  videoId: string = ''

  ngOnInit(): void {

    this.checkResult()
    this.getSubStep()
    this.onYoutubePlayer()
  }

  getSubStep() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepDetailAction({requestData: params['id']}))
      this.subStep$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(getSubStepDetailState))
    })
  }

  checkResult() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(subStepResultAction({requestData: {sub_step_id: params['id'], locale_id: StrHelper.getLocaleIdByCurrentLang(this.translate.currentLang)}}))
      this.result$ = this._store.pipe(select(getSubStepResultState))
    })
  }

  onResize(): void {
    // you can remove this line if you want to have wider video player than 1200px

    this.videoWidth = Math.min(
      // @ts-ignore
      this.youTubePlayer.nativeElement.clientWidth - (this.youTubePlayer.nativeElement.clientWidth * 0.02)
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.3;
    this.changeDetectorRef.detectChanges();
  }

  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getId(url: string) {
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;

    // @ts-ignore
    return regex.exec(url)[3]
  }

  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
