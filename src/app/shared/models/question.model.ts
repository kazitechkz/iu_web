export interface Question {
  id:              number;
  text:            string;
  answer_a:        string;
  answer_b:        string;
  answer_c:        string;
  answer_d:        string;
  answer_e:        string;
  answer_f:        string;
  answer_g:        string;
  answer_h:        string;
  correct_answers: string|null;
  prompt:          string;
  explanation:     string;
  created_at:      string;
  updated_at:      string;
  deleted_at:      null;
  subject_id:      number;
  locale_id:       number;
  type_id:         number;
  group_id:        number;
  context_id:      number;
  sub_category_id: null;
  context:         Context;
}

export interface Context {
  id:         number;
  subject_id: number;
  context:    string;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}