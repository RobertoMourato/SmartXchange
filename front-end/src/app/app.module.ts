import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { ManagerHomepageCompetitionComponent } from './manager-homepage-competition/manager-homepage-competition.component';
import { ManagerHomepageBusinessComponent } from './manager-homepage-business/manager-homepage-business.component';
import { ManagerHomepageParticipantsComponent } from './manager-homepage-participants/manager-homepage-participants.component';
import { ManagerHomepageDialogComponent } from './manager-homepage-dialog/manager-homepage-dialog.component';
import { SuperadminManagerListComponent } from './superadmin-manager-list/superadmin-manager-list.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateManagerPopupComponent } from './create-manager-popup/create-manager-popup.component';
import { CreateManagerPopupDialogComponent } from './create-manager-popup/create-manager-popup.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


import { SuperadminNavComponent } from './superadmin-nav/superadmin-nav.component';
import { NewCompetitionComponent } from './new-competition/new-competition.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';
import { HomePageInvestorComponent } from './home-page-investor/home-page-investor.component';
import { MatTableModule } from '@angular/material/table';
import { MarketPageListComponent } from './market-page-list/market-page-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MarketPageComponent } from './market-page/market-page.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { MatRadioModule } from '@angular/material/radio';
import { SortQuestionsComponent, NewQuestionDialogComponent } from './new-competition/sort-questions/sort-questions.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { UserService } from './user.service';
import { SuperadminGamesListComponent } from './superadmin-games-list/superadmin-games-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagerHomepageComponent,
    ManagerHomepageCompetitionComponent,
    ManagerHomepageBusinessComponent,
    ManagerHomepageParticipantsComponent,
    ManagerHomepageDialogComponent,
    SuperadminNavComponent,
    SuperadminManagerListComponent,
    CreateManagerPopupComponent,
    MarketPageListComponent,
    LoginComponent,
    SuperadminGamesListComponent,
    HomePageInvestorComponent,
    MarketPageComponent,
    PortfolioComponent,
    RegisterComponent,
    CompanyComponent,
    ChooseTypeComponent,
    MainNavComponent,
    NewCompanyComponent,
    CreateManagerPopupDialogComponent,
    NewCompetitionComponent,
    SortQuestionsComponent,
    NewQuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDialogModule,
    AngularEditorModule,
    MatTableModule
  ],
  exports: [],
  providers: [DatePipe, NewCompanyComponent, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
