import {inject, Pipe, PipeTransform} from '@angular/core';
import {TruncatePipe} from "./truncate.pipe";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {MathJaxPipe} from "./mathJax.pipe";

@Pipe({
  name: 'globalTranslate'
})
export class GlobalTranslatePipe implements PipeTransform {
  private truncate = inject(TruncatePipe)
  private mathJax = inject(MathJaxPipe)

  transform(value: any, target: string, currentLang: string | null, limit: number | null = null) {
    if (currentLang != null && value != null) {
      if (currentLang == 'kk') {
        if (target == 'title') {
          if (limit != null) {
            return this.truncate.transform(value.title_kk, limit)
          } else {
            return this.mathJax.transform(value.title_kk)
          }
        }
        if (target == 'description') {
          if (limit != null) {
            return this.truncate.transform(value.description_kk, limit)
          } else {
            return this.mathJax.transform(value.description_kk)
          }
        }
        if (target == 'rule') {
          if (limit != null) {
            return this.truncate.transform(value.rule_kk, limit)
          } else {
            return this.mathJax.transform(value.rule_kk)
          }
        }
        if (target == 'text') {
          if (limit != null) {
            return this.truncate.transform(value.text_kk, limit)
          } else {
            return this.mathJax.transform(value.text_kk)
          }
        }
        if (target == 'progress') {
          if (limit != null) {
            return this.truncate.transform(value.progress_kk, limit)
          } else {
            return value.progress_kk
          }
        }
      }
      if (currentLang == 'ru') {
        if (target == 'title') {
          if (limit != null) {
            return this.truncate.transform(value.title_ru, limit)
          } else {
            return this.mathJax.transform(value.title_ru)
          }
        }
        if (target == 'description') {
          if (limit != null) {
            return this.truncate.transform(value.description_ru, limit)
          } else {
            return this.mathJax.transform(value.description_ru)
          }
        }
        if (target == 'rule') {
          if (limit != null) {
            return this.truncate.transform(value.rule_ru, limit)
          } else {
            return this.mathJax.transform(value.rule_ru)
          }
        }
        if (target == 'text') {
          if (limit != null) {
            return this.truncate.transform(value.text_ru, limit)
          } else {
            return this.mathJax.transform(value.text_ru)
          }
        }
        if (target == 'progress') {
          if (limit != null) {
            return this.truncate.transform(value.progress_ru, limit)
          } else {
            return value.progress_ru
          }
        }
      }
    }
    return null;
  }

}
