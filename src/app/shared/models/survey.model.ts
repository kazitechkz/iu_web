export interface SurveyModel {
  id: number
  title: string
  is_subscription: boolean
  status: boolean,
  survey_questions: SurveyQuestionModel[]
}

export interface SurveyQuestionModel {
  id: number
  survey_id: number
  locale_id: number
  text: string
  answer_a: string | null
  answer_b: string | null
  answer_c: string | null
  answer_d: string | null
  answer_e: string | null
  answer_f: string | null
  own_answer: string | null
  order: number
}
