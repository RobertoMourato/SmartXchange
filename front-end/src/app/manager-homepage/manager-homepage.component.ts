import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';


@Component({
  selector: 'app-manager-homepage',
  templateUrl: './manager-homepage.component.html',
  styleUrls: ['./manager-homepage.component.css']
})
export class ManagerHomepageComponent implements OnInit {
  breakpoint;
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth <= 700){
      this.breakpoint = 1;
     }
     else if (window.innerWidth <= 1200){
       this.breakpoint = 2;
     }
     else{
       this.breakpoint = 3;
     }
}

onResize(event): void {
  if (event.target.innerWidth <= 700){
   this.breakpoint = 1;
  }
  else if (event.target.innerWidth <= 1200){
    this.breakpoint = 2;
  }
  else{
    this.breakpoint = 3;
  }
}

}
