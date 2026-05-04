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
  { qKey: 'faq_pg.q_price_1', aKey: 'faq_pg.a_price_1', htmlId: 'p1' },
  { qKey: 'faq_pg.q_price_2', aKey: 'faq_pg.a_price_2', htmlId: 'p2' },
  { qKey: 'faq_pg.q_price_3', aKey: 'faq_pg.a_price_3', htmlId: 'p3' },
  { qKey: 'faq_pg.q_price_4', aKey: 'faq_pg.a_price_4', htmlId: 'p4' },
  { qKey: 'faq_pg.q_dline_1', aKey: 'faq_pg.a_dline_1', htmlId: 'pl1' },
  { qKey: 'faq_pg.q_dline_2', aKey: 'faq_pg.a_dline_2', htmlId: 'pl2' },
  { qKey: 'faq_pg.q_dline_3', aKey: 'faq_pg.a_dline_3', htmlId: 'pl3' },
  { qKey: 'faq_pg.q_lic_1', aKey: 'faq_pg.a_lic_1', htmlId: 'lic1' },
  { qKey: 'faq_pg.q_lic_2', aKey: 'faq_pg.a_lic_2', htmlId: 'lic2' },
  { qKey: 'faq_pg.q_mat_1', aKey: 'faq_pg.a_mat_1', htmlId: 'm1' },
  { qKey: 'faq_pg.q_mat_2', aKey: 'faq_pg.a_mat_2', htmlId: 'm2' }
];

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit, OnDestroy {
  prices = FAQ_ENTRIES.slice(0, 4);
  deadlines = FAQ_ENTRIES.slice(4, 7);
  licenses = FAQ_ENTRIES.slice(7, 9);
  materials = FAQ_ENTRIES.slice(9, 11);

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
