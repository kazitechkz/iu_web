import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, pageNumber: number|null = null, perPage: number|null = null): any[] {
    const keyValueArray = [];

    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        if (pageNumber && perPage && pageNumber >= 2) {
          let valKey = key,
              intKey = parseInt(key) + ((pageNumber*perPage)-perPage)
          key = intKey.toString()
          keyValueArray.push({ key, value: value[valKey] });
        } else {
          keyValueArray.push({ key, value: value[key] });
        }
      }
    }

    return keyValueArray;
  }

}
