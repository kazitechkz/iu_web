import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getAttemptByPromoCodeAction
} from "../../../shared/store/attempt/getAttemptByPromoCode/getAttemptByPromoCode.action";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-pass-unt-by-promo',
  templateUrl: './pass-unt-by-promo.component.html',
  styleUrls: ['./pass-unt-by-promo.component.scss']
})
export class PassUntByPromoComponent implements OnInit{
  private _store = inject(Store);
  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(getAttemptByPromoCodeAction({requestData:params["promo_code"]}));
    });
    this._router.navigateByUrl(RoutesName.notification);
  }
}
