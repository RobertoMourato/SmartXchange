import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invite } from './invite';
import { RegisterService } from './register.service';
import { User } from './user';
import { UserType } from './userType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, router: Router) { }
  isShown = true;
  user: User;
  userType: UserType;
  private invite: Invite;
  ngOnInit(): void {
    this.registerService.isManager(window.location.search).subscribe(data => {
      console.log(data);
      this.invite = data;
      if (this.invite.isManager){
        this.isShown = false;
      }
      else{
        this.isShown = true;
      }
    });
  }


  register(name: string, username: string, email: string, password: string): void {
    if (!this.validateForm(name, username, email, password)) {
      alert('Invalid data');
    } else {
      this.registerService.register(name, username, email, password, window.location.search).subscribe(data => {
        this.user = data.user;

        window.sessionStorage.setItem('user', this.user.username);
        // alert(JSON.stringify(data.user) +'\n'+JSON.stringify(data.usertype))
        // window.location.replace("/menu");
        alert('Account created ' + window.sessionStorage.getItem('user'));
      },
        error => {
          alert(error.error); });
    }
  }

  validateForm(name: string, username: string, email: string, password1: string): boolean {
    if (email !== '' && password1 !== '' && name !== '' && username !== '') {
      return true;
    }
    return false;
  }
}
