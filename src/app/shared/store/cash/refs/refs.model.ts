import {OrdinaryUser} from "../../../models/user.model";

export interface RefsModel {
  code: string
  referrals: ReferralModel[] | null
  balance: number
}

export interface ReferralModel {
  id: number
  referrer_id: number
  referee_id: number
  created_at: string
  referral: OrdinaryUser | null
  orders: OrderModel[] | null
}

export interface OrderModel {
  id: number
  user_id: number
  order_id: number
  price: string
}
