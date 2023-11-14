import {OrdinaryUser} from "./user.model";

export interface Transaction {
  id: number
  payable_type: string
  payable_id: number
  wallet_id: number
  type: string
  amount: number
  confirmed: boolean
  meta: any
  uuid: string
  created_at: string
  updated_at: string
  wallet: TransactionWallet|null
  payable: OrdinaryUser|null
}

export interface TransactionWallet {
  id: number
  holder_id: number
  uuid: string
  holder_type: string
  holder: OrdinaryUser
}

