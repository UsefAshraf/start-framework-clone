import { Routes } from '@angular/router';
import { AboutComponent } from "./components/components/about/about.component";
import { PortfolioComponent } from './components/components/portfolio/portfolio.component';
import { ContactComponent } from "./components/components/contact/contact.component";
import { HomeComponent } from "./components/components/home/home.component";


export const routes: Routes = [
  { path: '', component: HomeComponent }, // 👈 Show HomeComponent by default
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // 👈 redirect unknown paths to home
];

