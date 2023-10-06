import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathjaxTransform'
})
export class MathJaxPipe implements PipeTransform {
  transform(value: string, args?: any): string {

    value = value.replaceAll("<pre>", "$$")
    value = value.replaceAll("</pre>", "$$")
    return value;
  }
}
