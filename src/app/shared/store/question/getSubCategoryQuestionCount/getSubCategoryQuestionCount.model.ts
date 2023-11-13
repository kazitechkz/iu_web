export interface GetSubCategoryQuestionCountModel {
  [key: number]: GetSubCategoryQuestionCountModelOptions
}

export interface GetSubCategoryQuestionCountModelOptions{
  single_count:number
  context_count:number
  multiple_count:number
}
