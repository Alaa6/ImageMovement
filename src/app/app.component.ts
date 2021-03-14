import { Component } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-movement';
  x  = 0 
  y = 0 

  constructor( private imageService: ImageService, ) {


  }
  

}
