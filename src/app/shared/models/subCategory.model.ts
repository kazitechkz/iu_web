import {Image} from "./image.model";
import {CategoryModel} from "./category.model";

export interface SubCategoryModel {
  categoryId: number
  titleKk: string
  titleRu: string
  imageUrl: Image | null
  category:CategoryModel|null
}
