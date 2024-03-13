import {Component, DestroyRef, inject, Input, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {Wallet} from "../../../shared/models/wallet.model";
import {walletRatingAction} from "../../../shared/store/wallet/walletRating/walletRating.action";
import {walletRatingSelector} from "../../../shared/store/wallet/walletRating/walletRating.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment/moment";

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
  public meID: number|null = null
  endDate: moment.Moment = moment('20240630');
  countdown: string = '';
  ngOnInit(): void {
    this.getMe()
    this.getAllWallets()
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
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
  updateCountdown() {
    // Получаем текущую дату и время
    const currentDate = moment();

    // Рассчитываем разницу между текущей и целевой датой
    const duration = moment.duration(this.endDate.diff(currentDate));

    // Получаем оставшееся количество дней, часов, минут и секунд
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    // Форматируем вывод обратного отсчета
    if (seconds) {
      this.countdown = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    } else {
      this.countdown = ''
    }

  }
  getBgColor(userID: number|null): boolean {
    if (userID && this.meID) {
      return userID == this.meID;
    } else {return false}
  }
  getPrize(indexKey: number) {
    let prize = ''
    switch (true) {
      case (indexKey == 1):
        prize = 'Iphone 15 Pro Max'
        break
      case (indexKey == 2):
        prize = 'Apple Watch SE'
        break
      case (indexKey == 3):
        prize = 'Airpods 3 Pro'
        break
      case (indexKey >= 4 && indexKey <= 10):
        prize = '1000 KZT'
        break
      case (indexKey > 10 && indexKey < 20):
        prize = '500 KZT'
        break
      default:
        prize = ''
        break
    }
    return prize
  }
  pageChanged($event:number){
    this.requestData.page = $event;
    this.getAllWallets();
  }

  getMe() {
    let me = localStorage.getItem('userinfo')
    if (me) {
      this.meID = (JSON.parse(me)).id
    }
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly console = console;
  protected readonly parseInt = parseInt;
}
