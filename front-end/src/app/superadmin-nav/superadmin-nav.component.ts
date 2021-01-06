import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-superadmin-nav',
  templateUrl: './superadmin-nav.component.html',
  styleUrls: ['./superadmin-nav.component.css']
})
export class SuperadminNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  logout(): void {
    console.log('logout');
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('usertype');
    window.sessionStorage.removeItem('token');

    window.location.replace('/login');
  }
}
