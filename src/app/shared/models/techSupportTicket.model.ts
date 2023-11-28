import {TechSupportCategory} from "./techSupportCategory.model";
import {TechSupportType} from "./techSupportType.model";
import {OrdinaryUser} from "./user.model";

export interface TechSupportTicket{
    id:number
    type_id:number
    category_id:number
    title:string
    user_id:number
    is_closed:boolean
    is_resolved:boolean
    is_answered:boolean
    tech_support_messages_count:number|null
    tech_support_category:TechSupportCategory|null
    tech_support_type:TechSupportType|null
    user:OrdinaryUser|null
    created_at: Date
    updated_at: Date|null
}
