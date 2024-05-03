import {Pagination} from "../../pagination";
import {Wallet} from "../../../models/wallet.model";
import {OrdinaryUser, UserModel} from "../../../models/user.model";

export interface RefsModel {
  code: string
  referrals: ReferralModel[] | null
}

export interface ReferralModel {
  id: number
  referrer_id: number
  referee_id: number
  created_at: string
  referral: OrdinaryUser | null
}
