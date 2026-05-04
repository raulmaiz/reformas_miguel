import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  form = {
    nombre: '',
    telefono: '',
    tipo: '',
    rgpd: false
  };

  constructor(private translate: TranslateService) {}

  whatsAppUrl(): string {
    const text = this.translate.instant('common.wa_default_text');
    return `https://wa.me/34646450767?text=${encodeURIComponent(text)}`;
  }

  enviar(formRef: NgForm): void {
    if (!formRef.valid || !this.form.rgpd) {
      formRef.control.markAllAsTouched();
      return;
    }
    const isEs = this.translate.currentLang === 'es';
    const sentFrom = isEs
      ? '(Enviado desde reformasmiguel.cat)'
      : '(Enviat des de reformasmiguel.cat)';
    const labelType = isEs ? '*Quiero reformar:*' : '*Vull reformar:*';
    const labelPhone = isEs ? '*Teléfono:*' : '*Telèfon:*';
    const greet = isEs ? 'soy' : 'soc';

    const lineas = [
      `Hola Miguel, ${greet} ${this.form.nombre}.`,
      ``,
      this.form.tipo ? `${labelType} ${this.form.tipo}` : '',
      `${labelPhone} ${this.form.telefono}`,
      ``,
      sentFrom
    ].filter(Boolean);
    const mensaje = encodeURIComponent(lineas.join('\n'));
    window.open(`https://wa.me/34646450767?text=${mensaje}`, '_blank', 'noopener');
  }
}
