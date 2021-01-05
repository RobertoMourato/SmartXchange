import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { PlayerCompetition } from '../login/playerCompetition';
import { Invite } from './invite';
import { RegisterService } from './register.service';
import { User } from './user';
import { UserType } from './userType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    router: Router,
    private loginService: LoginService
  ) {}

  isShown = true;
  user: User;
  userType: UserType;
  private invite: Invite;
  playerCompetition: PlayerCompetition;
  ngOnInit(): void {
    this.registerService.isManager(window.location.search).subscribe((data) => {
      console.log(data);
      this.invite = data.invite;
      const user = data.user;
      console.log(data);
      if (this.invite.isManager) {
        this.isShown = false;
      } else {
        if (user != null) {
          window.location.replace('/login?invite=' + this.invite.token);
        }
        this.isShown = true;
      }
    });
  }

  register(
    name: string,
    username: string,
    email: string,
    password: string
  ): void {
    if (!this.validateForm(name, username, email, password)) {
      alert('Invalid data');
    } else {
      const inviteToken = window.location.search.split('=')[1];
      this.registerService
        .register(name, username, email, password, inviteToken)
        .subscribe(
          (data) => {
            console.log('data', data);
            this.user = data.user;

            window.sessionStorage.setItem('user', this.user.username);
            // alert(JSON.stringify(data.user) +'\n'+JSON.stringify(data.usertype))
            // window.location.replace("/menu");

            this.playerCompetition = data.playerCompetition;
            alert('Account created ' + window.sessionStorage.getItem('user'));
            window.location.replace(
              '/chooseType?playerCompetition=' + this.playerCompetition.id
            );
          },
          (error) => {
            alert(error.error);
          }
        );
    }
  }

  validateForm(
    name: string,
    username: string,
    email: string,
    password1: string
  ): boolean {
    if (email !== '' && password1 !== '' && name !== '' && username !== '') {
      return true;
    }
    return false;
  }
}
