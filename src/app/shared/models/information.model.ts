import {InformationAuthor} from "./informationAuthor.model";
import {InformationCategory} from "./informationCategory.model";
import {Image} from "./image.model";

export interface Information{
  id:number;
  alias:string;
  author_id:number;
  category_id:number;
  image_url:number|null;
  seo_title:string;
  seo_description:string;
  seo_keywords:string;
  title_ru:string;
  title_kk:string;
  description_ru:string;
  description_kk:string;
  is_active:boolean;
  is_main:boolean;
  published_at:string;
  created_at:string|null;
  updated_at:string|null;
  information_author:InformationAuthor|null;
  information_category:InformationCategory|null;
  file:Image|null;
}
