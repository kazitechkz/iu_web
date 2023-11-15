import {OrdinaryUser} from "./user.model";

export interface Wallet {
  id: number
  holder_type: string
  holder_id: number
  name: string
  slug: string
  uuid: string
  description: any
  meta: any[]
  balance: string
  decimal_places: number
  created_at: Date
  updated_at: Date|null
  holder:OrdinaryUser|null
}
