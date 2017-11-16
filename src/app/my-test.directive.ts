import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyTest]'
})
export class MyTestDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  handleKey(ev: Event) {

  }

}
