import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imgsrc="https://wallpaperaccess.com/full/174662.jpg";

  username:any;

  SayHello(){
    alert("Hello user")
  }

}
