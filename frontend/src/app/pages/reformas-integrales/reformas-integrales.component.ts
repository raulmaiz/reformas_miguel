import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-service';

@Component({
  selector: 'app-reformas-integrales',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reformas-integrales.component.html'
})
export class ReformasIntegralesComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, this.schema.buildService({
      name: 'Reforma integral de vivienda en Barcelona',
      description: 'Reforma integral llave en mano de pisos en Barcelona y área metropolitana. Albañilería, electricidad, fontanería, baños, cocinas, pintura, suelos y carpintería bajo un único presupuesto cerrado.',
      url: 'https://reformasmiguel.cat/reformas-integrales-barcelona'
    }));
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
