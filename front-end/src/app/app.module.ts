import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog'; 

import { LoginComponent } from './login/login.component';
import { SuperadminNavComponent } from './superadmin-nav/superadmin-nav.component';
import { NewCompetitionComponent } from './new-competition/new-competition.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatTableModule } from '@angular/material/table' 
import { DatePipe } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { MatRadioModule } from '@angular/material/radio';
import { SortQuestionsComponent, NewQuestionDialogComponent } from './new-competition/sort-questions/sort-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperadminNavComponent,
    LoginComponent,
    PortfolioComponent,
    MainNavComponent,
    RegisterComponent,
    NewCompanyComponent,
    CompanyComponent,
    ChooseTypeComponent,
    NewCompetitionComponent,
    LoginComponent,
    SortQuestionsComponent,
    NewQuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],
  exports: [],
  providers: [DatePipe,NewCompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
