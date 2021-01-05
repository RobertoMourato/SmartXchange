import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  redirect(): void{
    console.log('redirect');
    if (window.sessionStorage.getItem('usertype') === 'Manager'){
      window.location.replace('/home-manager');
    }else{
      window.location.replace('/portfolio');
    }

  }

  logout(): void {
    console.log('logout');
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('usertype');
    window.sessionStorage.removeItem('token');

    window.location.replace('/login');
  }
}
