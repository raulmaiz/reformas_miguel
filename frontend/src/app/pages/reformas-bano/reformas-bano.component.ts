import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-service';

@Component({
  selector: 'app-reformas-bano',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './reformas-bano.component.html'
})
export class ReformasBanoComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, this.schema.buildService({
      name: 'Reforma de baño en Barcelona',
      description: 'Reforma completa de baño en Barcelona: derribo, impermeabilización, alicatado, sanitarios, mampara y fontanería. Plazo medio de 7 a 10 días laborables, presupuesto cerrado por escrito.',
      url: 'https://reformasmiguel.cat/reformas-bano-barcelona',
      minPrice: 2500,
      maxPrice: 12000
    }));
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
