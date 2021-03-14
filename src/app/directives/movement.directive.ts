import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovement]'
})
export class MovementDirective {


  private last: MouseEvent | undefined;
  // private el: HTMLElement | undefined;

  private mouseDown: boolean = false;
  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    // this.movement(10 ,10)


  }


  @HostListener('mouseup')
  onMouseup() {
    this.mouseDown = false;
    console.log(this.mouseDown, "in mouseup ");
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    console.log(event, "in mousemove ");
    console.log(event.clientX, 'my x');
    console.log(this.mouseDown, 'in mousemove');

    if (this.mouseDown && this.last != undefined) {
      let x = event.clientX - this.last.clientX;
      let y = event.clientY - this.last.clientY;
      this.el.nativeElement.style.transform = `translate(${x}px , ${y}px )`
      this.last = event;
      console.log(this.last.clientX, 'last x');

    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    console.log(event, 'in mousedown');

    this.mouseDown = true;
    console.log(this.mouseDown, 'in mousedown');
    this.last = event;
  }

  private movement(x: number, y: number) {

    x = x + 15
    y = y + 10
    let z = x - y
    console.log(x);
    console.log(y);
    console.log(z);




    // this.el.nativeElement.style.transform = `translate(${x}px,${y}px)`
    this.el.nativeElement.style.transform = `translate(${z}px,${z}px)`
  }

}
