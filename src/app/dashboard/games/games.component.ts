import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  //@ts-ignore
  @ViewChild('mobileElement') mobileElement: ElementRef
  //@ts-ignore
  @ViewChild('smElement') smElement: ElementRef
  //@ts-ignore
  @ViewChild('mdElement') mdElement: ElementRef
  //@ts-ignore
  @ViewChild('lgElement') lgElement: ElementRef
  //@ts-ignore
  @ViewChild('xlElement') xlElement: ElementRef
  //@ts-ignore
  @ViewChild('xxlElement') xxlElement: ElementRef

  getWidth(width: number) {
    return width * 0.85;
  }
}
