import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPortfolioComponent } from './app-portfolio/app-portfolio.component';

const routes: Routes = [
  { path: 'app-portfolio', component: AppPortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
