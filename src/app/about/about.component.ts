import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  Title="Poonam's World"
  Username="poonam shinde"
  todaydate = new Date();
  Student={
    Name:"Poonam",
    Class:"M.Sc",
    Marks:"450",
    Phone:7499545490
  }
  Weeks=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
  

  
}
