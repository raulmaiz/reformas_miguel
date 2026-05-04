import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BLOG_POSTS, BlogPost, CATEGORY_LABELS } from './data/blog-data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit, OnDestroy {
  posts: BlogPost[] = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  categoryLabels = CATEGORY_LABELS;
  private langSub?: Subscription;

  constructor(
    private translate: TranslateService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.applyMeta();
    this.langSub = this.translate.onLangChange.subscribe(() => this.applyMeta());
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
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
    const t = this.translate.instant.bind(this.translate);
    this.title.setTitle(t('blog.list_meta_title'));
    this.meta.updateTag({ name: 'description', content: t('blog.list_meta_description') });
    this.meta.updateTag({ property: 'og:title', content: t('blog.list_meta_title') });
    this.meta.updateTag({ property: 'og:description', content: t('blog.list_meta_description') });
  }
}
