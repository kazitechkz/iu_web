import {UserModel} from "../../../models/user.model";

export interface OrderModel {
  id: number
  user_id: number
  order_id: string
  plans: number[]
  price: string
  status: number
  description: string
  subjects: number[]
  created_at: string
  updated_at: string
}
export interface MyOrderModel extends OrderModel {
  user: UserModel
}
