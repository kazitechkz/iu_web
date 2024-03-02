import {Component, DestroyRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as moment from "moment";
import {IDatePickerDirectiveConfig} from "ng2-date-picker/lib/date-picker/date-picker-directive-config.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {Store} from "@ngrx/store";
import {walletStatisticsAction} from "../../../shared/store/wallet/walletStatistics/walletStatistics.action";
import {walletStatisticsSelector} from "../../../shared/store/wallet/walletStatistics/walletStatistics.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {WalletStatisticsModel} from "../../../shared/store/wallet/walletStatistics/walletStatistics.model";
import {faCheckCircle, faEye, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {WalletStatisticsRequest} from "../../../shared/store/wallet/walletStatistics/walletStatistics.request";


@Component({
  selector: 'app-wallet-statistics',
  templateUrl: './wallet-statistics.component.html',
  styleUrls: ['./wallet-statistics.component.scss']
})
export class WalletStatisticsComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  //Injection
  //Data
  //@ts-ignore
  wallet:WalletStatisticsModel|null;
  //ts-ignore
  errors:Record<string, string[]> | null = null;
  from_date:any;
  to_date:any;
  from_config = {
    format:'DD/MM/YYYY',
    min:moment(Date.now()).add(-2,"year").format("DD/MM/YYYY"),
    max:moment(Date.now()).add(-1,"day").format("DD/MM/YYYY")
  } as IDatePickerDirectiveConfig;
  to_config = {
    format:'DD/MM/YYYY',
    min:moment(Date.now()).add(-1,"year").format("DD/MM/YYYY"),
    max:moment(Date.now()).add(1,"day").format("DD/MM/YYYY"),
  } as IDatePickerDirectiveConfig;
  //ts-ignore
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.from_date = moment(Date.now()).add(-7,"days").format("DD/MM/YYYY");
    this.to_date = moment(Date.now()).format("DD/MM/YYYY");
    this.getWalletStatistics();
  }

  public changeFromDate($event:string){
    this.from_date = $event;
    let from = moment(this.from_date,"DD/MM/YYYY");
    if(this.to_date){
      let to = moment(this.to_date,"DD/MM/YYYY");
      if(from > to){
        this.to_date = "";
      }
    }
    this.getWalletStatistics();
  }
  public changeToDate($event:string){
    this.to_date = $event;
    let to = moment(this.to_date,"DD/MM/YYYY");
    if(this.to_date){
      let from = moment(this.from_date,"DD/MM/YYYY");
      if(from > to){
        this.from_date = "";
      }
    }
    this.getWalletStatistics();
  }

  getWalletStatistics(){
    if(this.from_date && this.to_date){
      this.wallet = null;
      let request = {to_date:this.to_date, from_date:this.from_date} as WalletStatisticsRequest;
      this._store.dispatch(walletStatisticsAction({requestDate:request}));
      this._store.select(walletStatisticsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.wallet = item.data;
          this.barChartData.labels = [];
          this.barChartData.datasets[0].data = [];
          this.barChartData.datasets[1].data = [];
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
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Пополнение',
        backgroundColor:"#7a5585"
      },
      {
        data: [],
        label: 'Расходы',
        backgroundColor:"#ff914d"
      },
    ],
  };


  protected readonly RoutesName = RoutesName;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faWindowClose = faWindowClose;
  protected readonly moment = moment;
  protected readonly faEye = faEye;
}
