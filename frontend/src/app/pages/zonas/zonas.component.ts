import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zonas.component.html'
})
export class ZonasComponent {
  zonas = [
    { nombre: 'Barcelona ciudad', detalle: 'Todos los barrios y distritos', icono: 'bi-building' },
    { nombre: 'Eixample', detalle: 'Esquerra i Dreta del Eixample', icono: 'bi-grid' },
    { nombre: 'Gràcia', detalle: 'Vila de Gràcia, Camp d\'en Grassot', icono: 'bi-flower1' },
    { nombre: 'Sarrià-Sant Gervasi', detalle: 'Sarrià, Bonanova, El Putxet', icono: 'bi-tree' },
    { nombre: 'Sant Martí', detalle: 'Poblenou, Vila Olímpica, Diagonal Mar', icono: 'bi-water' },
    { nombre: 'Les Corts', detalle: 'Les Corts, Pedralbes', icono: 'bi-geo' },
    { nombre: 'Sants-Montjuïc', detalle: 'Sants, Hostafrancs, Poble Sec', icono: 'bi-mountain' },
    { nombre: 'Sant Andreu', detalle: 'Sant Andreu, La Sagrera', icono: 'bi-compass' },
    { nombre: 'Nou Barris', detalle: 'Roquetes, Trinitat, Verdum', icono: 'bi-houses' },
    { nombre: 'Horta-Guinardó', detalle: 'Horta, Guinardó, El Carmel', icono: 'bi-diagram-3' },
    { nombre: 'Hospitalet de Llobregat', detalle: 'Santa Eulàlia, Bellvitge, Granvia Sud', icono: 'bi-house-door' },
    { nombre: 'Badalona', detalle: 'Centre, Sant Roc, Llefià', icono: 'bi-signpost' },
    { nombre: 'Cornellà', detalle: 'Cornellà de Llobregat', icono: 'bi-pin-map' },
    { nombre: 'Esplugues', detalle: 'Esplugues de Llobregat', icono: 'bi-pin-map' },
    { nombre: 'Sant Cugat', detalle: 'Sant Cugat del Vallès', icono: 'bi-tree-fill' },
    { nombre: 'Sabadell', detalle: 'Centre i nord de Sabadell', icono: 'bi-geo-alt' },
  ];
}
