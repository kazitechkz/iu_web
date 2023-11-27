import {Image} from "./image.model";

export interface TechSupportFile{
    id:number
    message_id:number
    file_url:number
    file:Image
    created_at: Date
    updated_at: Date|null
}
