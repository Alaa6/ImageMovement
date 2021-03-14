import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-container',
  // providers: [Scene],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {


  @ViewChild('imgRef') imgRef: ElementRef | undefined;


  offsetTop = 0;
  offsetLeft = 0;
  fileName: string = '';
  profileUrl: Observable<string | null> | undefined;
  
  // private scene: Scene;
  private last: MouseEvent | undefined;
  private el: HTMLElement | undefined;

  private mouseDown: boolean = false;


  constructor(

    private imageService: ImageService,
    //  scene: Scene ,
  ) {
    // this.el = elementRef.nativeElement;
    // this.scene = scene;

  }

  ngOnInit(): void {
  }


  onFileSelected(event: any) {
    if (event.target.files.length > 0) {

      this.profileUrl = this.imageService.uploadFile(event);
      console.log(this.profileUrl);

    }
    else {
      console.log('test');

    }
  }


  move(event: any, el?: any) {



    if (this.imgRef != undefined) {
      const { x, y } = this.imgRef ? this.imgRef.nativeElement.getBoundingClientRect() : null
      this.offsetLeft = this.offsetLeft + 10
      this.offsetTop = this.offsetTop + 10

      this.imgRef.nativeElement.style.transform = `translate(${this.offsetLeft}px,${this.offsetTop}px)`

      console.log(x, "testx");
      console.log(y, "testy");
      console.log(this.imgRef.nativeElement.offsetLeft);
      console.log(this.imgRef.nativeElement.offsetTop);
      console.log(this.imgRef.nativeElement.keyCode);


    }


    // var rect = el.getBoundingClientRect();
    // console.log(rect);

  }
  getPosition(event: any) {
    let offsetTop = 0;
    let offsetLeft = 0;
    let el = event.srcElement;
    while (el) {
      offsetLeft += el.offsetLeft;
      offsetTop += el.offsetTop;
      el = el.parentElement;
    }
    return { x: offsetLeft, y: offsetTop }
  }





}







