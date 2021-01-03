import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperadminNavComponent } from './superadmin-nav/superadmin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SuperadminManagerListComponent } from './superadmin-manager-list/superadmin-manager-list.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateManagerPopupComponent } from './create-manager-popup/create-manager-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { MatRadioModule } from '@angular/material/radio';

import { IssueService } from './issue.service';
import { UserService } from './user.service';
import { SuperadminGamesListComponent } from './superadmin-games-list/superadmin-games-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperadminNavComponent,
    SuperadminManagerListComponent,
    CreateManagerPopupComponent,
    LoginComponent,
    SuperadminGamesListComponent,
    MainNavComponent,
    PortfolioComponent,
    RegisterComponent,
    CompanyComponent,
    ChooseTypeComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [DatePipe, NewCompanyComponent, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
