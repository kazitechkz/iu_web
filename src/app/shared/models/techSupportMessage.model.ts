import {TechSupportTicket} from "./techSupportTicket.model";
import {OrdinaryUser} from "./user.model";
import {TechSupportFile} from "./techSupportFile.model";

export interface TechSupportMessage{
    id:number
    ticket_id:number
    user_id:number
    message:string
    tech_support_ticket:TechSupportTicket|null
    user:OrdinaryUser|null
    tech_support_files:TechSupportFile[]|null
    created_at: Date
    updated_at: Date|null
}
