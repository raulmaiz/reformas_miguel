import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-service';

@Component({
  selector: 'app-reformas-cocina',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reformas-cocina.component.html'
})
export class ReformasCocinaComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, this.schema.buildService({
      name: 'Reforma de cocina en Barcelona',
      description: 'Reforma completa de cocina en Barcelona: derribo, alicatado, muebles, encimera, electrodomésticos opcionales, electricidad, fontanería y campana extractora. Diseño y proyecto incluidos.',
      url: 'https://reformasmiguel.cat/reformas-cocina-barcelona',
      minPrice: 3500,
      maxPrice: 20000
    }));
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
