export interface Plan {
  id: number
  tag: string
  name: string
  description: string
  is_active: boolean
  price: number
  signup_fee: number
  currency: string
  trial_period: number
  trial_interval: string
  trial_mode: string
  grace_period: number
  grace_interval: string
  invoice_period: number
  invoice_interval: string
  tier: number
  created_at: Date
  updated_at: Date|null
  deleted_at: Date|null
}
