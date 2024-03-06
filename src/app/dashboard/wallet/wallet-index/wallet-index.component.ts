import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  faBook,
  faBoxesPacking, faChartBar,
  faChevronRight,
  faClock,
  faCoins,
  faLanguage, faMessage,
  faQrcode, faRightLeft, faUsersLine
} from "@fortawesome/free-solid-svg-icons";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {Store} from "@ngrx/store";
import {Subject} from "../../../shared/models/subject.model";
import {CategoryModel} from "../../../shared/models/category.model";
import {WalletIndexModel} from "../../../shared/store/wallet/walletIndex/walletIndex.model";
import {getMySubjectsAction} from "../../../shared/store/subject/getMySubjects/getMySubjects.action";
import {getMySubjectsSelector} from "../../../shared/store/subject/getMySubjects/getMySubjects.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {walletIndexAction} from "../../../shared/store/wallet/walletIndex/walletIndex.action";
import {walletIndexSelector} from "../../../shared/store/wallet/walletIndex/walletIndex.selector";
import * as moment from "moment";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";

@Component({
  selector: 'app-wallet-index',
  templateUrl: './wallet-index.component.html',
  styleUrls: ['./wallet-index.component.scss']
})
export class WalletIndexComponent implements OnInit,OnDestroy{

  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  //Injection
  //Data
  //@ts-ignore
  wallet:WalletIndexModel;
  walletRoutes = [
    // {title:"PAY_WITH_QR",icon:faQrcode,route:StrHelper.getRouteName(RoutesName.walletIndex)},
    // {title:"PAY_WITH_WALLET",icon:faCoins,route:StrHelper.getRouteName(RoutesName.walletDeposit)},
    // {title:"TRANSFER",icon:faRightLeft,route:StrHelper.getRouteName(RoutesName.walletTransfer)},
    {title:"DEPOSIT_WITHDRAWS_ANALYTICS",icon:faChartBar,route:StrHelper.getRouteName(RoutesName.walletStatistics)},
    {title:"WALLET_RATING",icon:faUsersLine,route:StrHelper.getRouteName(RoutesName.walletRating)},
  ]
  //Data
  ngOnInit(): void {
    this.getWalletInfo();
  }
  ngOnDestroy(): void {
  }

  getWalletInfo(){
    this._store.dispatch(walletIndexAction());
    this._store.select(walletIndexSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.wallet = item.data;
        if(item.data.week_transaction_stats){
          // @ts-ignore
          this.barChartData.labels = Object.keys(item.data.week_transaction_stats);
          for (let date of Object.keys(item.data.week_transaction_stats)){
            // @ts-ignore
            if(item.data.week_transaction_stats[date].deposit){
              // @ts-ignore
              this.barChartData.datasets[0].data.push(item.data.week_transaction_stats[date].deposit.amount)
            }
            else{
              // @ts-ignore
              this.barChartData.datasets[0].data.push(0)
            }
            // @ts-ignore
            if(item.data.week_transaction_stats[date].withdraw){
              // @ts-ignore
              this.barChartData.datasets[1].data.push(item.data.week_transaction_stats[date].withdraw.amount)
            }
            else{
              // @ts-ignore
              this.barChartData.datasets[1].data.push(0)
            }
          }
        }
      }
    })
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [

    ],
    datasets: [
      {
        data: [],
        label: 'Пополнение',
        backgroundColor:"#7a5585",
      },
      {
        data: [],
        label: 'Расходы',
        backgroundColor:"#ff914d",
      },
    ],
  };

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
}
