export interface UntStatModel {
  attempt_count: number
  attempt_count_unfinished: number
  attempt_question_count: number
  average: number
  stat_by_week: StatByWeek
}

export interface StatByWeek {
  [key: string]: string

}
