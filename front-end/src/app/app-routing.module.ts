import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomePageInvestorComponent } from './home-page-investor/home-page-investor.component';
import { MarketPageListComponent } from './market-page-list/market-page-list.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';
import { MarketPageComponent } from './market-page/market-page.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyComponent } from './company/company.component';
import { ChooseTypeComponent } from './choose-type/choose-type.component';
import { SuperadminManagerListComponent } from './superadmin-manager-list/superadmin-manager-list.component';
import { SuperadminGamesListComponent } from './superadmin-games-list/superadmin-games-list.component';
import { NewCompetitionComponent } from './new-competition/new-competition.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'market-list', component: MarketPageListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home-investor', component: HomePageInvestorComponent },
  { path: 'marketPage', component: MarketPageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newcompany', component: NewCompanyComponent },
  { path: 'mycompany', component: CompanyComponent },
  { path: 'chooseType', component: ChooseTypeComponent },
  { path: 'manager_superadmin_list', component: SuperadminManagerListComponent },
  { path: 'game_superadmin_list', component: SuperadminGamesListComponent},
  { path: 'new-competition', component: NewCompetitionComponent },
  { path: 'home-manager', component: ManagerHomepageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
