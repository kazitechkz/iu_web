import { Injectable } from '@angular/core';
import {ERROR_MESSAGES, ERROR_MESSAGES_KK, ErrorTypes} from "../../core/constants/error-messages";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public locale:string = 'kk'
  constructor() {
    // @ts-ignore
    this.locale = localStorage.getItem('lang')
  }

  getErrorValidationMessage(
    formControlName: string,
    errors: [string, any][]
  ): string {
    switch (true) {
      case this.checkErrorType(errors, 'required'):
        if (this.locale == 'kk') {
          return ERROR_MESSAGES_KK['required'](formControlName);
        } else {
          return ERROR_MESSAGES['required'](formControlName);
        }
      case this.checkErrorType(errors, 'invalidYear'):
        if (this.locale == 'kk') {
          return ERROR_MESSAGES_KK['invalidYear']();
        } else {
          return ERROR_MESSAGES['invalidYear']();
        }
      case this.checkErrorType(errors, 'invalidDate'):
        if (this.locale == 'kk') {
          return ERROR_MESSAGES_KK['invalidDate']();
        } else {
          return ERROR_MESSAGES['invalidDate']();
        }
      case this.checkErrorType(errors, 'email'):
        if (this.locale == 'kk') {
          return ERROR_MESSAGES_KK['email']();
        } else {
          return ERROR_MESSAGES['email']();
        }
      case this.checkErrorType(errors, 'minlength'):
        const minRequirement = this.getErrorMessage(
          errors,
          'minlength'
        )?.requiredLength;
        if (this.locale == 'kk') {
          return ERROR_MESSAGES_KK['minlength'](formControlName, minRequirement);
        } else {
          return ERROR_MESSAGES['minlength'](formControlName, minRequirement);
        }
      default:
        return '';
    }
  }

  checkErrorType(errors: [string, any][], key: ErrorTypes) {
    return errors.some(([errorKey, value]) => errorKey === key);
  }

  getErrorMessage(errors: [string, any][], key: ErrorTypes) {
    return errors.find(([k, v]) => k === key)?.[1];
  }
}
