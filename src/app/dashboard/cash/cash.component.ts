import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {WalletIndexModel} from "../../shared/store/wallet/walletIndex/walletIndex.model";
import {StrHelper} from "../../core/helpers/str.helper";
import {RoutesName} from "../../core/constants/routes.constants";
import * as moment from "moment";
import {
  faArrowRight,
  faBook,
  faBoxesPacking, faChartBar,
  faChevronRight,
  faClock,
  faCoins,
  faLanguage, faMessage,
  faQrcode, faQuestionCircle, faRightLeft, faUsersLine
} from "@fortawesome/free-solid-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons/faDollarSign";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Clipboard} from "@angular/cdk/clipboard";
import Swal from "sweetalert2";
import {ImageHelper} from "../../core/helpers/image.helper";
import {refsAction} from "../../shared/store/cash/refs/refs.action";
import {refsSelector} from "../../shared/store/cash/refs/refs.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {RefsModel} from "../../shared/store/cash/refs/refs.model";
@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss']
})

export class CashComponent implements OnInit {
  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  dialog = inject(NgxSmartModalService)
  clipboard = inject(Clipboard)
  //Injection
  //Data
  refs:RefsModel|null = null;
  walletRoutes = [
    {title:"MY_CASHES", icon:faDollarSign, route:StrHelper.getRouteName(RoutesName.walletTransfer)}
  ]
  //Data
  ngOnInit(): void {
    this.getMyRefs()
  }

  getMyRefs() {
    this._store.dispatch(refsAction())
    this._store.select(refsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.refs = item.data
      }
    })
  }
  copyRefCode(code: string) {
    this.clipboard.copy(code)
    this.dialog.closeLatestModal()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Скопировано",
      showConfirmButton: false,
      timer: 1000
    });
  }

  protected readonly faQrcode = faQrcode;
  protected readonly faCoins = faCoins;
  protected readonly faChevronRight = faChevronRight;
  protected readonly faRightLeft = faRightLeft;
  protected readonly faMessage = faMessage;
  protected readonly faChartBar = faChartBar;
  protected readonly faClock = faClock;
  protected readonly faBook = faBook;
  protected readonly faBoxesPacking = faBoxesPacking;
  protected readonly faLanguage = faLanguage;
  protected readonly moment = moment;
  protected readonly faQuestionCircle = faQuestionCircle;
  protected readonly ImageHelper = ImageHelper;
  protected readonly parseInt = parseInt;
  protected readonly faArrowRight = faArrowRight;
}
