import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Zone {
  nameKey: string;
  detailKey: string;
  icono: string;
}

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './zonas.component.html'
})
export class ZonasComponent {
  zonas: Zone[] = [
    { nameKey: 'zones_list.barcelona_name', detailKey: 'zones_list.barcelona_detail', icono: 'bi-building' },
    { nameKey: 'zones_list.eixample_name', detailKey: 'zones_list.eixample_detail', icono: 'bi-grid' },
    { nameKey: 'zones_list.gracia_name', detailKey: 'zones_list.gracia_detail', icono: 'bi-flower1' },
    { nameKey: 'zones_list.sarria_name', detailKey: 'zones_list.sarria_detail', icono: 'bi-tree' },
    { nameKey: 'zones_list.santmarti_name', detailKey: 'zones_list.santmarti_detail', icono: 'bi-water' },
    { nameKey: 'zones_list.lescorts_name', detailKey: 'zones_list.lescorts_detail', icono: 'bi-geo' },
    { nameKey: 'zones_list.santsmontjuic_name', detailKey: 'zones_list.santsmontjuic_detail', icono: 'bi-mountain' },
    { nameKey: 'zones_list.santandreu_name', detailKey: 'zones_list.santandreu_detail', icono: 'bi-compass' },
    { nameKey: 'zones_list.noubarris_name', detailKey: 'zones_list.noubarris_detail', icono: 'bi-houses' },
    { nameKey: 'zones_list.horta_name', detailKey: 'zones_list.horta_detail', icono: 'bi-diagram-3' },
    { nameKey: 'zones_list.hospitalet_name', detailKey: 'zones_list.hospitalet_detail', icono: 'bi-house-door' },
    { nameKey: 'zones_list.badalona_name', detailKey: 'zones_list.badalona_detail', icono: 'bi-signpost' },
    { nameKey: 'zones_list.cornella_name', detailKey: 'zones_list.cornella_detail', icono: 'bi-pin-map' },
    { nameKey: 'zones_list.esplugues_name', detailKey: 'zones_list.esplugues_detail', icono: 'bi-pin-map' },
    { nameKey: 'zones_list.santcugat_name', detailKey: 'zones_list.santcugat_detail', icono: 'bi-tree-fill' },
    { nameKey: 'zones_list.sabadell_name', detailKey: 'zones_list.sabadell_detail', icono: 'bi-geo-alt' }
  ];
}
