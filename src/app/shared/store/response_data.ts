export interface ResponseData <T>{
  status: boolean
  message: string | null
  errors: Record<string, string[]> | null
  data: T |null
}
