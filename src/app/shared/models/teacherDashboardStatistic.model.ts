import {StatByWeek} from "./untStat.model";
import {AttemptModel} from "./attempt";
import {Pagination} from "../store/pagination";

export interface TeacherDashboardStatisticModel {
  single_tests: number
  classrooms: number
  users: number
  unt_tests: number
}

export interface TeacherStatsBySubject {
  [name: string]: {
    percentage: number
    points: number
    max_points: number
    subject: string
    created_at: string
  }
}
export interface TeacherStatsByUNT {
  [name: string]: {
    percentage: number
    points: number
    max_points: number
    created_at: string
  }
}

export interface TeacherStatsByUser {
  attempt_count: number
  attempt_count_unfinished: number
  attempt_question_count: number
  average: number
  stat_by_week: StatByWeek
  results: Pagination<AttemptModel[]>
}
