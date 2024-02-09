import {Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {Wallet} from "../../../shared/models/wallet.model";
import {walletRatingAction} from "../../../shared/store/wallet/walletRating/walletRating.action";
import {walletRatingSelector} from "../../../shared/store/wallet/walletRating/walletRating.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";

@Component({
  selector: 'app-wallet-rating',
  templateUrl: './wallet-rating.component.html',
  styleUrls: ['./wallet-rating.component.scss']
})
export class WalletRatingComponent implements OnInit {
  // @ts-ignore
  @Input() label: string;
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  private destroyRef = inject(DestroyRef);
  // @ts-ignore
  public wallets: Pagination<Wallet[]>
  requestData = {page:1}
  ngOnInit(): void {
    this.getAllWallets()
  }

  getAllWallets() {
    let request = Object.assign({},this.requestData);
    this._store.dispatch(walletRatingAction({requestData: request}))
    this._store.select(walletRatingSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.wallets = item.data
      }
    })
  }
  pageChanged($event:number){
    this.requestData.page = $event;
    this.getAllWallets();
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly parseInt = parseInt;
  protected readonly console = console;
}
