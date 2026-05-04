import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-service';

@Component({
  selector: 'app-electricidad-fontaneria',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './electricidad-fontaneria.component.html'
})
export class ElectricidadFontaneriaComponent implements OnInit, OnDestroy {
  constructor(private schema: SchemaService) {}

  ngOnInit(): void {
    this.schema.set(SCHEMA_ID, this.schema.buildService({
      name: 'Electricidad y fontanería en Barcelona',
      description: 'Instalaciones eléctricas y de fontanería en viviendas de Barcelona: renovación de cuadros y cableado, sustitución de tuberías, reparaciones y certificados eléctricos.',
      url: 'https://reformasmiguel.cat/electricidad-y-fontaneria'
    }));
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
  }
}
