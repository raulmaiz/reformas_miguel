import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {
  proyectos = [
    { tipo: 'Reforma integral', zona: 'Eixample', descripcion: 'Piso de 85m² reformado completamente. Dos baños, cocina nueva, suelos de parquet y toda la electricidad renovada.', dias: 32, m2: 85 },
    { tipo: 'Reforma de baño', zona: 'Gràcia', descripcion: 'Baño de 8m² con plato de ducha italiano, alicatado hasta el techo y mampara de cristal templado.', dias: 9, m2: 8 },
    { tipo: 'Reforma de cocina', zona: 'Sarrià', descripcion: 'Cocina abierta al salón con isla central, encimera de silestone y muebles lacados en blanco.', dias: 14, m2: 18 },
    { tipo: 'Pintura y acabados', zona: 'Sant Martí', descripcion: 'Piso de 75m² con paredes con muchas grietas. Reparación completa, imprimación y pintura en dos tonos.', dias: 5, m2: 75 },
    { tipo: 'Reforma de baño', zona: 'Hospitalet', descripcion: 'Conversión de bañera a ducha con plato extraplano, suelo antideslizante y mampara fija.', dias: 8, m2: 7 },
    { tipo: 'Reforma integral', zona: 'Badalona', descripcion: 'Piso heredado sin reformar en 30 años. Obra completa: baño, cocina, suelos, paredes y electricidad.', dias: 45, m2: 100 },
    { tipo: 'Electricidad', zona: 'Les Corts', descripcion: 'Renovación completa de cuadro eléctrico, cableado y tomas de corriente. Con certificado eléctrico.', dias: 3, m2: 90 },
    { tipo: 'Reforma de cocina', zona: 'Sant Andreu', descripcion: 'Cocina pequeña optimizada con muebles hasta el techo y encimera de cuarzo. Máximo aprovechamiento.', dias: 10, m2: 10 },
    { tipo: 'Reforma integral', zona: 'Poblenou', descripcion: 'Loft de 65m² con cocina americana, baño industrial y suelo de microcemento en toda la vivienda.', dias: 28, m2: 65 },
  ];
}
