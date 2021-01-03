import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { windowWhen } from 'rxjs/operators';
import { LoginService } from './login.service';
import { User } from './user';
import { UserType } from './userType';
import { PlayerCompetition } from './playerCompetition';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, router: Router) {}
  user: User;
  userType: UserType;
  playerCompetition: PlayerCompetition;
  ngOnInit(): void {}
  login(email: string, password: string): void {
    if (!this.validateForm(email, password)) {
      alert('Email or password invalid');
    } else {
      this.loginService.login(email, password).subscribe(
        (data) => {
          this.user = data.user;
          this.userType = data.usertype;
          console.log(this.user, ' ', this.userType);
          console.log(data.token);
          window.sessionStorage.setItem('userid', String(this.user.id));
          window.sessionStorage.setItem('user', this.user.username);
          window.sessionStorage.setItem('usertype', this.userType.userType);
          window.sessionStorage.setItem('token', data.token);
          // alert(JSON.stringify(data.user) +'\n'+JSON.stringify(data.usertype))
          // window.location.replace("/menu");
          alert('Welcome ' + window.sessionStorage.getItem('user'));

          if (window.location.search.includes('?invite')) {
            const invite = window.location.search.split('=')[1];

            //criar a playerCompetition atraves do invite e do userId
            this.loginService
              .registerPlayercompetition(this.user.id, invite)
              .subscribe((data) => {
                console.log(data);
                this.playerCompetition = data;
                window.location.replace(
                  '/chooseType?playerCompetition=' + this.playerCompetition.id
                );
              });
          } else {
            window.location.replace('/portfolio');
          }
        },
        (error) => {
          alert(error.error);
        }
      );
    }
  }
  validateForm(email: string, password1: string): boolean {
    if (email !== '' && password1 !== '') {
      return true;
    }
    return false;
  }
}
