import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ChoiceCard {
  value: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-calcular-presupuesto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './calcular-presupuesto.component.html'
})
export class CalcularPresupuestoComponent {
  totalSteps = 5;
  step = 0;

  data = {
    tipo: '',
    tipoLabelKey: '',
    superficie: null as number | null,
    superficieUnsure: false,
    cuando: '',
    cuandoLabelKey: '',
    nombre: '',
    telefono: '',
    zona: '',
    email: '',
    rgpd: false
  };

  tipos: ChoiceCard[] = [
    { value: 'integral', labelKey: 'calc.tipo_integral', icon: 'bi-house-gear' },
    { value: 'bano', labelKey: 'calc.tipo_bano', icon: 'bi-droplet' },
    { value: 'cocina', labelKey: 'calc.tipo_cocina', icon: 'bi-egg-fried' },
    { value: 'pintura', labelKey: 'calc.tipo_pintura', icon: 'bi-brush' },
    { value: 'electric', labelKey: 'calc.tipo_electric', icon: 'bi-lightning-charge' },
    { value: 'other', labelKey: 'calc.tipo_other', icon: 'bi-three-dots' }
  ];

  cuandos: ChoiceCard[] = [
    { value: 'asap', labelKey: 'calc.q3_asap', icon: 'bi-fire' },
    { value: '1_3', labelKey: 'calc.q3_1_3', icon: 'bi-calendar-event' },
    { value: '3_6', labelKey: 'calc.q3_3_6', icon: 'bi-calendar-month' },
    { value: 'research', labelKey: 'calc.q3_research', icon: 'bi-search' }
  ];

  constructor(private translate: TranslateService) {}

  selectTipo(card: ChoiceCard): void {
    this.data.tipo = card.value;
    this.data.tipoLabelKey = card.labelKey;
    this.next();
  }

  selectCuando(card: ChoiceCard): void {
    this.data.cuando = card.value;
    this.data.cuandoLabelKey = card.labelKey;
    this.next();
  }

  next(): void {
    if (!this.canAdvance()) return;
    if (this.step < this.totalSteps - 1) {
      this.step++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prev(): void {
    if (this.step > 0) {
      this.step--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  canAdvance(): boolean {
    switch (this.step) {
      case 0:
        return !!this.data.tipo;
      case 1:
        return this.data.superficieUnsure || (this.data.superficie !== null && this.data.superficie > 0);
      case 2:
        return !!this.data.cuando;
      case 3:
        return !!this.data.nombre.trim() && !!this.data.telefono.trim() && !!this.data.zona.trim() && this.data.rgpd;
      default:
        return true;
    }
  }

  toggleUnsureSuperficie(): void {
    this.data.superficieUnsure = !this.data.superficieUnsure;
    if (this.data.superficieUnsure) this.data.superficie = null;
  }

  progressPct(): number {
    return Math.round((this.step / (this.totalSteps - 1)) * 100);
  }

  enviar(): void {
    const isEs = this.translate.currentLang === 'es';
    const tipoLabel = this.translate.instant(this.data.tipoLabelKey);
    const cuandoLabel = this.translate.instant(this.data.cuandoLabelKey);
    const sizeText = this.data.superficieUnsure
      ? this.translate.instant('calc.q2_unsure')
      : `${this.data.superficie} m²`;

    const greet = isEs ? 'soy' : 'soc';
    const labels = isEs
      ? { tipo: '*Tipo de reforma:*', size: '*Superficie:*', when: '*Cuándo empezar:*', tel: '*Teléfono:*', zona: '*Zona:*', email: '*Email:*', sent: '(Enviado desde la calculadora de reformasmiguel.cat)' }
      : { tipo: '*Tipus de reforma:*', size: '*Superfície:*', when: '*Quan començar:*', tel: '*Telèfon:*', zona: '*Zona:*', email: '*Email:*', sent: '(Enviat des de la calculadora de reformasmiguel.cat)' };

    const lineas = [
      `Hola Miguel, ${greet} ${this.data.nombre}.`,
      ``,
      `${labels.tipo} ${tipoLabel}`,
      `${labels.size} ${sizeText}`,
      `${labels.when} ${cuandoLabel}`,
      `${labels.zona} ${this.data.zona}`,
      `${labels.tel} ${this.data.telefono}`
    ];
    if (this.data.email) lineas.push(`${labels.email} ${this.data.email}`);
    lineas.push(``, labels.sent);

    const mensaje = encodeURIComponent(lineas.join('\n'));
    window.open(`https://wa.me/34646450767?text=${mensaje}`, '_blank', 'noopener');
  }
}
