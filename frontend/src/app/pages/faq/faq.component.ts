import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SchemaService } from '../../services/schema.service';

interface FaqEntry {
  qKey: string;
  aKey: string;
  htmlId: string;
}

const SCHEMA_ID = 'page-schema-faq';

const FAQ_ENTRIES: FaqEntry[] = [
  // Precios
  { qKey: 'faq_pg.q_price_1', aKey: 'faq_pg.a_price_1', htmlId: 'p1' },
  { qKey: 'faq_pg.q_price_2', aKey: 'faq_pg.a_price_2', htmlId: 'p2' },
  { qKey: 'faq_pg.q_price_3', aKey: 'faq_pg.a_price_3', htmlId: 'p3' },
  { qKey: 'faq_pg.q_price_4', aKey: 'faq_pg.a_price_4', htmlId: 'p4' },
  { qKey: 'faq_pg.q_price_5', aKey: 'faq_pg.a_price_5', htmlId: 'p5' },
  { qKey: 'faq_pg.q_price_6', aKey: 'faq_pg.a_price_6', htmlId: 'p6' },
  { qKey: 'faq_pg.q_price_7', aKey: 'faq_pg.a_price_7', htmlId: 'p7' },
  // Plazos
  { qKey: 'faq_pg.q_dline_1', aKey: 'faq_pg.a_dline_1', htmlId: 'pl1' },
  { qKey: 'faq_pg.q_dline_2', aKey: 'faq_pg.a_dline_2', htmlId: 'pl2' },
  { qKey: 'faq_pg.q_dline_3', aKey: 'faq_pg.a_dline_3', htmlId: 'pl3' },
  { qKey: 'faq_pg.q_dline_4', aKey: 'faq_pg.a_dline_4', htmlId: 'pl4' },
  { qKey: 'faq_pg.q_dline_5', aKey: 'faq_pg.a_dline_5', htmlId: 'pl5' },
  // Licencias
  { qKey: 'faq_pg.q_lic_1', aKey: 'faq_pg.a_lic_1', htmlId: 'lic1' },
  { qKey: 'faq_pg.q_lic_2', aKey: 'faq_pg.a_lic_2', htmlId: 'lic2' },
  { qKey: 'faq_pg.q_lic_3', aKey: 'faq_pg.a_lic_3', htmlId: 'lic3' },
  // Materiales
  { qKey: 'faq_pg.q_mat_1', aKey: 'faq_pg.a_mat_1', htmlId: 'm1' },
  { qKey: 'faq_pg.q_mat_2', aKey: 'faq_pg.a_mat_2', htmlId: 'm2' },
  { qKey: 'faq_pg.q_mat_3', aKey: 'faq_pg.a_mat_3', htmlId: 'm3' },
  { qKey: 'faq_pg.q_mat_4', aKey: 'faq_pg.a_mat_4', htmlId: 'm4' },
  // Garantía
  { qKey: 'faq_pg.q_warr_1', aKey: 'faq_pg.a_warr_1', htmlId: 'w1' },
  { qKey: 'faq_pg.q_warr_2', aKey: 'faq_pg.a_warr_2', htmlId: 'w2' },
  // Durante la obra
  { qKey: 'faq_pg.q_dur_1', aKey: 'faq_pg.a_dur_1', htmlId: 'd1' },
  { qKey: 'faq_pg.q_dur_2', aKey: 'faq_pg.a_dur_2', htmlId: 'd2' },
  { qKey: 'faq_pg.q_dur_3', aKey: 'faq_pg.a_dur_3', htmlId: 'd3' },
  { qKey: 'faq_pg.q_dur_4', aKey: 'faq_pg.a_dur_4', htmlId: 'd4' },
  // Casos especiales
  { qKey: 'faq_pg.q_spec_1', aKey: 'faq_pg.a_spec_1', htmlId: 's1' },
  { qKey: 'faq_pg.q_spec_2', aKey: 'faq_pg.a_spec_2', htmlId: 's2' }
];

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit, OnDestroy {
  prices = FAQ_ENTRIES.slice(0, 7);
  deadlines = FAQ_ENTRIES.slice(7, 12);
  licenses = FAQ_ENTRIES.slice(12, 15);
  materials = FAQ_ENTRIES.slice(15, 19);
  warranty = FAQ_ENTRIES.slice(19, 21);
  during = FAQ_ENTRIES.slice(21, 25);
  special = FAQ_ENTRIES.slice(25, 27);

  private langSub?: Subscription;

  constructor(
    private schema: SchemaService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.refreshSchema();
    this.langSub = this.translate.onLangChange.subscribe(() => this.refreshSchema());
  }

  ngOnDestroy(): void {
    this.schema.remove(SCHEMA_ID);
    this.langSub?.unsubscribe();
  }

  private refreshSchema(): void {
    this.schema.set(SCHEMA_ID, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ENTRIES.map(({ qKey, aKey }) => ({
        '@type': 'Question',
        name: this.translate.instant(qKey),
        acceptedAnswer: { '@type': 'Answer', text: this.translate.instant(aKey) }
      }))
    });
  }
}
