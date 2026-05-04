import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <a href="https://wa.me/34646450767?text=Hola%2C%20m%27agradaria%20demanar%20un%20pressupost"
       class="whatsapp-float" target="_blank" rel="noopener" title="WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
  `
})
export class AppComponent {
  constructor(_lang: LanguageService) {
    // Inject to trigger language initialization on bootstrap
  }
}
