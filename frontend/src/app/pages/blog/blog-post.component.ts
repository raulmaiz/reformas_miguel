import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BLOG_POSTS, BlogPost, CATEGORY_LABELS, findPostBySlug } from './data/blog-data';
import { SchemaService } from '../../services/schema.service';

const SCHEMA_ID = 'page-schema-article';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent implements OnInit, OnDestroy {
  post?: BlogPost;
  related: BlogPost[] = [];
  categoryLabels = CATEGORY_LABELS;

  private langSub?: Subscription;
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService,
    private title: Title,
    private meta: Meta,
    private schema: SchemaService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const slug = params['slug'];
      const found = findPostBySlug(slug);
      if (!found) {
        this.router.navigate(['/blog']);
        return;
      }
      this.post = found;
      this.related = BLOG_POSTS
        .filter(p => p.slug !== found.slug)
        .slice(0, 2);
      this.applyMeta();
      this.applySchema();
    });
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.applyMeta();
      this.applySchema();
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.langSub?.unsubscribe();
    this.schema.remove(SCHEMA_ID);
  }

  lang(): 'ca' | 'es' {
    return (this.translate.currentLang as 'ca' | 'es') ?? 'ca';
  }

  formatDate(iso: string): string {
    const date = new Date(iso);
    const locale = this.lang() === 'ca' ? 'ca-ES' : 'es-ES';
    return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  private applyMeta(): void {
    if (!this.post) return;
    const lang = this.lang();
    const fullTitle = `${this.post.title[lang]} — Reformas Miguel`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: this.post.metaDescription[lang] });
    this.meta.updateTag({ property: 'og:title', content: this.post.title[lang] });
    this.meta.updateTag({ property: 'og:description', content: this.post.metaDescription[lang] });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'article:published_time', content: this.post.date });
  }

  private applySchema(): void {
    if (!this.post) return;
    const lang = this.lang();
    this.schema.set(SCHEMA_ID, {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.post.title[lang],
      description: this.post.metaDescription[lang],
      datePublished: this.post.date,
      author: { '@type': 'Organization', name: 'Reformas Miguel' },
      publisher: {
        '@type': 'Organization',
        name: 'Reformas Miguel',
        logo: { '@type': 'ImageObject', url: 'https://reformasmiguel.cat/logo.jpg' }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://reformasmiguel.cat/blog/${this.post.slug}`
      },
      image: 'https://reformasmiguel.cat/og-image.svg',
      inLanguage: lang
    });
  }
}
