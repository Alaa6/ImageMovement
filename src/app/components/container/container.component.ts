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
  private initEvent: MouseEvent | undefined;
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

    if(this.last != undefined  ){
      this.initEvent = this.last

    }
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


  save () {
    if(this.last != undefined){
      alert(`the image position in x = ${this.last.clientX} y  = ${this.last.clientY}`)
    }
  }

  delete(){
    if(  this.imgRef !=undefined ){
      this.imgRef.nativeElement.style.transform = `translate(0px ,  0px )`
            //  console.log(this.imgRef ,"img ref");

            // this.last.clientX = 543
             
    }

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

    if (this.mouseDown && this.last != undefined && this.imgRef  != undefined) {
      let x = event.clientX - this.last.clientX;
      let y = event.clientY - this.last.clientY;

      this.imgRef.nativeElement.style.transform = `translate(${event.clientX }px , ${event.clientY }px )`
      

      this.last = event;
      console.log(event.clientX - this.last.clientX, 'last x');

    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    console.log(event, 'in mousedown');

    this.mouseDown = true;
    console.log(this.mouseDown, 'in mousedown');
    this.last = event;
  }






}







