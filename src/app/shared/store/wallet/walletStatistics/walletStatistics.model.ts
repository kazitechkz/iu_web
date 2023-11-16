import {Transaction, TransactionWallet} from "../../../models/transaction.model";

export interface WalletStatisticsModel {
  date: string
  week_transaction_stats: TransactionDateStats[]
  week_transaction: Transaction[]
}


export interface TransactionDateStats {
  [key:string]: TransactionTypeStats
}

export interface TransactionTypeStats{
  deposit:OperationAmount|null,
  withdraw:OperationAmount|null,
}

export interface OperationAmount {
  amount: number
}
