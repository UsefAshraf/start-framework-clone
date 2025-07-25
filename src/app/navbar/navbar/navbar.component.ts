import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Correct place for imports
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // ✅ Correct property name
})
export class NavbarComponent {
  navpadding: string = "py-4";
  changePadding(e:any) {
    if (window.scrollY > 0) {
      this.navpadding = "";
    } else {
      this.navpadding = "py-4";
    }
  }
}
