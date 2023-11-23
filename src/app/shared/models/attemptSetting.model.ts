import {Locale} from "./locale.model";
import {OrdinaryUser, OrdinaryUserForExam} from "./user.model";
import {Subject} from "./subject.model";
import {ClassroomsGroupModel} from "./classroomsGroup.model";
import {AttemptSettingResult} from "./attemptSettingResult.model";

export interface AttemptSetting {
  id: number
  subject_id: number
  promo_code: string
  class_id: number | null
  users: string | OrdinaryUserForExam | null
  attempt_users: string | OrdinaryUserForExam | null
  owner_id: number | null
  settings: string
  locale_id: number
  time: number
  hidden_fields: string | null
  created_at: Date
  updated_at: Date | null
  locale: Locale | null
  owner: OrdinaryUser | null
  subject: Subject | null
  attempt_settings_results: AttemptSettingResult[] | null
  classroom_group: ClassroomsGroupModel | null
}

interface AttemptSettingsQuestionTypes {
  s_questions?: number;
  c_questions?: number;
  m_questions?: number;
  // You might have more properties here if needed
}

interface AttemptSettingsSubCategoryIDS {
  [subCategoryId: number]: AttemptSettingsQuestionTypes;
}

export interface AttemptSettingsData {
  [categoryId: number]: {
    sub_category_ids?: AttemptSettingsSubCategoryIDS;
    s_questions?: number;
    c_questions?: number;
    m_questions?: number;
  };
}

export interface Basket {
  singleQ: number;
  contextQ: number;
  multiQ: number;
  data: AttemptSettingsData;
}
