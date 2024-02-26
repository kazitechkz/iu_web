import {EntityState} from "@ngrx/entity";
import {Image} from "./image.model";
import {Gender} from "./gender.model";
import {AttemptSettingResult, AttemptSettingUNTResult} from "./attemptSettingResult.model";
import {ClassroomModel} from "./classroom.model";
import {Plan} from "./plan.model";

export interface Users {
  name: string
  email: string
  phone: string
  username: string
  password: string
}

export interface UserModel extends EntityState<Users> {

}

export interface Me {
  id: number
  name: string
  email: string
  phone: string
  role: string
  balance: number
  subscription: Plan[]
  file: Image | null
  gender: Gender | null
  birth_date: Date | null
  isKundelik: boolean
  parent_phone: string | null
  parent_name: string | null
}

export interface OrdinaryUser {
  id: number
  name: string
  email: string
  phone: string
  file: Image | null
  gender: Gender | null
  birth_date: Date | null
}

export interface OrdinaryUserForExam {
  id: number
  name: string
  email: string
  phone: string
  file: Image | null
  gender: Gender | null
  birth_date: Date | null
  attempt_settings_result: AttemptSettingResult
  attempt_settings_unt_result: AttemptSettingUNTResult
}

export interface TeacherOwnStudent {
  id: number
  name: string
  email: string
  phone: string
  file: Image | null
  gender: Gender | null
  birth_date: Date | null
  class_rooms: ClassroomModel[]
}
