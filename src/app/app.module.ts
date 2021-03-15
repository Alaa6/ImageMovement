import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
////////////
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
////////////
import { AppComponent } from './app.component';
import {ContainerComponent} from './components/container/container.component'
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MovementDirective } from './directives/movement.directive';



var firebaseConfig = {
  apiKey: "AIzaSyB4uckNKxaG2fkNbhYj2lb_-TGcziMb7q4",
  authDomain: "peppy-flame-217301.firebaseapp.com",
  databaseURL: "https://peppy-flame-217301.firebaseio.com",
  projectId: "peppy-flame-217301",
  storageBucket: "peppy-flame-217301.appspot.com",
  messagingSenderId: "556814022993",
  appId: "1:556814022993:web:11da1a55cfa88d8d17bb70"
};

@NgModule({
  declarations: [
    AppComponent ,
    ContainerComponent,
    MovementDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


