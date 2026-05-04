import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export interface ServiceSchemaOpts {
  name: string;
  description: string;
  url: string;
  minPrice?: number;
  maxPrice?: number;
}

@Injectable({ providedIn: 'root' })
export class SchemaService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  set(id: string, data: unknown): void {
    let el = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = this.doc.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      this.doc.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  remove(id: string): void {
    this.doc.getElementById(id)?.remove();
  }

  buildService(opts: ServiceSchemaOpts): unknown {
    const base: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: opts.name,
      name: opts.name,
      description: opts.description,
      url: opts.url,
      provider: { '@id': 'https://reformasmiguel.cat/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Barcelona y área metropolitana' }
    };
    if (opts.minPrice !== undefined && opts.maxPrice !== undefined) {
      base['offers'] = {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: opts.minPrice,
        highPrice: opts.maxPrice
      };
    }
    return base;
  }
}
