import {Image} from "./image.model";

export interface InformationAuthor{
  id:number;
  name:string;
  image_url:number|null;
  created_at:string|null;
  updated_at:string|null;
  file:Image|null;
}
