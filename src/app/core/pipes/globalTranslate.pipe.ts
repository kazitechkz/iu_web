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
        if (target == 'question') {
          if (limit != null) {
            return this.truncate.transform(value.question_kk, limit)
          } else {
            return this.mathJax.transform(value.question_kk)
          }
        }
        if (target == 'context') {
          if (limit != null) {
            return this.truncate.transform(value.context_kk, limit)
          } else {
            return this.mathJax.transform(value.context_kk)
          }
        }
        if (target == 'position') {
          if (limit != null) {
            return this.truncate.transform(value.position_kk, limit)
          } else {
            return this.mathJax.transform(value.position_kk)
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
        if (target == 'prospect') {
          if (limit != null) {
            return this.truncate.transform(value.prospect_kk, limit)
          } else {
            return value.prospect_kk
          }
        }
        if (target == 'meaning') {
          if (limit != null) {
            return this.truncate.transform(value.meaning_kk, limit)
          } else {
            return value.meaning_kk
          }
        }
        if (target == 'activity') {
          if (limit != null) {
            return this.truncate.transform(value.activity_kk, limit)
          } else {
            return value.activity_kk
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
        if (target == 'question') {
          if (limit != null) {
            return this.truncate.transform(value.question_ru, limit)
          } else {
            return this.mathJax.transform(value.question_ru)
          }
        }
        if (target == 'context') {
          if (limit != null) {
            return this.truncate.transform(value.context_ru, limit)
          } else {
            return this.mathJax.transform(value.context_ru)
          }
        }
        if (target == 'position') {
          if (limit != null) {
            return this.truncate.transform(value.position_ru, limit)
          } else {
            return this.mathJax.transform(value.position_ru)
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
        if (target == 'prospect') {
          if (limit != null) {
            return this.truncate.transform(value.prospect_ru, limit)
          } else {
            return value.prospect_ru
          }
        }
        if (target == 'meaning') {
          if (limit != null) {
            return this.truncate.transform(value.meaning_ru, limit)
          } else {
            return value.meaning_ru
          }
        }
        if (target == 'activity') {
          if (limit != null) {
            return this.truncate.transform(value.activity_ru, limit)
          } else {
            return value.activity_ru
          }
        }
      }
    }
    return null;
  }

}
