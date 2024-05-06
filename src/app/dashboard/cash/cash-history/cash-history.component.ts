import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgxSmartModalService} from "ngx-smart-modal";
import {Store} from "@ngrx/store";
import {Me} from "../../../shared/models/user.model";
import {Clipboard} from "@angular/cdk/clipboard";
import * as moment from "moment";
import Swal from "sweetalert2";
import {faHandHoldingDollar} from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar";
import {faArrowRight, faChevronRight, faPhone, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import {faDollarSign} from "@fortawesome/free-solid-svg-icons/faDollarSign";
import {RoutesName} from "../../../core/constants/routes.constants";
import {requestWithdrawAction, withdrawAction} from "../../../shared/store/cash/withdraw/withdraw.action";
import {requestWithdrawSelector, withdrawSelector} from "../../../shared/store/cash/withdraw/withdrawselector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {WithdrawModel} from "../../../shared/store/cash/withdraw/withdraw.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createMask} from "@ngneat/input-mask";
import {WithdrawRequest} from "../../../shared/store/cash/withdraw/withdraw.request";
import {accountAction} from "../../../shared/store/user/account/account.action";
import {getAccountState} from "../../../shared/store/user/account/account.selector";
@Component({
  selector: 'app-cash-history',
  templateUrl: './cash-history.component.html',
  styleUrls: ['./cash-history.component.scss']
})
export class CashHistoryComponent implements OnInit {
//Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  dialog = inject(NgxSmartModalService)
  clipboard = inject(Clipboard)
  //Injection
  //Data
  histories: WithdrawModel[] = []
  phone_mask = createMask('+7 999 999 9999');
  userMe: Me | null = null;
  requestWithdrawForm: FormGroup = new FormGroup({
    phone: new FormControl(null, Validators.required)
  });
  //Data
  ngOnInit(): void {
    this.getHistories()
    this.getMe()
  }
  getMe() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.userMe = item.data
        console.log(this.userMe)
        this.requestWithdrawForm.patchValue({
          phone: this.userMe.phone
        })
      }
    })
  }
  getHistories() {
    this._store.dispatch(withdrawAction())
    this._store.select(withdrawSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.histories = item.data
      }
    })
  }

  requestWithdraw() {
    if (this.userMe?.cash == 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Недостаточно средств",
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      if (this.requestWithdrawForm.valid) {
        let phone = this.requestWithdrawForm.getRawValue() as WithdrawRequest
        this._store.dispatch(requestWithdrawAction({req: phone}))
        this._store.select(requestWithdrawSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
          if (item.data == true && item.data != null) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Скоро с вами свяжутся наш менеджер",
              showConfirmButton: false,
              timer: 2000
            });
            this.getHistories()
          }
        })
        this.dialog.closeLatestModal()
      }
    }
  }

  checkPhone() {
    if (!this.userMe?.phone) {
      this.dialog.getModal('getPhone').open()
    } else {
      this.requestWithdraw()
    }
  }

  getStatusText(text: string, status: boolean) {
    if (status) {
      return '<span class="text-green-400">' + text +'</span>';
    } else {
      return '<span class="text-yellow-400">' + text +'</span>';
    }
  }

  getBalanceText(text: number, status: boolean) {
    if (status) {
      return '<span class="text-red-400">' + '-' + text +'</span>';
    } else {
      return '<span class="text-yellow-400">' + text +'</span>';
    }
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

  protected readonly faHandHoldingDollar = faHandHoldingDollar;
  protected readonly faChevronRight = faChevronRight;
  protected readonly faQuestionCircle = faQuestionCircle;
  protected readonly faDollarSign = faDollarSign;
  protected readonly RoutesName = RoutesName;
  protected readonly ImageHelper = ImageHelper;
  protected readonly parseInt = parseInt;
  protected readonly faArrowRight = faArrowRight;
  protected readonly moment = moment;
  protected readonly faClockRotateLeft = faClockRotateLeft;
  protected readonly faPhone = faPhone;
}
