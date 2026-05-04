import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

interface Proyecto {
  tipoKey: string;
  zona: string;
  descKey: string;
  dias: number;
  m2: number;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {
  proyectos: Proyecto[] = [
    { tipoKey: 'projects_pg.type_integral', zona: 'Eixample', descKey: 'projects_pg.desc_eixample_integral', dias: 32, m2: 85 },
    { tipoKey: 'projects_pg.type_bano', zona: 'Gràcia', descKey: 'projects_pg.desc_gracia_bano', dias: 9, m2: 8 },
    { tipoKey: 'projects_pg.type_cocina', zona: 'Sarrià', descKey: 'projects_pg.desc_sarria_cocina', dias: 14, m2: 18 },
    { tipoKey: 'projects_pg.type_pintura', zona: 'Sant Martí', descKey: 'projects_pg.desc_santmarti_pintura', dias: 5, m2: 75 },
    { tipoKey: 'projects_pg.type_bano', zona: 'Hospitalet', descKey: 'projects_pg.desc_hospitalet_bano', dias: 8, m2: 7 },
    { tipoKey: 'projects_pg.type_integral', zona: 'Badalona', descKey: 'projects_pg.desc_badalona_integral', dias: 45, m2: 100 },
    { tipoKey: 'projects_pg.type_electric', zona: 'Les Corts', descKey: 'projects_pg.desc_lescorts_electric', dias: 3, m2: 90 },
    { tipoKey: 'projects_pg.type_cocina', zona: 'Sant Andreu', descKey: 'projects_pg.desc_santandreu_cocina', dias: 10, m2: 10 },
    { tipoKey: 'projects_pg.type_integral', zona: 'Poblenou', descKey: 'projects_pg.desc_poblenou_integral', dias: 28, m2: 65 }
  ];

  waPortfolioUrl(text: string): string {
    return `https://wa.me/34646450767?text=${encodeURIComponent(text)}`;
  }
}
