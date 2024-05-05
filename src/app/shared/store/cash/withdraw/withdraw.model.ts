export interface WithdrawModel {
  id: number
  user_id: number
  cash_id: number
  status: boolean
  created_at: string
  updated_at: string
  cash: CashModel
}


export interface CashModel {
  id: number
  user_id: number
  balance: number
  created_at: string
  updated_at: string
}
