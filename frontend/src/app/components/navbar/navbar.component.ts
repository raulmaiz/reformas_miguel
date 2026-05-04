import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Lang, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  constructor(private router: Router, public lang: LanguageService) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      const collapse = document.getElementById('navbarMain');
      if (collapse && collapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
        toggler?.click();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  setLang(lang: Lang): void {
    this.lang.use(lang);
  }
}
