import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {statBySubjectIdAction} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.action";
import {statBySubjectIdSelector} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {StatBySubjectIdModel} from "../../../shared/store/stat/statBySubjectId/statBySubjectId.action.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {PassSubStepRequest} from "../../../shared/store/stat/passSubStep/passSubStep.request";
import {PassSubStepAction, PassSubStepClearAction} from "../../../shared/store/stat/passSubStep/passSubStep.action";
import {passSubStepSelector} from "../../../shared/store/stat/passSubStep/passSubStep.selector";
import {NgxSmartModalService} from "ngx-smart-modal";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ModalContentOfferComponent} from "../../../shared/components/modal-content-offer/modal-content-offer.component";

@Component({
  selector: 'app-stat-by-subject-id',
  templateUrl: './stat-by-subject-id.component.html',
  styleUrls: ['./stat-by-subject-id.component.scss']
})
export class StatBySubjectIdComponent implements OnInit,OnDestroy{
  //@ts-ignore
  @ViewChild('modalBuyContent', {static: false}) modalBuyContent: ModalContentOfferComponent;
//Injection Start
  private subscription:Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  public localeID = 1;
  public dialog = inject(NgxSmartModalService)
  public substeps: SubStepModel[] = []
  private _router = inject(Router);
  //Injection End
  //Data
  //@ts-ignore
  statBySubject:StatBySubjectIdModel;
  //Data

  ngOnInit(): void {
    this.subscription =  this._route.params.subscribe(params => {
      let routeId = params["id"];
      this.getStatByAttemptId(routeId);
    })
  }

  getStatByAttemptId(id:number){
    this._store.dispatch(statBySubjectIdAction({requestData:id}));
    this._store.select(statBySubjectIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.statBySubject = item.data;
        }
      }
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  goToSubStep(sub_category_id: number) {
    if (sub_category_id) {
      let req = {sub_category_id: sub_category_id} as PassSubStepRequest
      this._store.dispatch(PassSubStepClearAction())
      this._store.dispatch(PassSubStepAction({requestData: req}))
      this._store.select(passSubStepSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item) {
          if (item.data) {
            if (item.data.length > 1) {
              this.dialog.getModal('substeps').open()
              this.substeps = item.data
            } else {
              this._router.navigateByUrl(StrHelper.getDashboardRouteName(RoutesName.subStepRoute) + '/' + item.data[0].id + '/' + 1).then(r => null)
            }
          }
          if (!item.status) {
            this.modalBuyContent.openDialog(null)
          }
        }
      })
    }
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly faCoins = faCoins;
  protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
}
