import {inject, Pipe, PipeTransform} from '@angular/core';
import {TruncatePipe} from "./truncate.pipe";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Pipe({
  name: 'globalTranslate'
})
export class GlobalTranslatePipe implements PipeTransform {
  private truncate = inject(TruncatePipe)
  private localeService = inject(GlobalTranslateService)

  transform(value: any, target: string, currentLang: string | null, limit: number | null = null): unknown {
    if (currentLang != null && value != null) {
      if (currentLang == 'kk') {
        if (target == 'title') {
          if (limit != null) {
            return this.truncate.transform(value.title_kk, limit)
          } else {
            return value.title_kk
          }
        }
        if (target == 'description') {
          if (limit != null) {
            return this.truncate.transform(value.description_kk, limit)
          } else {
            return value.description_kk
          }
        }
        if (target == 'text') {
          if (limit != null) {
            return this.truncate.transform(value.text_kk, limit)
          } else {
            return value.text_kk
          }
        }
      }
      if (currentLang == 'ru') {
        if (target == 'title') {
          if (limit != null) {
            return this.truncate.transform(value.title_ru, limit)
          } else {
            return value.title_ru
          }
        }
        if (target == 'description') {
          if (limit != null) {
            return this.truncate.transform(value.description_ru, limit)
          } else {
            return value.description_ru
          }
        }
        if (target == 'text') {
          if (limit != null) {
            return this.truncate.transform(value.text_ru, limit)
          } else {
            return value.text_ru
          }
        }
      }
    }
    return null;
  }

}
