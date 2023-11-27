import {TechSupportTicket} from "../../../models/techSupportTicket.model";
import {Pagination} from "../../pagination";
import {TechSupportMessage} from "../../../models/techSupportMessage.model";

export interface GetTechSupportTicketDetailModel{
    ticket:TechSupportTicket,
    messages:Pagination<TechSupportMessage[]>
}
