import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from './user';
import { UserType } from './userType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private RegisterService: RegisterService, router: Router) { }
  
  user: User;
  userType:UserType;

  ngOnInit() {

  }
  
  register(name:string,username:string,email: string, password: string, usertype: Int16Array): void {
    if (!this.validateForm(name,username,email,password)) {
      alert("Invalid data");
    } else {
      this.RegisterService.register(name,username,email,password,window.location.search,usertype).subscribe(data => {
        this.user = data.user;
        this.userType=data.usertype;
        console.log(this.user, ' ' , this.userType)
        console.log(data.token);
        
        window.sessionStorage.setItem('user', this.user.username);
        window.sessionStorage.setItem('usertype', this.userType.userType);
        window.sessionStorage.setItem('token', data.token);
        
        
        //alert(JSON.stringify(data.user) +'\n'+JSON.stringify(data.usertype))
        //window.location.replace("/menu");
        alert("Account created "+ window.sessionStorage.getItem('user'));
      },
        error => { 
          alert(error.error)});
    }
  }

  validateForm(name:string, username:string, email: string, password1: string) {
    if (email != "" && password1 != "" && name != "" && username != "") {
      return true;
    }
    return false;
  }
}
