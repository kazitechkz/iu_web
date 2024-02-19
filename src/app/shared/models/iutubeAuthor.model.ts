import {Image} from "./image.model";

export interface IutubeAuthor{
  id:number
  image_url:number
  name:string
  description:string|null
  instagram_url:string|null
  vk_url:string|null
  linkedin_url:string|null
  facebook_url:string|null
  tiktok_url:string|null
  phone:string|null
  email:string|null
  is_active:boolean
  created_at:Date|null
  updated_at:Date|null
  file:Image|null
}
