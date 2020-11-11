import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperadminNavComponent } from './superadmin-nav/superadmin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { ManagerHomepageCompetitionComponent } from './manager-homepage-competition/manager-homepage-competition.component';
import { ManagerHomepageBissunessComponent } from './manager-homepage-bissuness/manager-homepage-bissuness.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminNavComponent,
    ManagerHomepageComponent,
    ManagerHomepageCompetitionComponent,
    ManagerHomepageBissunessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
