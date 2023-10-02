import {Image} from "./image.model";

export interface SubCategoryModel {
  categoryId: number
  titleKk: string
  titleRu: string
  imageUrl: Image | null
}
