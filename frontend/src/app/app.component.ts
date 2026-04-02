import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning shadow-sm">
      <div class="container-fluid">
        <span class="navbar-brand text-dark">
          <i class="bi bi-hammer me-2"></i>Reformas Miguel
        </span>
        <div class="navbar-nav ms-3">
          <a class="nav-link text-dark" routerLink="/clientes" routerLinkActive="fw-bold">
            <i class="bi bi-people me-1"></i>Clientes
          </a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
