export interface GetCategoryQuestionCountModel{
  [key: number]: GetCategoryQuestionCountModelOptions
}

export interface GetCategoryQuestionCountModelOptions{
  single_count:number
  context_count:number
  multiple_count:number
}
