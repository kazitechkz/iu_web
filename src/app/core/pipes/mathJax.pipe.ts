import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathjaxTransform'
})
export class MathJaxPipe implements PipeTransform {
  transform(value: string, args?: any): string {

    value = value.replaceAll("<pre>", "$$")
    value = value.replaceAll("</pre>", "$$")
    value = value.replaceAll("\\left{\\", "")
    value = value.replaceAll("\\left", "")
    value = value.replaceAll("{\\begin", "\\begin")
    value = value.replaceAll("\\right", "")
    value = value.replaceAll("width=\"100%\"", "")
    return value;
  }
}
