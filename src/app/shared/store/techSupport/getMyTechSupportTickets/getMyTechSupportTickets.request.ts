export interface GetMyTechSupportTicketsRequest{
    is_closed:boolean|null
    is_resolved:boolean|null
    is_answered:boolean|null
    type_id:number|null
    category_id:number|null
    search:string|null
    page:number
}
