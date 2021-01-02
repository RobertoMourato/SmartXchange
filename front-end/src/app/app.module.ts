import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperadminNavComponent } from './superadmin-nav/superadmin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MarketPageListComponent } from './market-page-list/market-page-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatTableModule } from '@angular/material/table' 
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminNavComponent,
    MarketPageListComponent,
    LoginComponent,
    PortfolioComponent,
    MainNavComponent,
    RegisterComponent,
    NewCompanyComponent,
    CompanyComponent,
    ChooseTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    AngularEditorModule,
  ],
  exports: [],
  providers: [DatePipe,NewCompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
