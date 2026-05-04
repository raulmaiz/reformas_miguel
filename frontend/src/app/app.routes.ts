import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'reformas-integrales-barcelona',
    loadComponent: () => import('./pages/reformas-integrales/reformas-integrales.component').then(m => m.ReformasIntegralesComponent)
  },
  {
    path: 'reformas-bano-barcelona',
    loadComponent: () => import('./pages/reformas-bano/reformas-bano.component').then(m => m.ReformasBanoComponent)
  },
  {
    path: 'reformas-cocina-barcelona',
    loadComponent: () => import('./pages/reformas-cocina/reformas-cocina.component').then(m => m.ReformasCocinaComponent)
  },
  {
    path: 'pintura-y-acabados',
    loadComponent: () => import('./pages/pintura-acabados/pintura-acabados.component').then(m => m.PinturaAcabadosComponent)
  },
  {
    path: 'electricidad-y-fontaneria',
    loadComponent: () => import('./pages/electricidad-fontaneria/electricidad-fontaneria.component').then(m => m.ElectricidadFontaneriaComponent)
  },
  {
    path: 'proyectos-realizados',
    loadComponent: () => import('./pages/proyectos/proyectos.component').then(m => m.ProyectosComponent)
  },
  {
    path: 'zonas-de-trabajo',
    loadComponent: () => import('./pages/zonas/zonas.component').then(m => m.ZonasComponent)
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./pages/quienes-somos/quienes-somos.component').then(m => m.QuienesSomosComponent)
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
