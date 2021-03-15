import { Injectable, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ImageService   {

  uploadPercent: Observable<number> | undefined;
  downloadURL: Observable<string> | undefined;

  constructor(private storage : AngularFireStorage) { 

  }


  uploadFile(event : any) {
    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.put(file);



    return  fileRef.getDownloadURL();


     
  }

   getImage ( ) {
    
   }
 
  

}
