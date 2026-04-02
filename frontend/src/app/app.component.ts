import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

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
    <a href="https://wa.me/34600123456?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto"
       class="whatsapp-float" target="_blank" rel="noopener" title="Contactar por WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
  `
})
export class AppComponent {}
