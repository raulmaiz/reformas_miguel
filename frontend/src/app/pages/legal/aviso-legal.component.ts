import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">{{ 'svc.breadcrumb_home' | translate }}</a></li>
            <li class="breadcrumb-item active text-white">{{ 'legal_notice.breadcrumb' | translate }}</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">{{ 'legal_notice.hero_title' | translate }}</h1>
          <p class="lead text-white">{{ 'legal_notice.hero_subtitle' | translate }}</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <h2 class="h4 fw-bold mt-4">{{ 'legal_notice.h_1' | translate }}</h2>
            <p [innerHTML]="'legal_notice.p_1' | translate"></p>
            <ul>
              <li [innerHTML]="'legal_notice.li_email' | translate"></li>
              <li [innerHTML]="'legal_notice.li_phone' | translate"></li>
              <li [innerHTML]="'legal_notice.li_area' | translate"></li>
            </ul>
            <p class="text-muted">{{ 'legal_notice.p_lssi' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_2' | translate }}</h2>
            <p [innerHTML]="'legal_notice.p_2' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_3' | translate }}</h2>
            <p>{{ 'legal_notice.p_3' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_4' | translate }}</h2>
            <p>{{ 'legal_notice.p_4' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_5' | translate }}</h2>
            <p [innerHTML]="'legal_notice.p_5' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_6' | translate }}</h2>
            <p>{{ 'legal_notice.p_6' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'legal_notice.h_7' | translate }}</h2>
            <p>{{ 'legal_notice.p_7' | translate }}</p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class AvisoLegalComponent {}
