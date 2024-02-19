export type ErrorTypes =
  | 'required'
  | 'email'
  | 'minlength'
  | 'invalidDate'
  | 'invalidYear';

export const ERROR_MESSAGES: { [key: string]: (...args: any) => string } = {
  required: (formControlName: string) => `Поле ${formControlName} объязательно для заполнения.`,
  email: () => `Невалидная почта.`,
  minlength: (formControlName, requirement) =>
    `${formControlName} должно содержать не менее ${requirement} символов.`,
  invalidDate: () => `Невалидная дата.`,
  invalidYear: () => `Date of Birth should be after year 1900.`,
};
export const ERROR_MESSAGES_KK: { [key: string]: (...args: any) => string } = {
  required: (formControlName: string) => `${formControlName} міндетті.`,
  email: () => `Дұрыс емес почта.`,
  minlength: (formControlName, requirement) =>
    `${formControlName} кем дегенде ${requirement} символ болу керек.`,
  invalidDate: () => `Дұрыс емес дата.`,
  invalidYear: () => `Date of Birth should be after year 1900.`,
};
