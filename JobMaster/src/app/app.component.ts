import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: 'app.component.html',
  styleUrls: []  
})
export class AppComponent implements OnInit {
  title = 'JobMaster';
  showHeaderAndFooter: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        
        const currentUrl = this.router.url;
        this.showHeaderAndFooter = !(currentUrl === '/login' || currentUrl === '/register' 
                         || currentUrl === '/login-employer' || currentUrl === '/register-employer');
        console.log("Show head and foot", this.showHeaderAndFooter);
      }
    });
  }
}
