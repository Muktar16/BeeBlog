import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  click=0;

  menuButtonClickEvent(){
     if(this.click==0) this.click=1;
     else this.click=0;
  }

  signInButtonAction(){
    this.router.navigate(['signin']);
  }

  signUpButtonAction(){
    this.router.navigate(['signup'])
  }
  
  ngOnInit(): void {
  }

}
