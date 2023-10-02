import {SubCategoryModel} from "./subCategory.model";

export interface CategoryModel {
  subjectId: number
  titleKk: string
  titleRu: string
  subCategories: SubCategoryModel[] | null
}
