import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar/navbar.component";
import { AboutComponent } from "./components/components/about/about.component";
import { FooterComponent } from "./components/components/footer/footer.component";
import { PortfolioComponent } from './components/components/portfolio/portfolio.component';
import { ContactComponent } from "./components/components/contact/contact.component";
import { HomeComponent } from "./components/components/home/home.component";
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NavbarComponent, AboutComponent, FooterComponent, PortfolioComponent, ContactComponent, HomeComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-angular-app2';
// }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // ✅ fixed typo: "styleUrl" ➜ "styleUrls"
})
export class AppComponent {
  constructor(private router: Router, private titleService: Title) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  updateTitle() {
    const route = this.router.url;
    if (route === '/') {
      this.titleService.setTitle('Home');
    } else if (route === '/about') {
      this.titleService.setTitle('About ');
    } else if (route === '/portfolio') {
      this.titleService.setTitle('Portfolio ');
    } else if (route === '/contact') {
      this.titleService.setTitle('Contact');
    } else {
      this.titleService.setTitle('Start Framework');
    }
  }
}
