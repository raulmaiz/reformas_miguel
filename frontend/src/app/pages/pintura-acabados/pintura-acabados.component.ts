import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-service';

@Component({
  selector: 'app-pintura-acabados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pintura-acabados.component.html'
})
export class PinturaAcabadosComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, this.schema.buildService({
      name: 'Pintura y acabados en Barcelona',
      description: 'Servicio de pintura interior y acabados decorativos en Barcelona: preparación de superficies, masillado, lijado, imprimación y aplicación. Pintura plástica, esmalte, gotelé y técnicas decorativas.',
      url: 'https://reformasmiguel.cat/pintura-y-acabados',
      minPrice: 800,
      maxPrice: 3500
    }));
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
