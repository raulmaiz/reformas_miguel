import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-politica-cookies',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  template: `
    <section class="page-hero">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a routerLink="/" class="text-warning text-decoration-none">{{ 'svc.breadcrumb_home' | translate }}</a></li>
            <li class="breadcrumb-item active text-white">{{ 'cookies.breadcrumb' | translate }}</li>
          </ol>
        </nav>
        <div class="col-lg-8">
          <h1 class="display-5 fw-black text-white mb-3">{{ 'cookies.hero_title' | translate }}</h1>
          <p class="lead text-white">{{ 'cookies.hero_subtitle' | translate }}</p>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">

            <p class="lead" [innerHTML]="'cookies.lead' | translate"></p>

            <h2 class="h4 fw-bold mt-5">{{ 'cookies.h_1' | translate }}</h2>
            <p>{{ 'cookies.p_1' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'cookies.h_2' | translate }}</h2>
            <p>{{ 'cookies.p_2_intro' | translate }}</p>
            <div class="table-responsive my-4">
              <table class="table table-bordered align-middle">
                <thead class="table-light">
                  <tr>
                    <th>{{ 'cookies.table_type' | translate }}</th>
                    <th>{{ 'cookies.table_purpose' | translate }}</th>
                    <th>{{ 'cookies.table_duration' | translate }}</th>
                    <th>{{ 'cookies.table_consent' | translate }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ 'cookies.table_row_type' | translate }}</td>
                    <td>{{ 'cookies.table_row_purpose' | translate }}</td>
                    <td>{{ 'cookies.table_row_duration' | translate }}</td>
                    <td>{{ 'cookies.table_row_consent' | translate }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>{{ 'cookies.p_2_outro' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'cookies.h_3' | translate }}</h2>
            <p>{{ 'cookies.p_3' | translate }}</p>

            <h2 class="h4 fw-bold mt-5">{{ 'cookies.h_4' | translate }}</h2>
            <p>{{ 'cookies.p_4' | translate }}</p>
            <ul>
              <li [innerHTML]="'cookies.li_chrome' | translate"></li>
              <li [innerHTML]="'cookies.li_firefox' | translate"></li>
              <li [innerHTML]="'cookies.li_safari' | translate"></li>
              <li [innerHTML]="'cookies.li_edge' | translate"></li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PoliticaCookiesComponent {}
