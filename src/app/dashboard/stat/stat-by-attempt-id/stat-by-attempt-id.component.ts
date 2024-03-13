import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {StatByAttemptIdModel} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.action.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {statByAttemptIdAction} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.action";
import {statByAttemptIdSelector} from "../../../shared/store/stat/statByAttemptId/statByAttemptId.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faChartBar, faCoins} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {PassSubStepAction, PassSubStepClearAction} from "../../../shared/store/stat/passSubStep/passSubStep.action";
import {PassSubStepRequest} from "../../../shared/store/stat/passSubStep/passSubStep.request";
import {passSubStepSelector} from "../../../shared/store/stat/passSubStep/passSubStep.selector";
import {StrHelper} from "../../../core/helpers/str.helper";
import {subStepDetailClearAction} from "../../../shared/store/step/subStep/subStep.action";
import {NgxSmartModalService} from "ngx-smart-modal";
import {SubStepModel} from "../../../shared/models/subStep.model";
import {ModalContentOfferComponent} from "../../../shared/components/modal-content-offer/modal-content-offer.component";

@Component({
  selector: 'app-stat-by-attempt-id',
  templateUrl: './stat-by-attempt-id.component.html',
  styleUrls: ['./stat-by-attempt-id.component.scss']
})
export class StatByAttemptIdComponent implements OnInit, OnDestroy {
  //@ts-ignore
  @ViewChild('modalBuyContent', {static: false}) modalBuyContent: ModalContentOfferComponent;
//Injection Start
  private subscription: Subscription = new Subscription();
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private destroyRef: DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  public localeID = 1;
  public dialog = inject(NgxSmartModalService)
  public substeps: SubStepModel[] = []
  //Injection End
  //Data
  //@ts-ignore
  statByAttempt: StatByAttemptIdModel;

  //Data

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(params => {
      let routeId = params["id"];
      this.getStatByAttemptId(routeId);
    })
    this.localeID = StrHelper.getLocaleIdByCurrentLang(this.translate.currentLang)
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

  getStatByAttemptId(id: number) {
    this._store.dispatch(statByAttemptIdAction({requestData: id}));
    this._store.select(statByAttemptIdSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if (item.data) {
          this.statByAttempt = item.data;
        }
      }
    )
  }

  getSubjectResult(subject_id: number) {
    return this.statByAttempt.stat_by_attempt.filter(item => item.subject_id == subject_id);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly faChartBar = faChartBar;
  protected readonly faCoins = faCoins;
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
