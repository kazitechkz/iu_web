import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getYoutubeID'
})
export class GetYoutubeIDPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): string | undefined {
    if (value) {
      return value.split('v=')[1].split('&')[0];
    } else {
      return ;
    }
  }
}
