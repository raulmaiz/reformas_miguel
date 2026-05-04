import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './quienes-somos.component.html'
})
export class QuienesSomosComponent {}
