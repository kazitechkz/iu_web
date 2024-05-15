import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  ViewChild
} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  contentAppealAction, contentAppealClear,
  subStepDetailAction,
  subStepResultAction
} from "../../../shared/store/step/subStep/subStep.action";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {
  contentAppealSelector,
  getSubStepDetailState,
  getSubStepResultState
} from "../../../shared/store/step/subStep/subStep.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
import {last, Observable, skip, take} from "rxjs";
import {ResponseData} from "../../../shared/store/response_data";
import {SubStepContentModel} from "../../../shared/models/subStepContent.model";
import {Subject} from "../../../shared/models/subject.model";
import {SubjectHelper} from "../../../core/helpers/subject.helper";
import {ContentAppealRequest} from "../../../shared/store/step/subStep/subStep.request";
import Swal from "sweetalert2";

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
  public content: SubStepContentModel;
  public activeSubject : Subject|null = null;
  videoId: string = ''
  shortVideoId: string = ''
  public localeID: number = 1
  public contentAppealRequest: ContentAppealRequest = {
    content_id: 0
  }
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.localeID = params['locale_id']
    })
    this.checkResult()
    this.getSubStep()
    // this.onYoutubePlayer()
    this.videoId = 'UZxEkiwEQT0'
    this.shortVideoId = '6xsHB6qbjwM'
  }

  createContentAppeal() {
    if (this.contentAppealRequest.content_id != 0) {
      this._store.dispatch(contentAppealClear())
      this._store.dispatch(contentAppealAction({requestData: this.contentAppealRequest}));
      this._store.select(contentAppealSelector).pipe(
          autoUnsubscribe(this.destroyRef),
          skip(1), // Пропускаем первые n значений
          take(1)
        )
        .subscribe(item => {
        console.log('Selector output:', item);
        if (item && item.data) {
          console.log('have')
          Swal.fire({
            title: "Спасибо за отклик!",
            text: "Мы обязательно проверим данный конспект!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          console.log('not have')
          Swal.fire({
            title: "Вы уже оставили заявку!",
            text: "Мы обязательно проверим данный конспект!",
            icon: "info",
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }

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
        this.content = item.data?.sub_step_content;
        if(item.data?.step.subject_id){
         this.activeSubject = SubjectHelper.staticSubject.find(subj => subj.id == item.data?.step.subject_id) ?? null;
        }
        if (this.content) {
          this.contentAppealRequest.content_id = this.content.id
        }
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
