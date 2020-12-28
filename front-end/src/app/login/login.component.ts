import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import { UserType } from './userType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, router: Router) { }
  user: User;
  userType: UserType;
  ngOnInit(): void {
  }
  login(email: string, password: string): void {
    if (!this.validateForm(email, password)) {
      alert('Email or password invalid');
    } else {
      this.loginService.login(email, password).subscribe(data => {
        this.user = data.user;
        this.userType = data.usertype;
        console.log(this.user, ' ' , this.userType);
        console.log(data.token);
        window.sessionStorage.setItem('user', this.user.username);
        window.sessionStorage.setItem('usertype', this.userType.userType);
        window.sessionStorage.setItem('token', data.token);
        // alert(JSON.stringify(data.user) +'\n'+JSON.stringify(data.usertype))
        // window.location.replace("/menu");
        alert('Welcome ' + window.sessionStorage.getItem('user'));
        
        if(window.location.search != ''){
          const invite = window.location.search.split('=')[1]
          window.location.replace('/types?invite='+ invite)
        }else{
          //window.location.replace('/menu')
        }
      },
        error => {
          alert(error.error); });
    }
  }
  validateForm(email: string, password1: string): boolean {
    if (email !== '' && password1 !== '') {
      return true;
    }
    return false;
  }
}