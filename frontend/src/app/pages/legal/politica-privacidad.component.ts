import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">{{ 'svc.breadcrumb_home' | translate }}</a></li>
            <li class="breadcrumb-item active text-white">{{ 'privacy.breadcrumb' | translate }}</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">{{ 'privacy.hero_title' | translate }}</h1>
          <p class="lead text-white">{{ 'privacy.hero_subtitle' | translate }}</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <p class="lead" [innerHTML]="'privacy.lead' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_1' | translate }}</h2>
            <p [innerHTML]="'privacy.p_1' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_2' | translate }}</h2>
            <p [innerHTML]="'privacy.p_2' | translate"></p>
            <ul>
              <li [innerHTML]="'privacy.li_2_1' | translate"></li>
              <li [innerHTML]="'privacy.li_2_2' | translate"></li>
              <li [innerHTML]="'privacy.li_2_3' | translate"></li>
            </ul>
            <p>{{ 'privacy.p_2_after' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_3' | translate }}</h2>
            <p>{{ 'privacy.p_3_a' | translate }}</p>
            <p>{{ 'privacy.p_3_b' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_4' | translate }}</h2>
            <p>{{ 'privacy.p_4' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_5' | translate }}</h2>
            <p>{{ 'privacy.p_5_intro' | translate }}</p>
            <ul>
              <li [innerHTML]="'privacy.li_5_1' | translate"></li>
              <li [innerHTML]="'privacy.li_5_2' | translate"></li>
            </ul>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_6' | translate }}</h2>
            <p>{{ 'privacy.p_6_intro' | translate }}</p>
            <ul>
              <li>{{ 'privacy.li_6_1' | translate }}</li>
              <li>{{ 'privacy.li_6_2' | translate }}</li>
              <li>{{ 'privacy.li_6_3' | translate }}</li>
              <li>{{ 'privacy.li_6_4' | translate }}</li>
            </ul>
            <p [innerHTML]="'privacy.p_6_outro' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'privacy.h_7' | translate }}</h2>
            <p>{{ 'privacy.p_7' | translate }}</p>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PoliticaPrivacidadComponent {}
