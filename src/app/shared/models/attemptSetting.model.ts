import {Locale} from "./locale.model";
import {OrdinaryUser} from "./user.model";
import {Subject} from "./subject.model";
import {AttemptSettingResult} from "./AttemptSettingResult.model";
import {ClassroomsGroupModel} from "./classroomsGroup.model";

export interface AttemptSetting{
    id:number
    subject_id:number
    promo_code:string
    class_id:number|null
    users:string|null
    owner_id:number|null
    settings:string
    locale_id:number
    time:number
    hidden_fields:string|null
    created_at:Date
    updated_at:Date|null
    locale:Locale|null
    owner:OrdinaryUser|null
    subject:Subject|null
    attempt_settings_results:AttemptSettingResult[]|null
    classroom_group:ClassroomsGroupModel|null
}
