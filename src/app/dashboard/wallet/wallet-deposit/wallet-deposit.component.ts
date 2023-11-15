import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {walletIndexAction} from "../../../shared/store/wallet/walletIndex/walletIndex.action";
import {walletIndexSelector} from "../../../shared/store/wallet/walletIndex/walletIndex.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {myWalletAction} from "../../../shared/store/wallet/myWallet/myWallet.action";
import {myWalletSelector} from "../../../shared/store/wallet/myWallet/myWallet.selector";
import {Wallet} from "../../../shared/models/wallet.model";
import * as moment from "moment";
import {
  Tab,
  initTE,
} from "tw-elements";
import {RoutesName} from "../../../core/constants/routes.constants";
import {faBook, faClock, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
@Component({
  selector: 'app-wallet-deposit',
  templateUrl: './wallet-deposit.component.html',
  styleUrls: ['./wallet-deposit.component.scss']
})
export class WalletDepositComponent implements OnInit,OnDestroy{

  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  //Injection
  //Data
  wallet:Wallet|null = null;
  //Data
  ngOnInit(): void {
    initTE({ Tab });
    this.getMyWallet();
  }
  ngOnDestroy(): void {
  }

  getMyWallet(){
    this._store.dispatch(myWalletAction());
    this._store.select(myWalletSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.wallet = item.data;
      }
    });
  }


  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faBook = faBook;
  protected readonly faClock = faClock;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faMoneyBill = faMoneyBill;
}
