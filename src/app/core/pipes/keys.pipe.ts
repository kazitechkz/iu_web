import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any[] {
    const keyValueArray = [];

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keyValueArray.push({ key, value: value[key] });
      }
    }

    return keyValueArray;
  }

}
