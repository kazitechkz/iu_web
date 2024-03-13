import {SubCategory, SubCategoryModel} from "../../../models/subCategory.model";

export interface PassSubStepModel {
  subjects: SubjectSubCategoryModel[],
  count: number,
  average: number|null,
  min: number|null,
  max: number|null,
  question_quantity: number|null
}

export interface SubjectStatModel{
  sub_category: SubCategory;
  right: number;
  not_right: number;
}

export interface SubjectSubCategoryModel {
  [key: string]: {
    [key: string]: SubjectStatModel|null;
  };
}
