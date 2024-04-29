export interface SurveyRequest {
  survey_id: number
  questions: SurveyQuestionAnswer[]
}

export interface SurveyQuestionAnswer {
  survey_question_id: number
  answer: string | null
  wishes: string | null
}
