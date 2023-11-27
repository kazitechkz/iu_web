export interface CreateTechSupportTicketRequest {
    type_id:number
    category_id:number
    title:string
    message:string
    files:number[]|null
}
