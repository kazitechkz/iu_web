import {Image} from "./image.model";
import {CategoryModel} from "./category.model";

export interface SubCategoryModel {
  category_id: number
  title_kk: string
  title_ru: string
  image_url: Image | null
  category:CategoryModel|null
}
