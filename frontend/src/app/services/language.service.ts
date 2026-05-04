import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const STORAGE_KEY = 'rm.lang';
const DEFAULT_LANG = 'ca';
const SUPPORTED = ['ca', 'es'] as const;
export type Lang = (typeof SUPPORTED)[number];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    this.translate.addLangs([...SUPPORTED]);
    this.translate.setDefaultLang(DEFAULT_LANG);

    const stored = this.readStored();
    const initial: Lang = stored ?? DEFAULT_LANG;
    this.use(initial);
  }

  current(): Lang {
    return (this.translate.currentLang as Lang) ?? DEFAULT_LANG;
  }

  use(lang: Lang): void {
    if (!SUPPORTED.includes(lang)) return;
    this.translate.use(lang);
    this.doc.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore storage errors (private mode, quotas)
    }
  }

  private readStored(): Lang | null {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v && (SUPPORTED as readonly string[]).includes(v) ? (v as Lang) : null;
    } catch {
      return null;
    }
  }
}
