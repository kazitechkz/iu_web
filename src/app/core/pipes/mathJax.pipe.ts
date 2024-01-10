import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathjaxTransform'
})
export class MathJaxPipe implements PipeTransform {
  transform(value: string|null|undefined, katex:boolean = false): string {
    if(value){
      value = value.replaceAll("<pre>", "$$")
      value = value.replaceAll("</pre>", "$$")
      value = value.replaceAll("<br>", "")
      value = value.replaceAll("</br>", "")
      if(katex){
        value = this.getStaticKatex(value);
      }
      value = value.replaceAll("width=\"100%\"", "style='max-width:100%; width:400px'")
    }
    else{
      value = "";
    }

    return value;
  }

  private  getStaticKatex(value:string){
    value = value.replaceAll("\\left{\\", "")
    value = value.replaceAll("\\left", "")
    value = value.replaceAll("{\\begin", "\\begin")
    value = value.replaceAll("{\\\\begin/g", "\\begin")
    value = value.replaceAll("\\right", "")
    return value;
  }
}
