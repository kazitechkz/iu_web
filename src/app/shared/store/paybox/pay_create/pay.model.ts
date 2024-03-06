export interface PayModel {
  pg_error_description: string|null;
  pg_status: string,
  pg_payment_id: string,
  pg_redirect_url: string,
  pg_redirect_url_type: string,
  pg_salt: string,
  pg_sig: string
}
