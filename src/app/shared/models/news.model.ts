import {Image} from "./image.model";
import {Locale} from "./locale.model";
import {OrdinaryUser} from "./user.model";

export interface News{
  id: number
  title: string
  subtitle: string
  image_url: number
  locale_id: number
  description: string
  is_active: boolean
  is_important: boolean
  published_at: string
  published_by: number
  deleted_at: Date|null
  created_at: Date
  updated_at: Date|null
  poster:Image|null
  image:Image|null
  locale:Locale|null
  user:OrdinaryUser|null
}
