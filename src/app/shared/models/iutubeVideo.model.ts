import {IutubeAuthor} from "./iutubeAuthor.model";
import {Image} from "./image.model";
import {Locale} from "./locale.model";
import {Steps} from "./step.model";
import {SubStepModel} from "./subStep.model";
import {Subject} from "./subject.model";

export interface IutubeVideo{
  id:number
  alias:string
  title:string
  description:string|null
  image_url:number|null
  author_id:number
  locale_id:number
  subject_id:number
  step_id:number|null
  sub_step_id:number|null
  video_url:string
  price:number
  is_public:boolean
  is_recommended:boolean
  created_at:Date|null
  updated_at:Date|null
  iutube_author:IutubeAuthor|null
  file:Image|null
  locale:Locale|null
  subject:Subject|null
  step:Steps|null
  sub_step:SubStepModel|null
}
